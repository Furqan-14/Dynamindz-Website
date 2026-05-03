"""
One-shot script to process Logo New.jpeg:
  1. Remove the cream background -> Logo.png (full logo, transparent)
  2. Crop the "i" + lightning bolt -> Mark.png (favicon source)
Both written to src/assets/.
"""
from PIL import Image
from collections import deque
import numpy as np
import os


def keep_largest_components(mask, k=2):
    """Return a copy of `mask` keeping only the k largest 4-connected components."""
    visited = np.zeros_like(mask, dtype=bool)
    h, w = mask.shape
    components = []  # list of (size, [pixels])
    for y in range(h):
        for x in range(w):
            if mask[y, x] and not visited[y, x]:
                # BFS
                queue = deque([(y, x)])
                visited[y, x] = True
                pixels = []
                while queue:
                    cy, cx = queue.popleft()
                    pixels.append((cy, cx))
                    for dy, dx in ((-1, 0), (1, 0), (0, -1), (0, 1)):
                        ny, nx = cy + dy, cx + dx
                        if (
                            0 <= ny < h and 0 <= nx < w
                            and mask[ny, nx] and not visited[ny, nx]
                        ):
                            visited[ny, nx] = True
                            queue.append((ny, nx))
                components.append((len(pixels), pixels))
    components.sort(key=lambda c: c[0], reverse=True)
    out = np.zeros_like(mask)
    for _, pixels in components[:k]:
        for (py, px) in pixels:
            out[py, px] = True
    return out

ROOT = os.path.dirname(os.path.abspath(__file__))
SRC  = os.path.join(ROOT, "Logo New.jpeg")
OUT  = os.path.join(ROOT, "src", "assets")
os.makedirs(OUT, exist_ok=True)

im   = Image.open(SRC).convert("RGBA")
arr  = np.array(im).astype(np.int16)
r, g, b = arr[..., 0], arr[..., 1], arr[..., 2]

# --- Soft alpha mask based on how close pixel is to background cream ---
# Background is roughly (240, 240, 235); we treat very light pixels as transparent
# and dark/colored pixels as fully opaque, with a smooth ramp in between.
lum = (r + g + b) / 3.0
# fully opaque below 180, fully transparent above 240, linear in between
alpha = np.clip(255 - ((lum - 180) / 60.0) * 255, 0, 255)
alpha = alpha.astype(np.uint8)

out = arr.astype(np.uint8)
out[..., 3] = alpha

# Where alpha is 0, also clear the rgb so any premultiplication is clean.
mask = alpha == 0
out[mask, 0:3] = 0

full = Image.fromarray(out, "RGBA")

# Trim transparent borders
bbox = full.getbbox()
if bbox:
    full = full.crop(bbox)
full.save(os.path.join(OUT, "Logo.png"), optimize=True)
print(f"Logo.png saved: {full.size}")

# --- White (dark-mode) variant: turn black wordmark white, keep i/bolt color ---
arrW = np.array(full).astype(np.int16)
rW, gW, bW, aW = arrW[..., 0], arrW[..., 1], arrW[..., 2], arrW[..., 3]
# "Black" pixels = low brightness AND not strongly blue
lumW    = (rW + gW + bW) / 3.0
not_blue = (bW - rW) < 30  # blue stem has b - r >> 0
black_mask = (lumW < 90) & not_blue & (aW > 0)
arrW_out = arrW.copy()
# Map black to near-white, preserving the per-channel ratio so anti-aliasing stays smooth.
# Easiest: replace rgb with white where mask is true.
arrW_out[black_mask, 0] = 245
arrW_out[black_mask, 1] = 246
arrW_out[black_mask, 2] = 250
Image.fromarray(arrW_out.astype(np.uint8), "RGBA").save(
    os.path.join(OUT, "Logo-white.png"), optimize=True
)
print("Logo-white.png saved")

# --- Build a Mark image (lightning bolt + i stem) by color extraction ---
# Strategy: build a NEW transparent canvas. For each pixel within the rough
# horizontal range of the blue 'i', keep only pixels that are clearly blue
# (the i stem) or clearly gray/silver (the lightning bolt). Drop anything
# that's pure black (which would be neighboring letters m/n).
arr2 = np.array(full).astype(np.int16)
r2, g2, b2, a2 = arr2[..., 0], arr2[..., 1], arr2[..., 2], arr2[..., 3]

blue_mask = (b2 - r2 > 40) & (b2 > 120) & (a2 > 100)
ys, xs = np.where(blue_mask)
if not len(xs):
    raise SystemExit("No blue pixels found — could not locate the 'i'")

x_blue_min, x_blue_max = xs.min(), xs.max()
y_blue_min = ys.min()
cx = (x_blue_min + x_blue_max) // 2
blue_w = max(1, x_blue_max - x_blue_min)

# Horizontal window: a bit wider than the i stem to catch the lightning bolt
pad = int(blue_w * 1.6)
left  = max(0, cx - pad)
right = min(full.size[0], cx + pad)

# Make a column mask
col_mask = np.zeros_like(a2, dtype=bool)
col_mask[:, left:right] = True

# Lightning is strictly ABOVE the top of the blue stem.
# Anti-aliasing artifacts from neighboring 'm'/'n' descenders sit at body-text
# y-range, which is below the top of the i. So restrict gray pixels to rows
# above the blue stem's top + a small overlap.
H = arr2.shape[0]
row_idx = np.arange(H)[:, None]
above_blue = row_idx <= (y_blue_min + 4)

# Gray/silver lightning bolt: roughly equal RGB, mid-bright
gray_mask = (
    (np.abs(r2 - g2) < 15)
    & (np.abs(g2 - b2) < 15)
    & (r2 > 130) & (r2 < 220)
    & (a2 > 100)
    & above_blue
)

# Combined mask: blue OR gray, but only inside the column window
keep = (blue_mask | gray_mask) & col_mask

# Drop tiny stray blobs — keep only the two largest connected regions
# (lightning bolt + i stem). Anti-aliasing islands and JPEG specks vanish.
keep = keep_largest_components(keep, k=2)

mark_arr = np.zeros_like(arr2, dtype=np.uint8)
mark_arr[keep] = arr2[keep].astype(np.uint8)

mark = Image.fromarray(mark_arr, "RGBA")
mbbox = mark.getbbox()
if mbbox:
    mark = mark.crop(mbbox)

# Pad to square for favicon use
side = max(mark.size) + 16  # tiny breathing room
square = Image.new("RGBA", (side, side), (0, 0, 0, 0))
square.paste(mark, ((side - mark.size[0]) // 2, (side - mark.size[1]) // 2))
square.save(os.path.join(OUT, "Mark.png"), optimize=True)
square.resize((256, 256), Image.LANCZOS).save(
    os.path.join(OUT, "favicon.png"), optimize=True
)
print(f"Mark.png saved: {square.size}")
