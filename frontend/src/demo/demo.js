import { render } from 'preact';

import App from '../app/app';

window.DEMO = {
  theme: 'light',
  render: () => {
    document.getElementById('remark42').innerHTML = '';

    render(
      <App theme={window.DEMO.theme}/>,
      document.getElementById('remark42')
    );
  },
};

window.DEMO.render();
