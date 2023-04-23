import createNavigation from "../tasks/createNavigation.js";
import copyDirectory from "../tasks/copyDirectory.js";
import createModules from "../tasks/createModules.js";
import createBaseUrl from "../tasks/createBaseUrl.js";
import createTheme from "../tasks/createTheme.js";
import install from "../tasks/install.js";
import setIcon from "../tasks/setIcon.js";
import setId from "../tasks/setId.js";
import setName from "../tasks/setName.js";

function build(config, dirSrc, dirDst) {
  copyDirectory(dirSrc, dirDst);
  createNavigation(dirDst, config.router);
  // createModules(dirDst, config.modules);
  // createTheme(dirDst, config.theme);
  // createBaseUrl(dirDst, config.baseUrl);
  setId(dirDst, config.id);
  setName(dirDst, config.name);
  // setIcon(dirDst, config.iconsPath);
  install(dirDst);
}

export default build;
