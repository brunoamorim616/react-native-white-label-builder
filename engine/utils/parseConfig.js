import { readFileSync } from "fs";
import { dirname } from "path";

const validateConfig = (config) => {
  const validateField = (fieldName, field) => {
    if (!field) {
      console.error(`missing field '${fieldName}' in config`);
      process.exit(0);
    }
  };
  validateField("id", config.id);
  validateField("name", config.name);
  validateField("theme", config.theme);
  validateField("baseUrl", config.baseUrl);
  validateField("modules", config.modules);
  validateField("iconsPath", config.iconsPath);
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
