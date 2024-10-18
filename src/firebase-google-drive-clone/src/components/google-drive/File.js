import { faFile } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import FileViewer from "./fileViewer"
import SmallFileViewer from "./SmallFileViewer";

export default function File({ file ,openFile}) {
  function opf(){
    openFile(file.url);
  }
  
  return (
    <div className="btn btn-outline-dark rounded-xl text-truncate w-100 h-[200px]" onClick={opf}>
      <div className="mb-2">
        <FontAwesomeIcon icon={faFile} className="mr-2" />
        {file.name}
      </div>

      <div className=" rounded-xl w-70 h-[100px] bg-gray-300">
        <SmallFileViewer fileUrl={file.url} />
      </div>
    </div>
  )
}
