#!/usr/bin/env bash
set -euo pipefail

# Image optimization pipeline for Musgo / Juanita Lopez site.
# Generates responsive WebP + JPEG fallback at 640w / 1024w / 1920w.
# Output: public/img/<slug>/<width>.webp and <width>.jpg

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT_DIR="$ROOT/public/img"

# WebP quality per width — slightly higher for the smaller variants since they
# compress so well, lower for the heaviest variant where the byte savings matter.
WEBP_Q_640=80
WEBP_Q_1024=78
WEBP_Q_1920=76

# JPEG fallback only at 1920w, mozjpeg-style for browsers without WebP.
JPG_Q=82

# Args:
#   $1 = source path
#   $2 = slug (output folder name)
#   $3 = optional crop position for tall sources ("top" | "center" | "smart"),
#        defaults to "center" — only used when generating the 1:1 hero crop.
optimize_one() {
  local src="$1"
  local slug="$2"
  local out="$OUT_DIR/$slug"
  mkdir -p "$out"

  if [ ! -f "$src" ]; then
    echo "  ! source not found: $src"
    return 1
  fi

  echo "  → $slug ($(du -h "$src" | cut -f1))"

  # Use ImageMagick for resizing (handles orientation + sharpening), then cwebp
  # for the final WebP encode (better compressor than ImageMagick's webp).
  local tmp="/tmp/musgo-resize-$slug-$$.png"

  for width in 640 1024 1920; do
    local q_var="WEBP_Q_$width"
    local q="${!q_var}"

    magick "$src" -auto-orient -strip \
      -resize "${width}x>" \
      -unsharp 0x0.5+0.5+0.008 \
      "$tmp"

    cwebp -q "$q" -m 6 -mt -metadata none -quiet "$tmp" -o "$out/${width}.webp"
    rm -f "$tmp"
  done

  # JPEG fallback only at 1920w (browsers that don't support WebP are <1% now,
  # so we don't need fallbacks at every width).
  magick "$src" -auto-orient -strip \
    -resize "1920x>" \
    -unsharp 0x0.5+0.5+0.008 \
    -sampling-factor 4:2:0 \
    -interlace JPEG \
    -quality "$JPG_Q" \
    "$out/1920.jpg"

  # Sizes report for the slug.
  local total
  total=$(du -ch "$out"/*.webp "$out"/*.jpg 2>/dev/null | tail -1 | cut -f1)
  echo "    ✓ output: $total ($(ls "$out" | tr '\n' ' '))"
}

echo "Output directory: $OUT_DIR"
echo

# === Existing portraits (src/assets) ===
ASSETS="$ROOT/src/assets"
echo "== Existing portraits =="
optimize_one "$ASSETS/juanita-riendo.png"          "juanita-riendo"
optimize_one "$ASSETS/juanita-green-wall.jpg"      "juanita-green-wall"
optimize_one "$ASSETS/juanita-thoughtful.jpg"      "juanita-thoughtful"
optimize_one "$ASSETS/juanita-conversational.jpg"  "juanita-conversational"
optimize_one "$ASSETS/juanita-closeup-speaker.jpg" "juanita-closeup-speaker"
optimize_one "$ASSETS/juanita-standing.jpg"        "juanita-standing"
optimize_one "$ASSETS/juanita-seated-black.jpg"    "juanita-seated-black"
optimize_one "$ASSETS/juanita-smiling-table.jpg"   "juanita-smiling-table"
optimize_one "$ASSETS/juanita-profile-white.jpg"   "juanita-profile-white"
optimize_one "$ASSETS/juanita-full-green.jpg"      "juanita-full-green"

echo
echo "== Nature / texture =="
optimize_one "$ASSETS/dosel-hero.jpg"        "dosel-hero"
optimize_one "$ASSETS/moss-closeup.jpg"      "moss-closeup"
optimize_one "$ASSETS/moss-stream.jpg"       "moss-stream"

echo
echo "== New session — KAS speaker shoot =="
KAS="$HOME/Downloads/juanitalopez-photo-download-1of1/SESION_I"
optimize_one "$KAS/KAS_8584.jpg" "speaker-hands-open"     # vertical, two hands open
optimize_one "$KAS/KAS_8625.jpg" "speaker-podium-wide"    # horizontal, smiling at podium
optimize_one "$KAS/KAS_8642.jpg" "speaker-warm-smile"     # vertical, warm smile
optimize_one "$KAS/KAS_8647.jpg" "speaker-full-smile"     # vertical, full body w/ smile
optimize_one "$KAS/KAS_8670.jpg" "speaker-emphasis"       # vertical, hand emphasizing
optimize_one "$KAS/KAS_8679.jpg" "speaker-listening"      # vertical, looking down
optimize_one "$KAS/KAS_8855.jpg" "speaker-room-wide"      # horizontal, full room context
optimize_one "$KAS/KAS_8553.jpg" "speaker-mid-gesture"    # vertical, mid gesture

echo
echo "== Done =="
du -sh "$OUT_DIR"
