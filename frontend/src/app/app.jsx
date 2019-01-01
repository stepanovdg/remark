import reactHotLoader, { hot } from 'react-hot-loader';
import preact from 'preact';
import { Provider } from 'redux-zero/preact';

import store from 'app/app.store';

import Root from 'app/components/root';

import 'app/app.mocks';

reactHotLoader.preact(preact);

const App = props => (
  <div id="remark42-root-node">
    <Provider store={store}>
      <Root theme={props.theme} baseUrl="/" apiBase="/api/v1" siteId="remark"/>
    </Provider>
  </div>
);

App.propTypes = {
  theme: PropTypes.string,
};

export default hot(module)(App);
