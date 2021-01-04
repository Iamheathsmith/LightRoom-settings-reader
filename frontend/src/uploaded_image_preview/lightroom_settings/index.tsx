import React from 'react';
import { useSelector } from 'react-redux';
import {  Header } from 'semantic-ui-react';
import { getUploadedFile } from '../../redux/file';

import './index.scss'

const LightroomSettings: React.FC = () => {
  const imageData = useSelector(getUploadedFile)
  console.log('imageData: ', imageData);

	return (
		<div className='lightroom-settings'>
      <Header className="lightroom-settings__header">LightRoom Seetings Used</Header>
      <div className="lightroom-settings__data">{JSON.stringify(imageData)}</div>
    </div>
	);
};

export default LightroomSettings;
