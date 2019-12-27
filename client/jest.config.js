module.exports = {
  moduleFileExtensions: [
    'js',
    'ts',
    'tsx',
    'vue'
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  globals: {
    'ts-jest': {
      babelConfig: true
    }
  },
  testRegex: "(/__tests__/unit|(\\.|/)(test|spec))\\.(tsx?)$",
  setupTestFrameworkScriptFile: './__tests__/setup.ts'
}
