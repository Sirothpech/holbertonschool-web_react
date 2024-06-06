module.exports = {
	moduleNameMapper: {
	  '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
	  '\\.(gif|ttf|eot|svg|png|jpg)$': '<rootDir>/__mocks__/fileMock.js'
	},
	transform: {
	  "^.+\\.jsx?$": "babel-jest",
	  "^.+\\.tsx?$": "babel-jest"
	},
	transformIgnorePatterns: [
	  '/node_modules/(?!node-fetch|fetch-mock)/'
	],
	setupFilesAfterEnv: ['<rootDir>/config/setupTests.js'],
	testEnvironment: 'jsdom'
  };
  