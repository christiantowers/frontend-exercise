module.exports = {
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules','/.next/'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.ts(x)'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': [
          'babel-jest',
          {
            presets: [
              ['@babel/preset-env', { targets: { node: 'current' } }],
              '@babel/preset-typescript',
              ['@babel/preset-react', { runtime: 'automatic' }],
            ],
          },
        ],
      },
    transformIgnorePatterns : [
      "/node_modules/",
      "\\.css$"
    ],
    testMatch: ['**/**/*.test.(ts|tsx)'],
    setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
};