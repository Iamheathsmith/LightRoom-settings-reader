import { Store, createStore } from 'redux';
import rootReducer, { RootState } from './root_reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools();

export const store: Store<RootState> = createStore(rootReducer, composeEnhancers);
