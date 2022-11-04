import React from "react";
import { VscChevronRight, VscFolder, VscTriangleRight } from "react-icons/vsc";

function Folder({
  folderName,
  gitStatus,
}: {
  folderName: string;
  gitStatus: number;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <div
      className={`flex w-full items-center cursor-pointer select-none justify-between ${
        gitStatus == 1 ? "text-green-300" : "text-red-400"
      } text-sm`}
      onClick={() => {
        setOpen(!open);
      }}
    >
      <div className="flex w-full space-x-2 items-center">
        <p className="text-white">
          <VscChevronRight
            style={{ transform: `rotate(${open ? 90 : 0}deg)` }}
          />
        </p>
        <VscFolder className="text-gray-300" />
        <p>{folderName}</p>
      </div>
      <p>U</p>
    </div>
  );
}

export default Folder;
