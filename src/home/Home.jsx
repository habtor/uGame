import LogoAndProfile from "../components/LogoAndProfile";
import Main from "../components/Main";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <div className="relative flex flex-col h-full sm:w-full sm:h-3/4 w-[306px] max-w-[1200px] rounded-3xl main mainBackgroud text-white overflow-hidden">
      <LogoAndProfile />
      <div className="flex flex-col h-full  max-w-[1200px] rounded-l main bg-darkColor overflow-hidden">
        <Main />
      </div>
      <NavBar />
    </div>
  );
}

export default Home;
