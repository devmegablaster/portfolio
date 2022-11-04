import React from "react";
import Item from "./item";
import {
  VscSearch,
  VscFiles,
  VscSourceControl,
  VscExtensions,
  VscDebugRerun,
  VscLiveShare,
  VscAccount,
  VscSettingsGear,
} from "react-icons/vsc";
import { FaDocker, FaGithub } from "react-icons/fa";

const index: React.FC = (props: {}) => {
  const [active, setActive] = React.useState(0);

  // * Side Bar Icons styling
  const sideBarIconsStyle = "w-6 h-6";

  // * Side Bar Top Icons
  const sideBarTopIcons = [
    <VscFiles className={sideBarIconsStyle} />,
    <VscSearch className={sideBarIconsStyle} />,
    <VscSourceControl className={sideBarIconsStyle} />,
    <VscDebugRerun className={sideBarIconsStyle} />,
    <VscExtensions className={sideBarIconsStyle} />,
    <FaGithub className={sideBarIconsStyle} />,
    <FaDocker className={sideBarIconsStyle} />,
    <VscLiveShare className={sideBarIconsStyle} />,
  ];

  const sideBarBottomIcons = [
    <VscAccount className={sideBarIconsStyle} />,
    <VscSettingsGear className={sideBarIconsStyle} />,
  ];

  return (
    <div className="h-full flex flex-col justify-between w-[4%] bg-primary">
      <div className="flex flex-col h-full items-center w-full space-y-2">
        {sideBarTopIcons.map((item, index) => (
          <Item active={active === index} icon={item} />
        ))}
      </div>
      {sideBarBottomIcons.map((item, index) => (
        <Item active={false} icon={item} />
      ))}
    </div>
  );
};

export default index;
