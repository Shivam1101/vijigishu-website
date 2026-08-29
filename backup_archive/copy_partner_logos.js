const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Shivam\\Downloads\\Vijigishu  26 chagnes\\logos VJ partner\\logos VJ partner';
const destDir = 'C:\\Users\\Shivam\\.gemini\\antigravity\\scratch\\vijigishu-redesign\\partners';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

for (let i = 1; i <= 14; i++) {
  const fileName = `${i}.png`;
  const srcPath = path.join(srcDir, fileName);
  const destPath = path.join(destDir, fileName);

  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied: ${fileName} -> ${destPath}`);
  } else {
    console.log(`File missing: ${srcPath}`);
  }
}

console.log('\nAll 14 partner logo files copied successfully!');
