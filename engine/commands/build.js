import createRouting from "../../wl-engine/tasks/createRouting.js";
import copyDirectory from "../tasks/copyDirectory.js";
import createBaseUrl from "../tasks/createBaseUrl.js";
import createModules from "../tasks/createModules.js";
import createTheme from "../tasks/createTheme.js";
import install from "../tasks/install.js";
import setIcon from "../tasks/setIcon.js";
import setId from "../tasks/setId.js";
import setName from "../tasks/setName.js";

function build(config, dirSrc, dirDst) {
  copyDirectory(dirSrc, dirDst);
  createModules(dirDst, config.modules);
  createRouting(dirDst, config.router);
  // createTheme(dirDst, config.theme);
  // createBaseUrl(dirDst, config.baseUrl);
  setId(dirDst, config.id);
  setName(dirDst, config.name);
  setIcon(dirDst, config.iconsPath);
  install(dirDst);
}

export default build;
