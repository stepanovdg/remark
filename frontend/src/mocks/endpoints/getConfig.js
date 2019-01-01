import pathToRegexp from 'path-to-regexp';

import send from '../utils/send';

import config from '../entities/config';

export default function getConfig(path) {
  return (allow, mock) => {
    const regPath = pathToRegexp(path);

    if (!allow) return mock.onGet(regPath).passThrough();

    return mock.onGet(regPath).reply(() => send(config));
  };
}
