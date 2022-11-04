import React from "react";
import { FaCheck, FaClock, FaUserClock } from "react-icons/fa";
import {
  VscCloudUpload,
  VscError,
  VscGitCommit,
  VscGraph,
  VscLiveShare,
  VscSourceControl,
  VscWarning,
} from "react-icons/vsc";

function index() {
  return (
    <div className="py-1 px-4 flex items-center justify-between">
      <div className="flex items-center space-x-4 text-white text-ms">
        <div className="flex items-center space-x-1">
          <VscSourceControl />
          <p>main*</p>
        </div>
        <VscCloudUpload />
        <div className="flex items-center space-x-1">
          <VscError />
          <p>0</p>
          <VscWarning />
          <p>0</p>
        </div>
        <div className="flex items-center space-x-1">
          <VscLiveShare />
          <p>Live Share</p>
        </div>
        <div className="flex items-center space-x-1">
          <FaClock />
          <p>WakaTime mins</p>
        </div>
      </div>
      <div className="flex items-center space-x-4 text-white text-ms">
        <div className="flex items-center space-x-1">
          <VscGitCommit />
          <p>You, 2 weeks ago</p>
        </div>
        <div className="flex items-center space-x-1">
          <p>Ln 39,</p>
          <p>Col 44</p>
        </div>
        <p>Spaces: 4</p>
        <p>UTF-8</p>
        <div className="flex items-center space-x-1">
          <p>{"{ }"}</p>
          <p>TypeScript React</p>
        </div>
        <div className="flex items-center space-x-1">
          <FaCheck className="font-light" />
          <p>Prettier</p>
        </div>
      </div>
    </div>
  );
}

export default index;
