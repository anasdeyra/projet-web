import HeadsetCanvs from "../components/HeadsetCanvs";

export default function Index() {
  return (
  <div id="index" className="flex justify-between h-fit   ">
    <div className="content flex-1 h-screen flex items-center flex-col gap-y-10 ">
    <div className="title pt-20 mt-10">
    <h1 className="text-4xl "> 
    <span className=" text-5xl bg-gradient-to-r text-transparent bg-clip-text  from-green-500 via-green-300 to-green-100">StreamWave </span>: Your One-Stop Destination for Unlimited Music Streaming
    </h1>
    </div>
      <button className="text-xl bg-green-500 px-5 py-2 rounded-md transition-all active:scale-[1.1]">
        join now
      </button>
    </div>
<div className="model flex-1   h-screen "> 
<HeadsetCanvs/>
</div>
  </div>)
}
