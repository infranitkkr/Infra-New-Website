import React from "react";
import { Detail } from "./Detail";

export const FileIcon = ({url , }) => {
  return (
    <div className="relative w-[200px] h-[200px] bg-white rounded-[12px]">
      <Detail className="!absolute !left-[17px] !top-0" iconEllipses="icon-ellipses-2.png" iconImage="image.png" />
      <img className="absolute w-[170px] h-[150px] top-[43px] left-[15px] object-cover" alt="Image" src="image-1.png" />
    </div>
  );
};

export default FileIcon ;