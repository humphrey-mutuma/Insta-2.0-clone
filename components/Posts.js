import Post from "./Post";

const posts = [
  {
    id: 1,
    username: "humphreyMutuma",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "Lets build this",
  },
  {
    id: 2,
    username: "humphreyMutuma",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "Lets build this",
  },
];

const Posts = () => {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          img={post.img}
          caption={post.caption}
          userImg={post.userImg}
        />
      ))}
    </div>
  );
};

export default Posts;
