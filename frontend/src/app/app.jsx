import reactHotLoader, { hot } from 'react-hot-loader';
import preact from 'preact';

import Root from 'app/components/root';

reactHotLoader.preact(preact);

const App = hot(module)(() => <div id="remark42-root-node"><Root/></div>);

export default App;
