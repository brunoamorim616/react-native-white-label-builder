import fs from "fs-extra";
const { moveSync, removeSync } = fs;
import replaceStringInFile from "../utils/replaceStringInFile.js";

const setId = (dirDst, idNew) => {
  const idOld = "com.whitelabel";
  const packagePathOld = idOld.replace(/\./g, "/");
  const packagePathNew = idNew.replace(/\./g, "/");
  const packageRootOld = packagePathOld.split("/")[0];

  replaceStringInFile(`${dirDst}/android/app/_BUCK`, idOld, idNew);
  replaceStringInFile(`${dirDst}/android/app/build.gradle`, idOld, idNew);
  replaceStringInFile(
    `${dirDst}/android/app/src/main/AndroidManifest.xml`,
    idOld,
    idNew
  );
  replaceStringInFile(
    `${dirDst}/android/app/src/main/java/${packagePathOld}/MainActivity.java`,
    idOld,
    idNew
  );
  replaceStringInFile(
    `${dirDst}/android/app/src/main/java/${packagePathOld}/MainApplication.java`,
    idOld,
    idNew
  );
  replaceStringInFile(
    `${dirDst}/android/app/src/main/java/${packagePathOld}/newarchitecture/components/MainComponentsRegistry.java`,
    idOld,
    idNew
  );
  replaceStringInFile(
    `${dirDst}/android/app/src/main/java/${packagePathOld}/newarchitecture/modules/MainApplicationTurboModuleManagerDelegate.java`,
    idOld,
    idNew
  );

  replaceStringInFile(
    `${dirDst}/android/app/src/main/java/${packagePathOld}/newarchitecture/MainApplicationReactNativeHost.java`,
    idOld,
    idNew
  );

  replaceStringInFile(
    `${dirDst}/android/app/src/debug/java/${packagePathOld}/ReactNativeFlipper.java`,
    idOld,
    idNew
  );
  replaceStringInFile(
    `${dirDst}/ios/whitelabel.xcodeproj/project.pbxproj`,
    idOld,
    idNew
  );

  console.log(
    `Move ${`${dirDst}/android/app/src/main/java/${packagePathOld}/MainActivity.java`}`
  );
  console.log(
    `  to ${`${dirDst}/android/app/src/main/java/${packagePathNew}/MainActivity.java`}`
  );
  moveSync(
    `${dirDst}/android/app/src/main/java/${packagePathOld}/MainActivity.java`,
    `${dirDst}/android/app/src/main/java/${packagePathNew}/MainActivity.java`
  );
  console.log(
    `Move ${`${dirDst}/android/app/src/main/java/${packagePathOld}/MainApplication.java`}`
  );
  console.log(
    `  to ${`${dirDst}/android/app/src/main/java/${packagePathNew}/MainApplication.java`}`
  );
  moveSync(
    `${dirDst}/android/app/src/main/java/${packagePathOld}/MainApplication.java`,
    `${dirDst}/android/app/src/main/java/${packagePathNew}/MainApplication.java`
  );

  console.log(
    `Move ${`${dirDst}/android/app/src/main/java/${packagePathOld}/newarchitecture/components/MainComponentsRegistry.java`}`
  );
  console.log(
    `  to ${`${dirDst}/android/app/src/main/java/${packagePathNew}/newarchitecture/components/MainComponentsRegistry.java`}`
  );
  moveSync(
    `${dirDst}/android/app/src/main/java/${packagePathOld}/newarchitecture/components/MainComponentsRegistry.java`,
    `${dirDst}/android/app/src/main/java/${packagePathNew}/newarchitecture/components/MainComponentsRegistry.java`
  );

  console.log(
    `Move ${`${dirDst}/android/app/src/main/debug/java/${packagePathOld}/ReactNativeFlipper.java`}`
  );
  console.log(
    `  to ${`${dirDst}/android/app/src/main/java/${packagePathNew}/ReactNativeFlipper.java`}`
  );
  moveSync(
    `${dirDst}/android/app/src/debug/java/${packagePathOld}/ReactNativeFlipper.java`,
    `${dirDst}/android/app/src/debug/java/${packagePathNew}/ReactNativeFlipper.java`
  );

  console.log(
    `Move ${`${dirDst}/android/app/src/main/java/${packagePathOld}/newarchitecture/modules/MainApplicationTurboModuleManagerDelegate.java`}`
  );
  console.log(
    `  to ${`${dirDst}/android/app/src/main/java/${packagePathNew}/newarchitecture/modules/MainApplicationTurboModuleManagerDelegate.java`}`
  );
  moveSync(
    `${dirDst}/android/app/src/main/java/${packagePathOld}/newarchitecture/modules/MainApplicationTurboModuleManagerDelegate.java`,
    `${dirDst}/android/app/src/main/java/${packagePathNew}/newarchitecture/modules/MainApplicationTurboModuleManagerDelegate.java`
  );

  console.log(
    `Move ${`${dirDst}/android/app/src/main/java/${packagePathOld}/newarchitecture/MainApplicationReactNativeHost.java`}`
  );
  console.log(
    `  to ${`${dirDst}/android/app/src/main/java/${packagePathNew}/newarchitecture/MainApplicationReactNativeHost.java`}`
  );
  moveSync(
    `${dirDst}/android/app/src/main/java/${packagePathOld}/newarchitecture/MainApplicationReactNativeHost.java`,
    `${dirDst}/android/app/src/main/java/${packagePathNew}/newarchitecture/MainApplicationReactNativeHost.java`
  );

  console.log(`Remove ${dirDst}/android/app/src/main/java/${packageRootOld}`);
  removeSync(`${dirDst}/android/app/src/main/java/${packageRootOld}`);

  console.log(`Remove ${dirDst}/android/app/src/debug/java/${packageRootOld}`);
  removeSync(`${dirDst}/android/app/src/debug/java/${packageRootOld}`);
};

export default setId;
