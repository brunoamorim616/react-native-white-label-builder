module.exports = {
  preset: 'react-native',
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    './node_modules/react-native-reanimated/lib/reanimated2/jestUtils.js',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
