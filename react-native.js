module.exports = {
  extends: ['./react', './rules/reactNative'].map(require.resolve),
  plugins: ['react-native'],
  env: {
    'react-native/react-native': true,
  },
}
