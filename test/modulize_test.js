'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.modulize = {
  setUp: function (done) {
    // setup here if necessary
    done();
  },
  common_bundle: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/common.js');
    var expected = grunt.file.read('test/expected/common.js');
    test.equal(actual, expected, 'should produce a common bundle.');

    test.done();
  },
  individual_scripts: function (test) {
    test.expect(2);

    var first = grunt.file.read('tmp/js/first.js');
    var first_expected = grunt.file.read('test/expected/js/first.js');
    test.equal(first, first_expected, 'should produce a Browserified version of `first.js`.');

    var second = grunt.file.read('tmp/js/second.js');
    var second_expected = grunt.file.read('test/expected/js/second.js');
    test.equal(second, second_expected, 'should produce a Browserified version of `second.js`.');

    test.done();
  }
};
