import { faCircleXmark, faCross, faCut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState , useEffect} from 'react';

// Sample file types
const fileTypes = {
  image: ['jpg', 'jpeg', 'png', 'gif'],
  pdf: ['pdf'],
  document: ['doc', 'docx', 'txt'],
};

const SmallFileViewer = ({ fileUrl, closefile }) => {
    const [fileType, setFileType] = useState('unknown');

    useEffect(() => {
        const getFileTypeFromUrl = (url) => {
            console.log(url);
          const urlParts = url.split('?')[0].split('/'); // Split the URL by '/' and remove query parameters
          const fileName = urlParts[urlParts.length - 1];
          const extension = fileName.split('.').pop().toLowerCase();
          console.log(extension)
          for (const type in fileTypes) {
            if (fileTypes[type].includes(extension)) {
              return type;
            }
          }
          return 'unknown';
        };
    
        if (typeof fileUrl === 'string' && fileUrl.length > 0) {
          const type = getFileTypeFromUrl(fileUrl);
          setFileType(type);
        } else {
          setFileType('unknown');
        }
      }, [fileUrl]);
  


  return (
    <div>
        {fileType === 'image' && (
        <img src={fileUrl} alt="Image" width="100%" height="100%"/>
      )}
      {fileType === 'pdf' && (
        <embed src={fileUrl + "#toolbar=0"} type="application/pdf" width = "100%" height= "100%" sandbox="allow-same-origin allow-scripts"/>
      )}
      {fileType === 'document' && (
        <iframe src={fileUrl} title="Document" />
      )}
      {fileType === 'unknown' && (
        <p>This file type is not supported for preview.</p>
      )}
    </div>
  );
};

export default SmallFileViewer;
