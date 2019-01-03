import pathToRegexp from 'path-to-regexp';

import send from '../utils/send';

import user from '../entities/user';

export default function getUser(path) {
  return (allow, mock) => {
    const regPath = pathToRegexp(path);

    if (!allow) return mock.onGet(regPath).passThrough();

    return mock.onGet(regPath).reply(() => { // eslint-disable-line arrow-body-style
      // unauth
      // return [401];

      // auth and admin
      return send(user);

      // auth and regular user
      // return send({ ...user, id: 'github_somehash', admin: false, });
    });
  };
}
