import React, { ChangeEvent, useState } from 'react';
import axios from 'axios';
import { Button, Input } from 'semantic-ui-react';

import './index.scss';
import { useDispatch } from 'react-redux';
import { setRawFile, setUploadedFile, setUploadedFileName } from '../redux/file';

const FileUplpad: React.FC = () => {
	const [file, setfile] = useState<File>();
	const dispatch = useDispatch();

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const target = event.target as HTMLInputElement;
		const files = target.files;
		if (files) {
			setfile(files[0]);
			dispatch(setRawFile(files[0]));
			dispatch(setUploadedFileName(files[0].name));
			dispatch(setUploadedFile(undefined));
		}
	};

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		const formData = new FormData();
		file && formData.append('file', file);

		try {
			const res = await axios.post('http://localhost:5000/file-upload', formData, {
				headers: {
					'Content-type': 'multipart/form-data',
				},
			});

			dispatch(setUploadedFile(res.data));
			setfile(undefined);
		} catch (err) {
			if (err.response.status === 500) {
				console.log('error with the server');
			} else {
				console.log(err.response.data.msg);
			}
		}
	};

	return (
		<form className='upload-form' onSubmit={handleSubmit}>
			<Input type='file' placeholder='Search...' action>
				<Input type='file' className='upload-form__input' id='fileUpload' onChange={handleChange} />
				<Button disabled={!file} type='submit' primary className='upload-form__submit' content='Get LightRoom Edits' />
			</Input>
		</form>
	);
};

export default FileUplpad;
