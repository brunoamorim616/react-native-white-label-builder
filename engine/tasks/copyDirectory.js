import fs from "fs-extra";
const { removeSync, copySync } = fs;
import glb from "glob";
const { sync } = glb;

const copyDirectory = (dirSrc, dirDst) => {
  console.log(`Copy ${dirSrc} to ${dirDst}`);
  removeSync(dirDst);
  const files = sync(`${dirSrc}/**/*`, {
    dot: true,
  });
  files.forEach((file) => copySync(file, file.replace(dirSrc, dirDst)));
};

export default copyDirectory;
