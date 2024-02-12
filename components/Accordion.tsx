"use client";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Accordion = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`flex flex-col shadow-lg ${open && "sm:row-span-2"}`}>
      <header
        className="flex gap-2 items-center justify-between bg-[#2D2D2D] rounded-t-lg p-4 text-white/60  "
        onClick={() => setOpen(!open)}
      >
        <h2>Do you make international delivery? </h2>{" "}
        <IoIosArrowDown
          className={`${
            open && "rotate-180 "
          } transition-transform ease-in-out`}
          size={20}
        />
      </header>
      <div className={`${!open && "invisible"} slide-down overflow-hidden`}>
        <div className={`${!open && "hidden"} slide-down p-4`}>
          No! We only supply in Ghana for now.
        </div>
      </div>
    </div>
  );
};

export default Accordion;
