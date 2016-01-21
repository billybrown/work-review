'use strict';

module.exports.tasks = {


    //copy custom JS file over to the build directory
    copy: {
        //-+++- DONT REMOVE THIS COMMENT! its used by yeoman | owlcarousel-copy -+++-//
        //-+++- DONT REMOVE THIS COMMENT! its used by yeoman | chosen-sprite -+++-//
        vendorjs: {
            files: [
                { expand: true, cwd: 'src/js/vendor', src: ['*.js'], dest: 'build/js/'}
            ]
        }
    },

    uglify : {
        customjs: {
            options : {
                banner: "(function($){",
                footer: "\n})(jQuery);",
                preserveComments: false,
                sourceMap : true
            },
            src: [
                 // base class and global options
                'src/js/base.js',

                // all other custom js
                'src/js/custom/*.js'
            ],
            dest : 'build/js/scripts.min.js'
        }
    }

};
