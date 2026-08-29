const fs = require('fs');

const transcriptPath = 'C:\\Users\\Shivam\\.gemini\\antigravity\\brain\\46072233-da5b-45b7-a3fb-cae892cada88\\.system_generated\\logs\\transcript.jsonl';
const lines = fs.readFileSync(transcriptPath, 'utf-8').split('\n');

const lineIndices = [204, 212, 230, 245, 480, 504, 638, 772];

lineIndices.forEach(idx => {
  if (lines[idx]) {
    const line = lines[idx];
    if (line.includes('testimonials') || line.includes('testi-card') || line.includes('testi-slider')) {
      console.log(`\n================= TRANSCRIPT LINE ${idx + 1} =================`);
      try {
        const obj = JSON.parse(line);
        if (obj.tool_calls) {
          obj.tool_calls.forEach(tc => {
            if (tc.name === 'write_to_file' || tc.name === 'replace_file_content') {
              console.log('Tool:', tc.name, 'File:', tc.args.TargetFile || tc.args.target_file);
              const code = tc.args.CodeContent || tc.args.ReplacementContent || tc.args.code_content;
              if (code && (code.includes('testi') || code.includes('testimonials'))) {
                console.log('--- CODE SNIPPET (first 1000 chars) ---');
                console.log(code.substring(0, 1000));
              }
            }
          });
        }
      } catch (e) {
        console.log('Error parsing line JSON:', e.message);
      }
    }
  }
});
