import fs from "fs";
import states from "../../src/states.json" assert { type: "json" };

const indexDir = "src/";
const iconsDir = indexDir + "icons/";

function buildComponents() {
  // Create icons folder if doesn't exist
  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir);
  }

  // Exports will be used for index file
  let indexExports = [];

  for (let i in states) {
    const state = states[i];

    // JSX component for individual icon file
    const content = `
      import React, { forwardRef } from "react"; 
      import { Icon } from "../types";

      const ${i} = forwardRef<SVGSVGElement, Icon>(
        ({ color = "currentColor", size = 24, ...rest }, ref) => {
          return (
            <svg
              ref={ref}
              xmlns="http://www.w3.org/2000/svg"
              width={size}
              height={size}
              viewBox="${state.box}"
              fill={color}
              data-name="${state.name}"
              data-fips="${state.fips}"
              data-abbrev="${i}"
              {...rest}
            >
              <path d="${state.path}" />
            </svg>
          );
        }
      );

      export default ${i};
    `;

    // Add icon export into index
    indexExports.push(`export {default as ${i}} from "./icons/${i}"`);

    // Write individual icon files into /icons folder
    fs.writeFileSync(iconsDir + i + ".tsx", content);
  }

  // Write index file into /src folder
  fs.writeFileSync(indexDir + "index" + ".ts", indexExports.join("\n"));
}

buildComponents();
