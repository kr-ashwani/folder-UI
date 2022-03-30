import React, { useEffect, useRef } from "react";
import "./FolderStructure.css";
import data from "../../data/files.json";

function FileStructure() {
  const fileStruct = useRef();
  function folderClick(e) {
    e.currentTarget.classList.toggle("close");
  }
  useEffect(() => {
    fileStruct.current.childNodes[0].classList.toggle("close");
  }, []);

  function folderParsing(data) {
    let folderContent = [];
    data.map((elem, id) => {
      if (elem.type === "folder") {
        folderContent.push(
          <div key={`${id}`} className="folder close" onClick={folderClick}>
            <i className="fa-solid fa-folder"></i>
            <i className="fa-solid fa-folder-open"></i>
            <span>{elem.name}</span>
          </div>
        );
        return folderContent.push(folderParsing(elem.items));
      } else
        return folderContent.push(
          <div className="file" key={`${id}`}>
            <img
              src={`https://pro.alchemdigital.com/api/extension-image/${elem.name
                .split(".")
                .pop()}`}
              alt={`${elem.name.split(".")[0]}`}
            />
            <span>{elem.name}</span>
          </div>
        );
    });
    return folderContent;
  }

  function FolderDiv(arr, leftShift = 1) {
    let arrCount = leftShift;

    return arr.map((elem, id) =>
      Array.isArray(elem) ? (
        <div
          key={`${id}+a`}
          className={`leftShift=${arrCount}`}
          style={{ paddingLeft: `${15}px` }}>
          {FolderDiv(elem, arrCount + 1)}
        </div>
      ) : (
        elem
      )
    );
  }

  return (
    <div ref={fileStruct} className="fileStructure">
      {FolderDiv(folderParsing(data))}
    </div>
  );
}

export default FileStructure;
