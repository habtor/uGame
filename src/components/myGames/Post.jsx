import { FaHeart } from "react-icons/fa6";
import { BiRepost } from "react-icons/bi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoIosShareAlt } from "react-icons/io";
import { BiSolidSend } from "react-icons/bi";
import { posts } from "../../data/gamesArray";

function Post() {
  return (
    <div>
      {posts.map((post) => (
        <div
          key={post.key}
          className="my-2 bg-main  rounded-xl cursor-default p-2"
        >
          <div className="flex justify-between items-center m-2 mx-3">
            <div className="flex items-center">
              <div
                className="h-10 w-10 rounded-2xl bg-cover bg-center border-[1px] border-green2"
                style={{
                  backgroundImage: `url("${post.image}")`,
                }}
              ></div>
              <span className="ml-2">{post.username}</span>
            </div>
            <div className="">
              <div className="h-[3px] w-[3px] bg-gray-400 rounded-full my-1"></div>
              <div className="h-[3px] w-[3px] bg-gray-400 rounded-full my-1"></div>
              <div className="h-[3px] w-[3px] bg-gray-400 rounded-full my-1"></div>
            </div>
          </div>
          <div>
            <img
              src={post.postImage}
              alt=""
              className="w-full max-h-[400px] objects-cover"
            />
            <div className="m-3 ">
              <p className="text-lg leading-3">{post.post} </p>
              <span className="text-sm text-gray-400">1233 Views</span>
              <div className="flex items-center mt-3">
                <img className="h-8 w-8 rounded-full" src={post.image} alt="" />
                <span className="ml-2">{post.game}</span>
              </div>
            </div>
          </div>
          <div className="h-[1px] w-[95%] bg-gray-500 bg-opacity-50 m-auto"></div>
          <div className="flex justify-around m-5">
            <div className="flex items-center">
              <FaHeart className="border-[1px] rounded-full p-1 h-6 w-6 border-gray-500" />
              <span className="ml-1">{post.likes}</span>
            </div>
            <div className="flex items-center">
              <BiRepost className="border-[1px] rounded-full p-1 h-6 w-6 border-gray-500" />
              <span className="ml-1">{post.reposts}</span>
            </div>
            <div className="flex items-center">
              <IoChatboxEllipsesOutline className="border-[1px] rounded-full p-1 h-6 w-6 border-gray-500" />
              <span className="ml-1">{post.comments.length}</span>
            </div>
            <div className="flex items-center">
              <IoIosShareAlt className="border-[1px] rounded-full p-1 h-6 w-6 border-gray-500" />
              <span className="ml-1">{post.shares}</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between px-2 items-center m-3 border-[1px] border-gray-600 p-1 rounded-lg">
              <div className="flex w-full">
                <div
                  className="h-10 w-10 rounded-2xl bg-cover bg-center"
                  style={{
                    backgroundImage: `url("https://img.freepik.com/free-vector/ninja-logo-template-gradient_23-2148999701.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1714694400&semt=ais")`,
                  }}
                ></div>
                <input
                  type="text"
                  placeholder="Add a comment"
                  className="bg-gray-100 bg-opacity-0  border-none focus:outline-none ml-2 w-full"
                />
              </div>
              <BiSolidSend className="ml-5 text-xl cursor-pointer" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Post;
