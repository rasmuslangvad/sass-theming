module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    express: {
      dev: {
        options :{
          script: './server.js'
        }
      }
    },

    sass: {
      dist: {
        files: {
          'assets/css/colorful.css' : 'assets/sass/themes/colorful.scss',
          'assets/css/dark.css' : 'assets/sass/themes/dark.scss'
        }
      }
    },

    watch: {
      express: {
        files: ['**/*.js'],
        tasks: ['express:dev'],
        options: {
          spawn: false,
        }
      },
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      }
    },
  });

	grunt.registerTask('default', ['sass', 'express:dev', 'watch']);

}
