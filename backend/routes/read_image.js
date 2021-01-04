'use strict';

import express from 'express';
import { imageReader } from '../file_reader.js';

const router = express.Router();

router.route;

router.route('/file-upload').post((request, response) => {
	const imageBuffer = request.files.file.data;
	imageReader(imageBuffer)
		.then((data) => {
			response.send(JSON.stringify(data));
		})
		.catch('failed');
});

export { router };
