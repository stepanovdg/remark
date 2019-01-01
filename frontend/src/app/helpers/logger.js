export default axiosResponse => {
  const { config, status, data, response = {} } = axiosResponse;
  const { timestamp, method, url, params, data: body } = config;
  const { status: errorStatus, data: errorData } = response;

  const styleRequest = 'color: blue;';
  const styleResponse = 'color: green;';
  const styleError = 'color: red;';
  const styleDefault = `${errorStatus ? styleError : ''} font-weight: 100;`;

  console.groupCollapsed(`%c${timestamp} %c${method.toUpperCase()} %c${url}`, styleDefault, `${styleDefault} font-weight: 600`, `${styleDefault} text-decoration: underline`);
  if (params && Object.keys(params).length) {
    console.groupCollapsed('%c params', styleRequest);
    console.log(params);
    console.groupEnd();
  }

  if (body && JSON.parse(body)) {
    console.groupCollapsed('%c request', styleRequest);
    console.log(JSON.parse(body));
    console.groupEnd();
  }

  if (data && Object.keys(data).length) {
    console.group(`%c response: %c${status}`, styleResponse, `${styleResponse}; text-decoration: underline`);
    console.log(data);
    console.groupEnd();
  }

  if (errorStatus) {
    console.group(`%c error: %c${errorStatus}`, styleError, `${styleError} text-decoration: underline`);
    console.log(errorData);
    console.groupEnd();
  }

  console.groupEnd();
};
