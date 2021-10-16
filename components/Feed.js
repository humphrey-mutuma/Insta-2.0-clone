import Stories from "./Stories";

const Feed = () => {
  return (
    <main className="grid col-span-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
      {/* main staff */}
      <section className='col-span-2'>
        {/* Stories */}
        <Stories />
        {/* Posts */}
      </section>

      {/* right staff */}
      <section className="col-span-1">
        {/* Mini Profile */}
        {/* Suggestions */}
      </section>
    </main>
  );
};

export default Feed;
