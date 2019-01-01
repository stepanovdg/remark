import reactHotLoader, { hot } from 'react-hot-loader';
import preact from 'preact';
import { Provider } from 'redux-zero/preact';

import Root from 'app/components/root';

import store from 'app/app.store';

reactHotLoader.preact(preact);

const App = props => (
  <div id="remark42-root-node">
    <Provider store={store}>
      <Root theme={props.theme}/>
    </Provider>
  </div>
);

App.propTypes = {
  theme: PropTypes.string,
};

export default hot(module)(App);
