const fs = require('fs');
const path = require('path');

const dir1 = 'C:\\Users\\Shivam\\Downloads\\Vijigishu  26 chagnes\\logos VJ partner';
const dir2 = 'C:\\Users\\Shivam\\Downloads\\Vijigishu  26 chagnes\\logos VJ partner\\logos VJ partner';

function listDir(d) {
  if (fs.existsSync(d)) {
    console.log(`\n=== CONTENTS OF: ${d} ===`);
    const files = fs.readdirSync(d);
    files.forEach((f, i) => console.log(`  [${i+1}] ${f}`));
    return files;
  } else {
    console.log(`Directory does not exist: ${d}`);
    return [];
  }
}

listDir(dir1);
listDir(dir2);
