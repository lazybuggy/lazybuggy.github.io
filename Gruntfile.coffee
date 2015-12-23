module.exports = (grunt) ->

  # Project configuration.
  grunt.initConfig

    # Use multiple CPU-Cores to speed up processing time
    concurrent:
      compile: ['sass', 'newer:uglify']
      js: ['newer:uglify']


    # Minify JavaScript-Files
    uglify:
      build:
        files:
          'js/least.min.js':    ['js/least/least.js']
        options:
          compress: true
          mangle: false
          report: "min"
          verbose: true


    # Compile SASS-Files
    sass:
      build:
        files:
          'css/least.min.css': 'scss/styles.scss'
        options:
          style: 'compressed'

    # Watch JavaScript and SASS-Files for changes
    watch:
      js:
        files: ['js/least/*.js']
        tasks: ['concurrent:js']
      scss:
        files: ['scss/**/*.scss']
        tasks: ['sass']
      livereload:
        files: ['src/css/*']
        options:
          livereload: false
          #spawn: false

  # Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks 'grunt-concurrent'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-sass'
  grunt.loadNpmTasks 'grunt-newer'

  # Default task(s).
  grunt.registerTask 'default', ['concurrent:compile']