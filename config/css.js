'use strict';

module.exports.tasks = {

    // this task compiles your sass to css using Libsass, a C++ version of sass
    sass: {
        dest: {
            options: {
                sourceMap: true
            },
            files: {
                'build/css/main.css': 'src/sass/main.scss'
            }
        }
    },

    // this task applies vendor prefixes (ie: -webkit, -moz, -o) to your css
    autoprefixer: {
        options: {
            browsers: [
                '> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', // default support (recommended by autoprefixer)
                'ie >= 9',
                'Firefox >= 23', 
                'Chrome >= 22',
                'Safari >= 4',
                'iOS >= 5.1',
                'Android >= 4.1'
            ],
            map: true
        },
        custom: {
            src: ['build/css/main.css']
        }
    },

    cssmin: {
        options: {
            sourceMap: true
        },
        custom: {
            files: {
                'build/css/main.min.css': ['build/css/main.css']
            }
        }
    },

    clean: {
        css: ['build/css/main.css', 'build/css/main.css.map']
    }

};
