import { execSync } from "child_process";

const install = (dirDst) => {
  console.log(`Installing dependencies in ${dirDst}`);
  execSync("yarn install", { cwd: dirDst });
};

export default install;
