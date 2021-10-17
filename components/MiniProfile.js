import { signOut, useSession } from "next-auth/react";

const MiniProfile = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <section className="flex items-center justify-between mt-14 ml-10">
      <img
        className="rounded-full border p-[2px] w-16 h-16"
        src={session?.user?.image}
        alt=" "
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
      </div>
      <button onClick={signOut} className="text-sm font-semibold text-blue-400">
        Sign out
      </button>
    </section>
  );
};

export default MiniProfile;
