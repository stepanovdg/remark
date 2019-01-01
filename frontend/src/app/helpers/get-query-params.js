export default () => window.location.search
  .substr(1)
  .split('&')
  .reduce((acc, param) => {
    const pair = param.split('=');
    acc[pair[0]] = decodeURIComponent(pair[1]);
    return acc;
  }, {}) || {};
