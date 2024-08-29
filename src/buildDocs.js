import fs from "fs";
import states from "./states.json" assert { type: "json" };

const docsDir = "docs/";

function buildDocs() {
  let writeToFile = "const statesArr=" + JSON.stringify(Object.values(states));

  fs.writeFileSync(docsDir + "states" + ".js", writeToFile);
}

buildDocs();
