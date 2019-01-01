import { bindActions } from 'redux-zero/utils';

import store from 'app/app.store';

export const setMainParams = (state, params) => () => ({ ...params });
export const decreaseLoadingCounter = ({ loadingCounter }) => ({ loadingCounter: loadingCounter > 0 ? loadingCounter - 1 : 0 });
export const increaseLoadingCounter = ({ loadingCounter }) => ({ loadingCounter: loadingCounter + 1 });

const actions = {
  setMainParams,
  decreaseLoadingCounter,
  increaseLoadingCounter,
};

export default bindActions(actions, store);
