import fs from "fs-extra";
const { readFileSync, writeFileSync } = fs;

const replaceStringInFile = (filename, strOld, strNew) => {
  console.log(`Replace '${strOld}' with '${strNew}' in ${filename}`);
  const fileOld = readFileSync(filename, "utf8");
  const fileNew = fileOld.replace(new RegExp(strOld, "g"), strNew);
  writeFileSync(filename, fileNew);
};

export default replaceStringInFile;
