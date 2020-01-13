# eslint-config-rokket-labs

Official Rokket Labs ESLint configuration for all JS/TS projects. :rocket:

## Usage

Use the following command to install this configuration

```
// With npx
npx install-peerdeps --dev eslint-config-rokket-labs
```

Or if you want to use yarn/npm directly

```
// With yarn
yarn add -D eslint eslint-plugin-import eslint-config-rokket-labs

// With npm
npm install --save-dev eslint eslint-plugin-import eslint-config-rokket-labs
```

After installing, add `"extends": "rokket-labs"` to your `.eslintrc` file.

### Use with React or React Native

By default, the `rokket-labs` ESLint configuration works with Node and plain JS projects.

If you want to use it for React projects, add `"extends": "rokket-labs/react"` or `"extends": "rokket-labs/react-native"` (for React Native projects) to your `.eslintrc` file.

## Contributing

To contribute to this configuration (we are accepting pull requests!), create an [issue](https://github.com/rokket-labs/eslint-config-rokket-labs/issues) and then link your PR to this issue.

To run this configuration locally, install all peer dependencies and then `yarn link` this project to test it out before uploading a pull request.
