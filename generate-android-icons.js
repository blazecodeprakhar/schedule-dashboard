const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const resDir = path.join(__dirname, 'android', 'app', 'src', 'main', 'res');

const sizes = {
  'mipmap-mdpi': 48,
  'mipmap-hdpi': 72,
  'mipmap-xhdpi': 96,
  'mipmap-xxhdpi': 144,
  'mipmap-xxxhdpi': 192
};

async function generateIcons() {
  const iconAnySvg = path.join(__dirname, 'icon-any.svg');
  const iconMaskableSvg = path.join(__dirname, 'icon-maskable.svg');

  for (const [folder, size] of Object.entries(sizes)) {
    const targetFolder = path.join(resDir, folder);
    if (!fs.existsSync(targetFolder)) {
      fs.mkdirSync(targetFolder, { recursive: true });
    }

    // Generate standard app icon (transparent home screen icon)
    await sharp(iconAnySvg)
      .resize(size, size)
      .png()
      .toFile(path.join(targetFolder, 'ic_launcher.png'));

    await sharp(iconAnySvg)
      .resize(size, size)
      .png()
      .toFile(path.join(targetFolder, 'ic_launcher_round.png'));

    // Generate adaptive foreground icon
    await sharp(iconAnySvg)
      .resize(size, size)
      .png()
      .toFile(path.join(targetFolder, 'ic_launcher_foreground.png'));

    console.log(`Generated icons for ${folder} (${size}x${size})`);
  }
}

generateIcons().catch(console.error);
