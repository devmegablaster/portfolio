import React from "react";
import File from "./File";
import Folder from "./Folder";

const index: React.FC = () => {
  return (
    <div className="h-full pl-2 pt-2 md:w-[12%] 2xl:w-[10%] flex flex-col">
      <h1 className="text-xs text-teal-400">EXPLORER</h1>
      <div className="flex pt-3 space-y-[0.5] flex-col w-full h-full">
        <Folder
          gitStatus={1}
          folderName="MainContent"
          files={[
            <File fileName="index.tsx" gitStatus={1} />,
            <File fileName="loading.tsx" gitStatus={0} />,
            <File fileName="layout.tsx" gitStatus={1} />,
            <File fileName="main.svg" gitStatus={1} />,
          ]}
        />
        <Folder
          gitStatus={2}
          folderName="NavBar"
          files={[
            <File fileName="page.tsx" gitStatus={1} />,
            <File fileName="loading.tsx" gitStatus={0} />,
            <File fileName="why.tsx" gitStatus={0} />,
          ]}
        />
        <File fileName="index.tsx" gitStatus={0} />
      </div>
    </div>
  );
};

export default index;
