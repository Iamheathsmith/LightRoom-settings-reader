import convert from 'xml-js';
import XMP from 'xmp-js';

import {
	buildLineKey
} from './file_reader_helpers.js';

export const imageReader = (importFileBuffer) => {
	return new Promise((resolve, reject) => {
		if (!importFileBuffer) {
			reject({
				msg: 'no image was uploaded'
			});
		}

		let xmp = new XMP(importFileBuffer);

		let raw = xmp.find();

		if (!raw) {
			resolve({
				msg: 'Image does not have lightroom data avail'
			});
		}

		let options = {
			compact: true,
			spaces: 2,
			elementNameFn: function (val) {
				return buildLineKey(val);
			},
			attributeNameFn: function (val) {
				return buildLineKey(val);
			},
		};

		let result = convert.xml2js(raw, options);

		resolve(result?.xmpmeta?.rdf?.description);
	});
};
