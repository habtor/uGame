import LogoAndProfile from "../components/LogoAndProfile";
import Main from "../components/Main";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <div className="flex flex-col justify-between  sm:w-full h-3/4 sm:h-3/4 w-[306px] max-w-[1200px] bg-[] rounded-3xl main mainBackgroud text-white overflow-hidden">
      <LogoAndProfile />
      <Main />
      <NavBar />
    </div>
  );
}

export default Home;
