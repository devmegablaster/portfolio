import React from "react";
import Folder from "./Folder";

const index: React.FC = () => {
  return (
    <div className="h-full pl-2 pt-2 md:w-[12%] 2xl:w-[10%] flex flex-col">
      <h1 className="text-xs text-teal-400">EXPLORER</h1>
      <div className="flex pt-3 space-y-[0.5] flex-col w-full h-full">
        <Folder gitStatus={1} folderName="MainContent" />
        <Folder gitStatus={2} folderName="NavBar" />
      </div>
    </div>
  );
};

export default index;
