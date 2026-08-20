const fs = require('fs');

const fp = 'C:\\Users\\Shivam\\.gemini\\antigravity\\brain\\46072233-da5b-45b7-a3fb-cae892cada88\\.system_generated\\steps\\3\\content.md';
if (fs.existsSync(fp)) {
  const content = fs.readFileSync(fp, 'utf-8');
  console.log('=== HOMEPAGE FIRST 15 HEADINGS AND TEXTS ===');
  
  // Find all headings (h1, h2, h3, h4, h5, h6) and print their tag, attributes, and text
  const headingRegex = /<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi;
  let match;
  let count = 0;
  while ((match = headingRegex.exec(content)) !== null && count < 25) {
    const tag = match[1];
    const text = match[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    console.log(`${tag}: ${text}`);
    count++;
  }
} else {
  console.log('File not found:', fp);
}
