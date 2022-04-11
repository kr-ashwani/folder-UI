import React, { useEffect } from 'react';
import './FolderStructure.css';
import data from '../../data/files.json';

function FileStructure() {
  useEffect(() => {
    document
      .querySelector('.fileStructure>.folder>.folderName')
      .classList.toggle('close');
  }, []);

  function folderParsing(data) {
    const folderDiv = [];
    data.forEach((elem, id) => {
      if (elem.type === 'file')
        folderDiv.push(
          <div className="file" key={id}>
            <img
              src={`https://pro.alchemdigital.com/api/extension-image/${elem.name
                .split('.')
                .pop()}`}
              alt={`${elem.name.split('.')[0]}`}
            />
            <span>{elem.name}</span>
          </div>
        );
      else
        folderDiv.push(
          <div className="folder" key={id}>
            <div
              className="folderName close"
              onClick={(e) => e.currentTarget.classList.toggle('close')}>
              <i className="fa-solid fa-folder"></i>
              <i className="fa-solid fa-folder-open"></i>
              <span>{elem.name}</span>
            </div>
            <div className="folderItems">{folderParsing(elem.items)}</div>
          </div>
        );
    });
    return folderDiv;
  }

  return <div className="fileStructure">{folderParsing(data)}</div>;
}

export default FileStructure;
