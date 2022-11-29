import fs from "fs-extra";
import glb from "glob";

const { removeSync, copySync } = fs;
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
