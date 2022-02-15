module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  setupFiles: ['<rootDir>/tests/setup.js'],
  collectCoverageFrom: ['src/**/*.{js,vue}'],
}
