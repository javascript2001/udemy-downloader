const fs = require('fs');
const {writeFile } = require('fs/promises');



const links = [
  "your link goes here"
];


async function downloadAllTSFiles() {
fs.writeFileSync('merge.txt', '', 'utf8');
  for (let i = 0; i < links.length; i++) {
    const url = links[i];
    const filename = `video${i}.ts`;

    try {
      console.log(`⬇️ Downloading: segment ${i}`);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`❌ Failed to fetch segment ${i}: ${response.status}`);
      }

      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      await writeFile(filename, buffer);
      console.log(`✅ Saved as ${filename}`);
      const content = `file ${filename}\n`;
      fs.appendFileSync('merge.txt',content);
    } catch (err) {
      console.error(`❌ Error downloading ${url}:`, err.message);
    }
  }
}

async function main() {
    await downloadAllTSFiles();
    console.log("run following command : \n");
    console.log("ffmpeg -f concat -safe 0 -i merge.txt -c copy output.mp4");
}
main();


