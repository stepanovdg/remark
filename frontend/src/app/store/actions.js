import { bindActions } from 'redux-zero/utils';

import store from 'app/app.store';

export const increaseLoadingCounter = ({ loadingCounter }) => ({ loadingCounter: loadingCounter + 1 });
export const decreaseLoadingCounter = ({ loadingCounter }) => ({ loadingCounter: loadingCounter > 0 ? loadingCounter - 1 : 0 });
export const changeTheme = (state, theme) => () => ({ theme });

const actions = {
  increaseLoadingCounter,
  decreaseLoadingCounter,
  changeTheme,
};

export default bindActions(actions, store);
