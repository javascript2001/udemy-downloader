# 🎬 M3U8 Video Downloader & Merger (Node.js + FFmpeg)

Easily download and merge `.m3u8` video segments into a single `.mp4` file using **Node.js** and **FFmpeg**.

---

## 📦 Requirements

Make sure you have the following installed and configured:

### ✅ Node.js
- [Download Node.js](https://nodejs.org/)
- Verify installation:
  ```bash
  node -v
✅ FFmpeg
Download FFmpeg

Verify installation:

bash
ffmpeg -version
🔧 Add FFmpeg to PATH
Windows:
Extract FFmpeg ZIP.

Copy bin folder path (e.g., C:\ffmpeg\bin).

Go to: System Properties > Environment Variables.

Add the path to the Path variable.

macOS:
bash
brew install ffmpeg
Linux (Debian/Ubuntu):
bash
sudo apt update
sudo apt install ffmpeg
🚀 How to Use
1. Setup .m3u8 Playlist
Option A: Paste your .m3u8 file content inside video.m3u8.

Option B: Delete video.m3u8, add your own .m3u8 file, and rename it to video.m3u8.

2. Generate Segment URLs
Run this command:

bash
node array.js
➡️ This will generate all video segment URLs in array.txt.

3. Add Link Array to Download Script
Open script.js.

Remove the existing link variable.

Copy the link array from array.js and paste it into script.js.

4. Download Video Segments
Run:

bash
node script.js
✅ This will:

Download all .ts video segments.

Create a merge.txt file for merging with FFmpeg.

5. Merge Segments into MP4
After script.js completes, it will show a command like:

bash
ffmpeg -f concat -safe 0 -i merge.txt -c copy output.mp4
▶️ Copy and run that command in your terminal to merge the video.

💡 You can change output.mp4 to any name you like.

⚠️ Notes
Make sure your .m3u8 file is valid and accessible.

This tool works best with a correct setup and working links.

Use a stable internet connection for segment downloading.

❓ Got Questions?
Feel free to open an issue if you need help or want to suggest improvements.

📝 License
This project is licensed under the MIT License.








