// ElevenLabs Voice Narration Generator CLI
const fs = require('fs');
const path = require('path');

const API_KEY = process.env.ELEVENLABS_API_KEY || 'sk_91fedb068eb0c1bb634e5259b0cc3c4af18873481f1e3e7c';
// Default standard male narrator: pNInz6obpgDQGcFmaJgB (Adam)
// Or use your cloned Voice ID: SPnt7u3Gb2UpfIV1to5x (requires ElevenLabs paid plan)
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID || 'JBFqnCBsd6RMkjVDRZzb';

async function generateAudio(text, outputFilename) {
  if (!text || !outputFilename) {
    console.error('Usage: node scripts/generate-voice.js "<text>" <output-filename.mp3>');
    process.exit(1);
  }

  console.log(`Generating voice narration for: "${text.substring(0, 60)}..."`);
  const audioDir = path.join(__dirname, '..', 'audio');
  if (!fs.existsSync(audioDir)) fs.mkdirSync(audioDir, { recursive: true });

  const destPath = path.join(audioDir, outputFilename);

  try {
    const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`, {
      method: 'POST',
      headers: {
        'Accept': 'audio/mpeg',
        'Content-Type': 'application/json',
        'xi-api-key': API_KEY
      },
      body: JSON.stringify({
        text: text.substring(0, 4800),
        model_id: 'eleven_multilingual_v2',
        voice_settings: { stability: 0.5, similarity_boost: 0.8 }
      })
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`ElevenLabs API Error (${res.status}): ${err}`);
    }

    const buffer = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(destPath, buffer);
    console.log(`Successfully generated: audio/${outputFilename} (${buffer.length} bytes)`);
  } catch (err) {
    console.error('Error generating audio:', err.message);
  }
}

const args = process.argv.slice(2);
if (args.length >= 2) {
  generateAudio(args[0], args[1]);
} else {
  module.exports = { generateAudio };
}
