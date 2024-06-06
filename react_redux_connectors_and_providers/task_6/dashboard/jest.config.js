module.exports = {
	moduleNameMapper: {
	  '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
	  '\\.(gif|ttf|eot|svg|png|jpg)$': '<rootDir>/__mocks__/fileMock.js'
	},
	transform: {
	  "^.+\\.[t|j]sx?$": "babel-jest"
	},
	transformIgnorePatterns: [
	  '/node_modules/(?!(node-fetch|fetch-mock|other-es-module-package)/)'
	],
	setupFilesAfterEnv: ['<rootDir>/config/setupTests.js'],
	testEnvironment: 'jest-environment-jsdom',
	testEnvironmentOptions: {
	  resources: "usable"
	},
	detectOpenHandles: true,
	forceExit: true
  };
  