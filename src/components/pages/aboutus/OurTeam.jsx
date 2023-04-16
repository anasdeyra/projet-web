import React from "react";

const OurTeam = () => {
  return (
    <div className="mt-[6rem]">
      <h1 className="text-4xl font-bold">Our Team</h1>
      <div className="grid grid-cols-4 mt-16">
        {persones.map((props, i) => {
          return (
            <div className="flex flex-col items-center gap-5" key={i}>
              <img
                className=" rounded-full h-[8rem] w-[8rem] "
                src={props.pic}
              />
              <p className=" font-medium text-lg">{props.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const persones = [
  {
    name: "Anas Ben Daira",
    pic: "https://i.pravatar.cc/100",
  },
  {
    name: "Mohamed Amine Tebini",
    pic: "https://i.pravatar.cc/100",
  },
  {
    name: "Leith Ben Hassen",
    pic: "https://i.pravatar.cc/100",
  },
  {
    name: "Mehdi Bhk",
    pic: "https://i.pravatar.cc/100",
  },
];
export default OurTeam;
