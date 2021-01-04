import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {  Header } from 'semantic-ui-react';
import { getRawFile, getUploadedFileName } from '../../redux/file';

import './index.scss'

const UploadImagePreview: React.FC = () => {
  const imageName = useSelector(getUploadedFileName)
  const rawImage = useSelector(getRawFile)

  useEffect(() => {
    if (rawImage) {
      const reader = new FileReader();
      reader.onload = function(){
        let dataURL = reader.result;
        let output = document.getElementById('output') as HTMLImageElement;
        output.src = dataURL as string;
      };
      rawImage && reader.readAsDataURL(rawImage);
    }
  }, [rawImage])

	return (
    <div className='image-preview'>
      <Header className="image-preview__name">{imageName}</Header>
      <img className="image-preview__image" alt="" id='output'/>
    </div>
	);
};

export default UploadImagePreview;
