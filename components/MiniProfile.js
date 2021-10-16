const MiniProfile = () => {
  return (
    <section className="flex items-center justify-between mt-14 ml-10">
      <img
        className="rounded-full border p-[2px] w-16 h-16"
        src="https://links.papareact.com/3ke"
        alt="user profile"
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold"> humphreyMutuma</h2>
        <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
      </div>
      <button className="text-sm font-semibold text-blue-400">Sign out</button>
    </section>
  );
};

export default MiniProfile;
