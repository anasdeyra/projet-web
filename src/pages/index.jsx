import HeadsetCanvs from "../components/HeadsetCanvs";

export default function Index() {
  return (
    <div id="index" className="flex justify-between h-fit   ">
      <div className="content flex-1 h-screen flex items-start flex-col  ">
        <div className="title pt-20 mt-10">
          <span className=" text-6xl font-bold  text-transparent bg-clip-text  bg-green-500 ">
            Spotify
          </span>
          <h1 className="text-3xl mt-4 font-semibold">
            Your One-Stop Destination for Unlimited Music Streaming
          </h1>
        </div>
        <button className="text-xl mt-6 bg-gradient-to-bl hover:bg-green-500 from-emerald-700 to-green-500 px-6 py-3 rounded-lg font-semibold transition-all active:scale-[0.98]">
          join now
        </button>
      </div>
      <div className="model flex-1   h-screen ">
        <HeadsetCanvs />
      </div>
    </div>
  );
}
