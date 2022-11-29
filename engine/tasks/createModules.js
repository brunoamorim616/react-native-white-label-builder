import fs from "fs-extra";

const { writeFileSync } = fs;

const createModules = (dirDst, modules) => {
  console.log(`Write ${dirDst}/src/modules/index.ts`);
  const fileContent = `\
// NOTICE: This file is auto-generated by wl-engine.
${modules.map((module) => `import ${module} from './${module}';`).join("\n")}

export default [${modules.join(", ")}];
`;
  writeFileSync(`${dirDst}/src/modules/index.ts`, fileContent);
};

export default createModules;
