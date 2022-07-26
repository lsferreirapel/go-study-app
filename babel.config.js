module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@src": "./src",
          "@common": "./src/common",
          "@assets": "./src/common/assets",
          "@navigators": "./src/navigators",
          "@features": "./src/features",
          "@generated": "./src/generated",
        }
      }
    ],
    ["module:react-native-dotenv"],    
  ]
};
