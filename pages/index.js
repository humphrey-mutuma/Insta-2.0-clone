import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-visible ">
      <Head>
        <title>instagram 2.0 clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <Header />
      {/* feed */}
      <Feed />
      {/* modal */}
    </div>
  );
}
