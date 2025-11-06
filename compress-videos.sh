#!/bin/bash

# Video Compression Script for YIIVA Landing Page
# Optimizes videos for web delivery with aggressive compression

echo "🎬 Starting video compression for YIIVA landing page..."
echo "📦 Original backups saved in *_backup directories"
echo ""

# Compression settings
BITRATE="600k"
MAXRATE="750k"
BUFSIZE="1500k"

# Counter for progress
total_files=0
completed_files=0

# Count total files
total_files=$(find public/images/hero_media public/images/card_videos -name "*.mp4" | wc -l)

echo "📊 Found $total_files videos to compress"
echo "⚙️  Settings: Bitrate=${BITRATE}, MaxRate=${MAXRATE}"
echo ""

# Function to compress a single video
compress_video() {
    input_file="$1"
    output_file="${input_file%.mp4}_compressed.mp4"

    original_size=$(du -h "$input_file" | cut -f1)

    echo "🔄 Compressing: $(basename "$input_file") (Original: $original_size)"

    ffmpeg -i "$input_file" \
        -c:v libx264 \
        -preset slow \
        -crf 28 \
        -b:v "$BITRATE" \
        -maxrate "$MAXRATE" \
        -bufsize "$BUFSIZE" \
        -vf "scale=720:-2" \
        -movflags +faststart \
        -an \
        -y \
        "$output_file" 2>&1 | grep -E "(frame=|size=)" | tail -1

    if [ -f "$output_file" ]; then
        new_size=$(du -h "$output_file" | cut -f1)

        # Replace original with compressed version
        mv "$output_file" "$input_file"

        ((completed_files++))
        echo "✅ Done: $(basename "$input_file") → $new_size ($completed_files/$total_files)"
        echo ""
    else
        echo "❌ Failed to compress: $(basename "$input_file")"
        echo ""
    fi
}

# Compress hero videos
echo "📹 Compressing hero section videos..."
for video in public/images/hero_media/*.mp4; do
    if [ -f "$video" ]; then
        compress_video "$video"
    fi
done

echo ""
echo "🎴 Compressing card videos..."
for video in public/images/card_videos/*.mp4; do
    if [ -f "$video" ]; then
        compress_video "$video"
    fi
done

echo ""
echo "🎉 Compression complete!"
echo ""
echo "📊 Size comparison:"
echo "Before:"
du -sh public/images/hero_media_backup/ public/images/card_videos_backup/
echo ""
echo "After:"
du -sh public/images/hero_media/ public/images/card_videos/
echo ""
echo "💡 To restore originals: "
echo "   cp public/images/hero_media_backup/* public/images/hero_media/"
echo "   cp public/images/card_videos_backup/* public/images/card_videos/"
