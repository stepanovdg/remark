import reactHotLoader, { hot } from 'react-hot-loader';
import preact from 'preact';

import Root from 'app/components/root';

reactHotLoader.preact(preact);

const App = hot(module)(Root);

export default App;
