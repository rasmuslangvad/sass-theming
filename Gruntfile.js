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

    jshint: {
      all: ['config/*.js', '*.js']
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
      },
      jshint: {
        files: ['<%= jshint.all %>'],
        tasks: ['jshint']
      }
    },
  });

	grunt.registerTask('default', ['sass', 'jshint', 'express:dev', 'watch']);

};
