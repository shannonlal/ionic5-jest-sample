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

try {
    // If the user are using zone.js 0.11.1+
    // all jest support logic are implemented inside zone.js
    // we only need to load zone-testing.umd.js module
    require('zone.js/bundles/zone-testing-bundle.umd.js');
  } catch (err) {
    // Fallback logic to load zone and zone-patch
    // when the user still use zone.js 0.10.x
    require('zone.js/dist/zone');
    require('zone.js/dist/proxy');
    require('zone.js/dist/sync-test');
    require('zone.js/dist/async-test');
    require('zone.js/dist/fake-async-test');
  }


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
      "src/setup-jest.ts"
    ],
    "include": [
      "src/**/*.spec.ts",
      "src/**/*.d.ts"
    ]
  }
  

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
    transformIgnorePatterns: ['node_modules/(?!@ngrx)'],
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
