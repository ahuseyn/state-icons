import fs from "fs";
import states from "./states.json" assert { type: "json" };

const iconsDir = "icons/";
const size = "48px";

function buildIcons() {
  // Create icons folder if doesn't exist
  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir);
  }

  for (let i in states) {
    const state = states[i];

    // Contents of SVG file
    const content = `<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="${state.box}"
      width="${size}"
      height="${size}"
      data-name="${state.name}"
      data-fips="${state.fips}"
      data-abbrev="${i}">
      <path d="${state.path}"></path>
    </svg>`;

    // Remove line breaks and whitespaces
    const contentCompact = content.replace(/\n[ \t]+/g, " ");

    // Write individual icon files into /icons folder
    fs.writeFileSync(iconsDir + i + ".svg", contentCompact);
  }
}

buildIcons();
