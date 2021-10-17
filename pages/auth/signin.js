import { getProviders, signIn as SignInProvider } from "next-auth/react";
import Header from "../../components/Header";

export default function SignIn({ providers }) {
  return (
    <>
      <Header />
      <section className="flex flex-col items-center justify-center min-h-screen py-2 -mt-36 px-14 text-center">
        <img
          className="w-80"
          src="https://links.papareact.com/ocw"
          alt="instagram icon"
        />
        <p className="text-red-400">
          This is not a real app, it is built for educational purposes only.
        </p>
        <div className="mt-20">
          {Object.values(providers).map((provider) => (
            <div className="" key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() =>
                  SignInProvider(provider.id, { callbackUrl: "/" })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
