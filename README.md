# grunt-inline-imgbase64

> The best Grunt plugin ever.

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-inline-imgbase64 --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-inline-imgbase64');
```

## The "inline_imgbase64" task

### Overview
In your project's Gruntfile, add a section named `inline_imgbase64` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  inline_imgbase64: {
    options: {
      exts:['jpg','jpeg','png','gif'],
      tag:'__inline',
      maxLength:40
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.exts
Type: `Array`
Default value: `[]`

A array value that is used to filter image url.

#### options.tag
Type: `String`
Default value: `''`

A string value that is used to decide whether replace by base64

####maxLength
Type: `Number`
default value null
A number value that is used to limit encoding image size

### Usage Examples

#### Default Options
下面的例子会内联html和css文件内的imageUrl。支持本地和远程文件。

```js
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
    }
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 junlonghuo. Licensed under the MIT license.
