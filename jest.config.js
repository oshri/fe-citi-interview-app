module.exports = {
	preset: 'jest-preset-angular',
	testURL: 'http://localhost',
	moduleNameMapper: {
	},
	setupTestFrameworkScriptFile: '<rootDir>/src/setupJest.ts',
	globals: {
		__TRANSFORM_HTML__: true,
		'ts-jest': {
			tsConfigFile: 'src/tsconfig.spec.json'
		}
	},
	transform: {
		'^.+\\.(tsx?|html)$': '<rootDir>/node_modules/jest-preset-angular/preprocessor.js'
	},
	collectCoverageFrom: ['<rootDir>/src/app/**/*.{ts}', '!**/node_modules/**', '!<rootDir>/src/app/**/*-helper.{ts}'],
	testMatch: ['<rootDir>/src/**/__tests__/**/*.+(ts|js)?(x)', '<rootDir>/src/**/+(*.)+(spec|test).+(ts|js)?(x)'],
	testPathIgnorePatterns: ['/node_modules/', '<rootDir>/puppeteer/', '<rootDir>/server'],
	moduleFileExtensions: ['ts', 'js', 'html'],
	testResultsProcessor: 'jest-teamcity-reporter',
	coverageThreshold: {
		global: {
			branches: 50,
			functions: 50,
			lines: 70,
			statements: 70
		}
	},
	coverageReporters: ['json', 'lcov', 'text', 'teamcity']
};
