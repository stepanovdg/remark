import { connect } from 'redux-zero/preact';

import { increaseLoadingCounter, decreaseLoadingCounter, setMainParams } from 'app/store/actions';

import Root from './root';

const mapStateToProps = state => ({
  isLoading: state.loadingCounter > 0,
  currentTheme: state.theme,
  config: state.config,
  user: state.user,
});

const mapActionsToProps = {
  increaseLoadingCounter,
  decreaseLoadingCounter,
  setMainParams,
};

export default connect(mapStateToProps, mapActionsToProps)(Root);

require('./root.scss');

require('./__preloader/root__preloader.scss');

require('./_theme/_dark/root_theme_dark.scss');
require('./_theme/_light/root_theme_light.scss');
