module.exports = {
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.tsx?$': '@swc/jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
    },
  },
  moduleDirectories: ['node_modules', 'src'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  testPathIgnorePatterns: ['/node_modules/', '.*\\.d\\.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: { '^.+\\.(css|less|scss)$': 'identity-obj-proxy' },
  setupFilesAfterEnv: [require.resolve('./src/setupTests.ts')],
}
