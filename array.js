const fs = require('fs');


const content = fs.readFileSync('video.m3u8', 'utf-8');


const urlRegex = /(https?:\/\/[^\s]+)/g;
const links = content.match(urlRegex) || [];


const output = `const links = ${JSON.stringify(links, null, 2)};\n`;
fs.writeFileSync('array.txt', output);

console.log('✅ Links extracted from video.m3u8 and saved to array.js');
