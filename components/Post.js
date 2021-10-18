import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";

const Post = ({ id, username, userImg, img, caption }) => {
  const { data: session } = useSession();

  return (
    <section className="bg-white my-7 border rounded-sm">
      {/* header */}
      <div className="flex items-center p-5">
        <img
          src={userImg}
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          alt=""
        />
        <p className="flex-1 font-bold ">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      {/* image */}
      <img src={img} alt="post image" className="object-cover w-full " />
      {/* buttons */}

      {/* conditionally show like buttons etc when user is logged in */}

      {session && (
        <section className="flex justify-between items-center px-4 pt-4">
          <div className="flex space-x-4 ">
            <HeartIcon className="btn" />
            <ChatIcon className="btn" />
            <PaperAirplaneIcon className="btn" />
          </div>
          <div>
            <BookmarkIcon className="btn" />
          </div>
        </section>
      )}
      {/* caption  */}
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{username}</span>
        {caption}
      </p>
      {/* comments */}
      {/* input box */}
      {/* conditionally show comment button and input when user in logged in */}
      {session && (
        <form className="flex p-4 items-center">
          <EmojiHappyIcon className="h-7" />
          <input
            placeholder="Add a comment"
            className="flex-1 border-none focus:ring-0 outline-none"
            type="text"
          />
          <button className="font-semibold text-blue-400">Post</button>
        </form>
      )}
    </section>
  );
};

export default Post;
