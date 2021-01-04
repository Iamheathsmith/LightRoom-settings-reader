import { combineReducers } from 'redux';

import file, { FileState } from './file';

export interface RootState {
  readonly file: FileState;
}

export default combineReducers<RootState>({
  file
})
