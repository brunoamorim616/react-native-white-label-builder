import { readFileSync } from "fs";
import { dirname } from "path";

const validateConfig = (config) => {
  const validateField = (field) => {
    if (!field) {
      console.error(`missing field '${fieldName}' in config`);
      process.exit(0);
    }
  };
  validateField(config.id);
  validateField(config.name);
  validateField(config.navigation);
  // validateField("theme", config.theme);
  // validateField("baseUrl", config.baseUrl);
  // validateField("iconsPath", config.iconsPath);
};

const patchConfigIconsPath = (config, configPath) => ({
  ...config,
  iconsPath: `${dirname(configPath)}/${config.iconsPath}`,
});

const parseConfig = (configPath) => {
  const configJson = readFileSync(configPath, "utf8");
  const config = JSON.parse(configJson);
  const configPatched = patchConfigIconsPath(config, configPath);
  validateConfig(configPatched);
  return configPatched;
};

export default parseConfig;
