import { render } from 'preact';

import getQueryParams from 'app/helpers/get-query-params';

import App from '../app/app';

const theme = getQueryParams().theme || 'light';

window.DEMO = {
  theme,
  render: () => {
    document.querySelector('body').className = theme;
    document.getElementById('remark42').innerHTML = '';

    render(
      <App theme={window.DEMO.theme}/>,
      document.getElementById('remark42'),
    );
  },
};

window.DEMO.render();
