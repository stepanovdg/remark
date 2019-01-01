import { connect } from 'redux-zero/preact';

import { increaseLoadingCounter, decreaseLoadingCounter, setMainParams } from 'app/store/actions';

import Root from './root';

const mapStateToProps = state => ({
  isLoading: state.loadingCounter > 0,
  currentTheme: state.theme,
});

const mapActionsToProps = {
  increaseLoadingCounter,
  decreaseLoadingCounter,
  setMainParams,
};

export default connect(mapStateToProps, mapActionsToProps)(Root);

require('./root.scss');

require('./__preloader/root__preloader.scss');

require('./_loading/root_loading.scss');
