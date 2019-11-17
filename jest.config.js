module.exports = {
  preset: 'react',
  transform: {
    '\\.(ts|tsx)$': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.jest.json'
    }
  },
  moduleFileExtensions: ['ts', 'tsx'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx)$'
};
