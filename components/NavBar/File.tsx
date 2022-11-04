import React from "react";
import { VscChevronRight, VscFileCode } from "react-icons/vsc";

function File({
  fileName,
  gitStatus,
}: {
  fileName: string;
  gitStatus: number;
}) {
  return (
    <div
      className={`flex w-full items-center cursor-pointer select-none justify-between ${
        gitStatus == 1 ? "text-green-300" : "text-red-400"
      } text-sm`}
    >
      <div className="flex w-full space-x-[5px] items-center">
        <VscFileCode className="text-gray-300" />
        <p>{fileName}</p>
      </div>
      <p>U</p>
    </div>
  );
}

export default File;
