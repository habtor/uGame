import LogoAndProfile from "../components/LogoAndProfile";
import Main from "../components/main/Main";
import NavBar from "../components/main/NavBar";

function Home() {
  return (
    <div className=" relative h-full sm:w-[1200px]  w-[306px] max-w-[1200px] bg-darkColor text-white mt-1">
      <LogoAndProfile />

      <NavBar />

      <Main />
    </div>
  );
}

export default Home;
