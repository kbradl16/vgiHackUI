module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'components/**/*.js',
      'view*/**/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-spec-reporter',
      'karma-json-result-reporter',
      'karma-structured-json-reporter',
    ],

    reporters: ['json-result'],
    jsonResultReporter: {
      outputFile: "karma-result.json",
      isSynchronous: true //(optional, default false)
    }

  });
};
