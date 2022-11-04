import type { NextPage } from "next";
import SideBar from "../components/SideBar";
import BottomBar from "../components/BottomBar";
import NavBar from "../components/NavBar";

const Home: NextPage = () => {
  return (
    <div className="w-screen flex flex-col h-screen bg-primary">
      <div className="flex flex-grow h-full w-full">
        <SideBar />
        <NavBar />
      </div>
      <BottomBar />
    </div>
  );
};

export default Home;
