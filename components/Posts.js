import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";


const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
    return unsubscribe;
  }, [db]);

  console.log("postiiis", posts);

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          img={post.data().image}
          caption={post.data().caption}
          userImg={post.data().profileImg}
        />
      ))}
    </div>
  );
};

export default Posts;
