# Typescript package boilerplate

An attempt to make a minimal Typescript boilerplate to build node packages.

## Description

This boilerplate allows users to build a Typescript package with some additional considerations to preserve the consistency and flexibility when developing a package.

#### Features
- Typescript support
- Linting
- Unit testing
- Full and partial builds
- Basic configuration files

#### Packages included in this boilerplate
- Typescript
- Jest
- ESLint (+ Typescript parser)

#### Configuration files
This boilerplate includes some premade configuration files to ensure code and execution consistency across systems:

- `.eslintrc.json`: Basic code style guide
- `.nvmrc`: Tracks the node version required to run this package
- `.tsconfig.json`: Basic configuration to build a node package

#### Structure
Split into four different folders, aiming to a minimal configuration.

```
📦 Boilerplate
├─ coverage             // the coverage results printed from the test runner 
├─ dist                 // built files
│  ├─ full_build
│  └─ partial_build
├─ src                  // source code of the package
│  ├─ samples_math
│  └─ samples_strings
└─ tests                // unit tests folder
   ├─ samples_math
   └─ samples_strings
```

After a build script invocation, the `dist` folder will contain one or two folders (depending on which build script you invoked), the `full_build` contains the entire source code built as one package, as opposed to the `partial_build` where it will contain any partial builds of the source code.

If you're building subpackages, it is recommended to split them in different folders within the `src` folder, and apply the same logic for the `tests` folder.

## Installation

- Install [nvm](https://github.com/nvm-sh/nvm) to be sure you're using the correct node version when building/executing this package.

- When inside this repo's root directory, run this command to set your node version equal to the one specified on the .`.nvmrc` file:

```bash
nvm use
```

- Use node's package manager to install the required dependencies

```bash
npm install
```

## Full package build

Use the following command to build the entire package that will be available on the `dist/full_build` folder

```bash
npm run build
```

## Partial package build

Use the following command to build a specific package that will be available on the `dist/partial_builds` folder

```bash
npm run build:<name of the partial build>
```

#### How to configure a partial build

You must create a `.json` file inside the `partial_builds_configs` folder that will be used as a `tsconfig.json` build descriptor for the Typescript compiler. You can find examples of it inside the mentioned folder.

The properties of these files you need to modify are:
- `outDir`: Specifies the directory in which the build files of the partial build are going to be put into.
- `include`: An array containing the source folder(s) where the Typescript compiler must go and get the source files to be compiled.

Finally, you also need to modify the `package.json` file to add a new entry to the scripts section to add these new partial builds like the example below:

```
[package.json]

// ...
"scripts": {
    "build": "tsc",
    "build:<YOUR_PARTIAL_BUILD_NAME_HERE>": "tsc --build ./partial_builds_configs/<YOUR_PARTIAL_BUILD_TSCONFIG_FILENAME_HERE>.json",
    "build:sample_math": "tsc --build ./partial_builds_configs/samples_math_pkg.json",
    "build:sample_strings": "tsc --build ./partial_builds_configs/samples_strings_pkg.json",
    "test": "jest"
  },
// ...
```


## Unit testing

Use the following command to unit test the source code:

```bash
npm run test
```

The test runner (Jest) will run all the tests contained within the `tests` folder and it will verbose the results through the console, and it will also calculate the code coverage, and it's results can be found in the generated `coverage` folder. 

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.