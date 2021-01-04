import React from 'react';
import { useSelector } from 'react-redux';
import LightroomSettings from './lightroom_settings';
import { getUploadedFile } from '../redux/file';
import UploadImagePreview from './preview_image';

import './index.scss'

const UploadImageSection: React.FC = () => {
  const imageData = useSelector(getUploadedFile)

	return (
		<div className='image-preivew-section'>
      <UploadImagePreview />
      {imageData && <LightroomSettings />}

    </div>
	);
};

export default UploadImageSection;
