import React from "react";

export default function Cta() {
  return (
    <div className="max-w-7xl mx-auto relative mt-40 p-10 rounded-xl bg-gradient-to-tr from-emerald-700 to-green-500 flex justify-between items-center">
      <div>
        <h2 className="font-bold text-3xl">
          Start Your Spotify Subscription Today
        </h2>
        <h3 className="font-semibold text-xl mt-2">
          Enjoy ad-free music streaming and more.
        </h3>
      </div>
      <button className="bg-white text-neutral-800 rounded-lg px-4 py-3 font-semibold transition-all active:scale-[0.98]">
        Unlock the Music
      </button>
      <img
        src="/cta.png"
        alt="cta"
        className="absolute right-[25%] -top-10 w-28 transition-transform bounce "
      />
    </div>
  );
}
