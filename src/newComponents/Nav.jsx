import { FaGamepad } from "react-icons/fa";

function Nav() {
  return (
    <div className="flex justify-between w-full items-center">
      <div className="flex items-center">
        <FaGamepad className="text-2xl" />
        <ul className="flex ml-16">
          <li className="">Home</li>
          <li className="ml-12">Games</li>
          <li className="ml-12">Chat</li>
        </ul>
      </div>

      <span className="border-[1px] py- px-5">SignUp</span>
    </div>
  );
}

export default Nav;
