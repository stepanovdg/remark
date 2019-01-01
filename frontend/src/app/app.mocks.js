import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import logger from 'app/helpers/logger';
import getTimeString from 'app/helpers/get-time-string';

import settings from './app.settings';

const methods = [
];

if (settings.isMocksEnabled) {
  const logRequest = config => ({ ...{ timestamp: getTimeString() }, ...config });

  const logResponse = axiosResponse => {
    logger(axiosResponse);
    return axiosResponse;
  };

  const logError = axiosError => {
    logger(axiosError);
    return Promise.reject(axiosError);
  };

  axios.interceptors.request.use(logRequest);
  axios.interceptors.response.use(logResponse, logError);

  const mockInstance = new MockAdapter(axios, { delayResponse: settings.mockDelay });

  const respond = function respond(params) {
    let foundStub;

    if (!window.stubs) {
      throw new Error('stubs are empty');
    } else {
      window.stubs.forEach(stub => {
        const isMatchUrl = stub.url.indexOf('re:') === 0
          ? RegExp(stub.url.substring(3)).test(params.url)
          : stub.url === params.url;

        if (stub.method.toLowerCase() === params.method.toLowerCase() && isMatchUrl) {
          foundStub = stub;
        }
      });

      if (foundStub) {
        return new Promise(resolve => {
          resolve([200, JSON.parse(JSON.stringify(foundStub.data))]);
        });
      }

      const errorText = `Cant find mock for ${params.method} ${params.url}`;
      throw new Error(errorText);
    }
  };

  if (!window.test) {
    methods.forEach(item => {
      item.mock(item.path)(settings.mocks.includes(item.mock.name), mockInstance);
    });
  } else {
    mockInstance.onGet(/.*/).reply(respond);
    mockInstance.onPost(/.*/).reply(respond);
    mockInstance.onPut(/.*/).reply(respond);
    mockInstance.onDelete(/.*/).reply(respond);
  }
}
