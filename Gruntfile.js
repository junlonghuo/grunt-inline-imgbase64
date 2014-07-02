/*
 * grunt-inline-imgbase64
 * https://github.com/junlonghuo/grunt-inline-imgbase64
 *
 * Copyright (c) 2014 junlonghuo
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    inline_imgbase64: {
        options:{
            exts:['jpg','jpeg','png','gif'],
            tag:'__inline',
            maxLength:40 //设置编码远程图片的最大尺寸，超过maxLength时不转换，单位KB
        },
        dist: {
            src: ['test/dist/*.*'],
            dest: ['tmp/']
        }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'inline_imgbase64'/*, 'nodeunit'*/]);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
