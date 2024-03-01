import Header from "@/components/Header";
import "./globals.css";
import { Catamaran } from "next/font/google";
import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const catamaran = Catamaran({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-catamaran",
});

export const metadata = {
  title: "Scholauranstein Productivity Plug | Home",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${catamaran.className} font-sans text-grey_main`}>
        <Header />
        {children}
        <footer className="flex flex-col gap-4 divide-y  bg-[#21211D] p-10 ">
          <div className="flex flex-wrap justify-between items-center gap-4 ">
            <div className="">
              <Image
                src="/images/logo.svg"
                alt="comforTable logo"
                width={204.67}
                height={44.46}
                className="invert"
              />
              <p className="text-sm my-2">Where productivity meets comfort</p>
            </div>
            <div className="flex gap-2 self-center justify-center">
              <Link href="https://instagram.com/@scholauranstein">
                <FaInstagram size={25} />
              </Link>
              <Link href="https://instagram.com/@scholauranstein">
                <FaWhatsapp size={25} />
              </Link>
            </div>
            <button className=" px-6 py-2 bg-white text-black   rounded-lg ">
              Order now
            </button>
          </div>
          <div className="sm:flex justify-between text-xs py-2">
            <p>designed by KalaIT</p>
            <p>&copy; Copyright 2025 - Scholaurenstein Productivity Plug</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
