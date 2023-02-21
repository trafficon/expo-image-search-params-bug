# Minimal Reproduction for https://github.com/expo/expo/issues/21321

A dev client is currently necessary for `expo-image`:
```shell
eas build --profile development --platform ios --local
```
Configuration of bundle/package ids etc. will be requested by `eas-cli`.

Before running `npm start`, make sure to start the express server with `npm run express` in another terminal.
