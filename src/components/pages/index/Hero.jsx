import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <div className="mt-32">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className=" text-6xl font-bold  text-transparent bg-clip-text  bg-gradient-to-l from-emerald-700 to-green-500 ">
          Your Music, Your Way!
        </h2>
        <h2 className="text-2xl mt-4 font-semibold text-neutral-100">
          Escape into your own world of music with our curated playlists and
          personalized recommendations.
        </h2>
      </div>
      <div className="flex items-center justify-center gap-8 mt-10 mx-auto">
        <button className="text-lg text-neutral-950 font-semibold bg-gradient-to-bl hover:bg-green-500 from-emerald-700 to-green-500 px-5 py-2 rounded-full transition-all active:scale-[0.98]">
          Join now
        </button>
        <button className="flex gap-1 items-center transition-all active:scale-[0.98]">
          Learn more <FiArrowRight />
        </button>
      </div>
    </div>
  );
}
