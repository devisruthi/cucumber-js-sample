let common = [
  'test/features/**/*.feature',
  '--require test/step-definitions/**/*.js',
  '--format progress-bar'
].join(' ');

module.exports = {
  default: common,
  // More profiles can be added if desired
};
