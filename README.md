# grunt-modulize [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> Browserify and Factor-Bundle plugin for Grunt.

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-modulize --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-modulize');
```

## The "modulize" task

### Overview
In your project's Gruntfile, add a section named `modulize` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  modulize: {
    modules: [],
    output: '',
    bundle: ''
  }
})
```

### Options

#### modules
Type: `Array`

Files to be parsed by Browserify

#### output
Type: `String`

Path where bundled scripts should be placed.

#### bundle
Type: `String`

Filename for the generated common script bundle.

### Usage Examples

Identify any modules you want Browserified in the `modules` section, map the final output directory in `output`, and identify the output of the common bundle script in `bundle`.

Any missing directories identified by `output` or `bundle` will be created dynamically by Grunt.

```js
grunt.initConfig({
  modulize: {
    all: {
      modules: [
        'assets/js/src/first.js',
        'assets/js/src/second.js'
      ],
      output: 'assets/js',
      bundle: 'assets/js/common.js'
  }
})
```

## Release History
_(Nothing yet)_

## License
Copyright © 2015 [Eric Mann](https://eamann.com. Licensed under the MIT license.

[npm-image]: https://badge.fury.io/js/grunt-modulize.svg
[npm-url]: https://npmjs.org/package/grunt-modulize
[travis-image]: https://travis-ci.org/ericmann/grunt-modulize.svg?branch=master
[travis-url]: https://travis-ci.org/ericmann/grunt-modulize
[daviddm-image]: https://david-dm.org/ericmann/grunt-modulize.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/ericmann/grunt-modulize