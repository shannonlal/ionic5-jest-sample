# Ionic 5 Jest Sample Project

The following is a simple project that illustrates how to configure Jest support for ionic 5.  

Note:
This project was created using ionic create app functionality and follows the same commands for starting and testing the project

# Install JEST
```
npm install jest jest-preset-angular @types/jest ts-jest --save-dev
```

# Create setup-jest.ts in src/
Note: I chanaged the sample to include zone configration as well
```
import 'jest-preset-angular';
import '../jest-global-mocks';
```

# Add jest-global-mocks.ts in src/

```
Object.defineProperty(window, 'CSS', {value: null});
Object.defineProperty(document, 'doctype', {
  value: '<!DOCTYPE html>'
});
Object.defineProperty(window, 'getComputedStyle', {
  value: () => {
    return {
      display: 'none',
      appearance: ['-webkit-appearance']
    };
  }
});
/**
 * ISSUE: https://github.com/angular/material2/issues/7101
 * Workaround for JSDOM missing transform property
 */
Object.defineProperty(document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true,
    };
  },
});
```

# Create a tsconfig.spec.json in root
{
    "extends": "./tsconfig.json",
    "compilerOptions": {
      "outDir": "./out-tsc/spec",
      "types": [
        "jest",
        "node"
      ],
    },
    "files": [
      "src/polyfills.ts",
      "src/setup-jest.ts" -- Add
      "src/test.ts" -- Remove
    ],
    "include": [
      "src/**/*.spec.ts",
      "src/**/*.d.ts"
    ]
  }
  
# Rename test.ts to karmaTest.ts
This will ensure that there are no conflicts with karma and jest

# Create jest.config.ts in root
Note: I am following the provided example with a small tweak to setup files 
```
module.exports = {
    setupFilesAfterEnv:['<rootDir>/src/setup-jest.ts'],
    globals: {
      'ts-jest': {
        tsConfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.html$',
        astTransformers: {
          before: [
            'jest-preset-angular/build/InlineFilesTransformer',
            'jest-preset-angular/build/StripStylesTransformer',
          ],
        },
      },
    },
    transform: {
      '^.+\\.(ts|js|html)$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'html', 'js', 'json'],
    moduleNameMapper: {
      '^src/(.*)$': '<rootDir>/src/$1',
      '^app/(.*)$': '<rootDir>/src/app/$1',
      '^assets/(.*)$': '<rootDir>/src/assets/$1',
      '^pages/(.*)$': '<rootDir>/src/pages/$1',
      '^theme/(.*)$': '<rootDir>/src/themse/$1',
    },
    transformIgnorePatterns: ['node_modules/(?!@ngrx|@ionic)'],
    snapshotSerializers: [
      'jest-preset-angular/build/AngularSnapshotSerializer.js',
      'jest-preset-angular/build/HTMLCommentSerializer.js',
    ],
  };
```

# Update package.json
```
"test:unit": "jest --config=jest.config.js",
```
