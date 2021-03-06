var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var wiredep = require('wiredep').stream;

gulp.task('wire:styles', function() {
  return gulp.src("app/styles/*.styl")
    .pipe(wiredep({
      directory: "app/bower_components",
      fileTypes: {
        styl: {
          block: /(([ \t]*)\/\/\s*bower:*(\S*))(\n|\r|.)*?(\/\/\s*endbower)/gi,
          detect: {
            css: /@import\s['"](.+)['"]/gi,
            styl: /(@import|@require)\s['"](.+)['"]/gi
          },
          replace: {
            css: '@import "{{filePath}}"',
            styl: '@require "{{filePath}}"'
          }
        }
      }
    }))
    .pipe(gulp.dest("app/styles"));
});

gulp.task('wire', ['wire:styles'])
