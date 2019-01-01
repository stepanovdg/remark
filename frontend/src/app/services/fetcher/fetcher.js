import axios from 'axios';

import store from 'app/app.store';

const fetcher = {};
const methods = ['get', 'post', 'put', 'patch', 'delete', 'head'];

methods.forEach(method => {
  fetcher[method] = data => {
    const { baseUrl, apiBase: originalApiBase, siteId } = store.getState();
    const { url, body = {}, withCredentials = false, apiBase = originalApiBase } = typeof data === 'string'
      ? { url: data }
      : data;
    const basename = `${baseUrl}${apiBase}`;

    return new Promise((resolve, reject) => {
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };

      const parameters = {
        method,
        headers,
        withCredentials,
      };

      if (Object.keys(body).length) {
        parameters.data = body;
      }

      parameters.url = `${basename}${url}`;

      // add siteId param to all requests except POSTs
      if (siteId && method !== 'post' && !parameters.url.includes('?site=') && !parameters.url.includes('&site=')) {
        parameters.url += `${parameters.url.includes('?') ? '&' : '?'}site=${siteId}`;
      }

      axios(parameters)
        .then(res => {
          // const date = ('date' in res.headers && res.headers.date) || '';
          // const timestamp = isNaN(Date.parse(date)) ? 0 : Date.parse(date);
          // const timeDiff = (new Date() - timestamp) / 1000;
          // store.set('serverClientTimeDiff', timeDiff);

          resolve(res.data);
        })
        .catch(error => reject(error));
    });
  };
});

export default fetcher;
