import LogoAndProfile from "../components/LogoAndProfile";
import Main from "../components/main/Main";
import NavBar from "../components/main/NavBar";
import Main2 from "../newComponents/Main2";
import Nav from "../newComponents/Nav";

function Home() {
  return (
    // <div className=" relative h-full sm:w-[1200px]  w-[306px] max-w-[1200px] bg-darkColor text-white mt-1">
    //   <LogoAndProfile />

    //   <NavBar />

    //   <Main />
    // </div>
    <div className="relative h-full sm:w-[1200px]  w-[306px] max-w-[1200px] mainBackgroud m-auto text-white sm:px-24 py-5">
      <Nav />
      <Main2 />
    </div>
  );
}

export default Home;
