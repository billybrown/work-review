'use strict';

module.exports.tasks = {

    //copy custom JS file over to the build directory
    copy: {
        raster: {
            files: [
                { expand: true, cwd: 'src/img/raster', src: ['*'], dest: 'build/img/'}
            ]
        },
        svg: {
            files: [
                { expand: true, cwd: 'src/img/svg', src: ['*'], dest: 'build/img/'}
            ]
        }
    }
};
