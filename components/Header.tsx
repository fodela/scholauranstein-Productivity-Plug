"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-0 right-0 left-0 ">
      <header className=" container px-4 flex justify-between items-center py-8 relative bg-white">
        <Image
          src="images/logo.svg"
          alt="comforTable logo"
          width={204.67}
          height={44.46}
          className=""
        />
        <div className="md:flex gap-6 items-center hidden ">
          <ul className="flex gap-6 mx-6">
            <Link href="/">
              <li className=" hover:text-primary transition-all ease-linear">
                Home
              </li>
            </Link>
            <Link href="/">
              <li className=" hover:text-primary transition-all ease-linear">
                Product
              </li>
            </Link>
            <Link href="/">
              <li className=" hover:text-primary transition-all ease-linear">
                Testimonials
              </li>
            </Link>
            {/* <Link href="/contact">
              <li className=" hover:text-primary transition-all ease-linear">
                Contact
              </li>
            </Link> */}
          </ul>

          <button className="px-4 py-2 bg-primary text-white  rounded-lg">
            Order Now
          </button>
        </div>
        {open ? (
          <IoMdClose
            className="md:hidden rotate90"
            size={30}
            onClick={() => setOpen(false)}
          />
        ) : (
          <div className="flex uppercase item-center md:hidden text-primary text-sm font-medium gap-1">
            menu{" "}
            <IoIosMenu
              className="anti-rotate90"
              onClick={() => setOpen(true)}
              size={20}
            />
          </div>
        )}
        {open && (
          <ul className=" w-2/3 absolute flex flex-col top-10 -left-5 backdrop-blur-sm bg-[#21211dbf] text-white text-3xl gap-6 p-10 menuSlideRight transition-transform text-center">
            <li className="hover:text-black hover:bg-white transition-all  ">
              Home
            </li>
            <li>Product</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
        )}
      </header>
    </div>
  );
};

export default Header;
