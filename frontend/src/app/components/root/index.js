import { connect } from 'redux-zero/preact';

import { changeTheme, increaseLoadingCounter, decreaseLoadingCounter } from 'app/store/actions';

import Root from './root';

const mapStateToProps = state => ({
  isLoading: state.loadingCounter > 0,
});

const mapActionsToProps = {
  increaseLoadingCounter,
  decreaseLoadingCounter,
  changeTheme,
};

export default connect(mapStateToProps, mapActionsToProps)(Root);

require('./root.scss');

require('./__preloader/root__preloader.scss');

require('./_loading/root_loading.scss');
