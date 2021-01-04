import { Action, createAction, createReducer } from 'typesafe-actions';

import { RootState } from './root_reducer';

export interface FileState {
	readonly data?: any;
	readonly name?: string;
	readonly raw?: any;
}

export const initialState: FileState = {
	data: undefined,
	name: undefined,
	raw: undefined,
};

export const setUploadedFile = createAction('SET_UPLOADED_FILE')<any | undefined>();
export const setRawFile = createAction('SET_RAW_FILE')<Blob | undefined>();
export const setUploadedFileName = createAction('SET_UPLOADED_FILE_NAME')<string | undefined>();

export function getUploadedFile({ file }: RootState): any | undefined {
	return file.data;
}
export function getRawFile({ file }: RootState): Blob | undefined {
	return file.raw;
}
export function getUploadedFileName({ file }: RootState): string | undefined {
	return file.name;
}

const reducer = createReducer<FileState, Action>(initialState)
	.handleAction(setUploadedFile, (state, action) => {
		return {
			...state,
			data: action.payload,
		};
	})
	.handleAction(setRawFile, (state, action) => {
		return {
			...state,
			raw: action.payload,
		};
	})
	.handleAction(setUploadedFileName, (state, action) => {
		return {
			...state,
			name: action.payload,
		};
	});

export default reducer;
