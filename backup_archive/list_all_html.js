const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\Shivam\\.gemini\\antigravity\\scratch\\vijigishu-redesign';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

console.log(`Found ${files.length} HTML files:`);
files.forEach(f => console.log('  ' + f));
