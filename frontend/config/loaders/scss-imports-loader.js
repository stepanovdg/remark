const loaderUtils = require('loader-utils');

module.exports = function loader(source) {
  const { paths = [] } = loaderUtils.getOptions(this);
  return paths.map(x => `@import '${x}';`).join('\n') + source;
};
