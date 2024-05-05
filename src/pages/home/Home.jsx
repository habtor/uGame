import Main from "../../components/Main";
// import NavBar from "../../components/main/NavBar";
import Nav from "../../components/home/Nav";

function Home() {
  return (
    // <div className=" relative h-full sm:w-[1200px]  w-[306px] max-w-[1200px] bg-darkColor text-white mt-1">
    //   <LogoAndProfile />

    //   <NavBar />

    //   <Main />
    // </div>
    <div className="relative h-full sm:w-full  w-[306px] max-w-[1200px] mainBackgrsoud m-auto text-white sm:px-20 py-5">
      <Nav />
      <Main />
    </div>
  );
}

export default Home;
