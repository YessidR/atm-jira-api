require('module-alias/register')

module.exports = {
  api: [
    'tests/features/api/*.feature',
    '--require tests/support/api/**/**/*.js',
    '--publish-quiet',
    '--format-options \'{"colorsEnabled": true}\'',
    '--format @cucumber/pretty-formatter',
    '--format html:reports/report.html'
  ].join(' ')
}
