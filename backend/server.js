'use strict';

import express from 'express';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import dotenv from 'dotenv';
import {
	router as readImageRoutes
} from './routes/read_image.js';

dotenv.config();

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 1234;

app.use(express.json());
app.use(fileUpload());

app.use(cors());
app.use('/api/v1', router);

app.get('/', function (req, res) {
	res.send('hello there');
});

app.use('/', readImageRoutes);

export const server = {};

server.start = () => {
	return new Promise((resolve, reject) => {
		if (server.isOn) return reject(new Error('Server Error. Cannot start on new server  on the same port'));
		server.http = app.listen(PORT, () => {
			console.log(`Listening on ${PORT}`);
			server.isOn = true;
			return resolve(server);
		});
	});
};

server.stop = () => {
	return new Promise((resolve, reject) => {
		if (!server.isOn) return reject(new Error('Server Error. Cannot stop server that is not running.'));
		server.http.close(() => {
			server.isOn = false;
			return resolve();
		});
	});
};
