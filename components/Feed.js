import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

const Feed = () => {
  return (
    <main className="grid col-span-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
      {/* main staff */}
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>

      {/* right staff */}
      <section className="">
        <MiniProfile />
        <Suggestions/>
      </section>
    </main>
  );
};

export default Feed;
