import Image from "next/image";
import { Montserrat } from "next/font/google";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { Button } from "../ui/button";
import Link from "next/link";
import ProductDetail from "@/components/Home/ProductDetail";
import { useState } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});
const products = [
  {
    id: 1,
    name: "Foldable bed table with USB, fan and light",
    price: "160",
    image: "bgtable.png",
    isFavorite: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sequi, iste expedita fugiat provident quia minus cupiditate accusamus nisi reiciendis assumenda in dicta doloremque. Suscipit odit quisquam cum est aut?",
    availableColors: [
      { name: "blue", color: "bg-blue-500" },
      ,
      { name: "green", color: "bg-green-500" },
      { name: "black", color: "bg-black" },
      { name: "pink", color: "bg-pink-500" },
      { name: "light brown", color: "bg-secondary/30" },
      { name: "dark brow", color: "bg-secondary" },
      ,
    ],
  },
  {
    id: 2,
    name: "Plain Foldable table",
    price: "120",
    image: "plainbedtable.png",
    isFavorite: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sequi, iste expedita fugiat provident quia minus cupiditate accusamus nisi reiciendis assumenda in dicta doloremque. Suscipit odit quisquam cum est aut?",
    availableColors: [
      { name: "blue", color: "bg-blue-500" },
      ,
      { name: "green", color: "bg-green-500" },
      { name: "black", color: "bg-black" },
      { name: "pink", color: "bg-pink-500" },
      { name: "light brown", color: "bg-secondary/30" },
      { name: "dark brow", color: "bg-secondary" },
      ,
    ],
  },
  {
    id: 3,
    name: "Laptop stand",
    price: "150",
    image: "laptopstanddetail.png",
    isFavorite: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sequi, iste expedita fugiat provident quia minus cupiditate accusamus nisi reiciendis assumenda in dicta doloremque. Suscipit odit quisquam cum est aut?",
    availableColors: [
      { name: "blue", color: "bg-blue-500" },
      ,
      { name: "green", color: "bg-green-500" },
      { name: "black", color: "bg-black" },
      { name: "pink", color: "bg-pink-500" },
      { name: "light brown", color: "bg-secondary/30" },
      { name: "dark brow", color: "bg-secondary" },
      ,
    ],
  },
  {
    id: 4,
    name: "Multipurpose wall mount accessory holder",
    price: "25",
    image: "bgwallmount.png",
    isFavorite: false,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sequi, iste expedita fugiat provident quia minus cupiditate accusamus nisi reiciendis assumenda in dicta doloremque. Suscipit odit quisquam cum est aut?",
    availableColors: [
      { name: "blue", color: "bg-blue-500" },
      ,
      { name: "green", color: "bg-green-500" },
      { name: "black", color: "bg-black" },
      { name: "pink", color: "bg-pink-500" },

      { name: "light brown", color: "bg-secondary/30" },
      { name: "dark brow", color: "bg-secondary" },
    ],
  },
];
const ProductSection = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedProductIndex, setSelectedProducIndex] = useState(0);
  const handleShowDetail = (index: number) => {
    setSelectedProducIndex(index);
    setShowDetail(true);
  };
  return (
    <section
      id="products"
      className="px-8 max-w-screen-xl mx-auto my-16 scroll-mt-28 "
    >
      <h2 className="font-bold text-xl mb-8 text-primary text-center">
        Our Products
      </h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center ">
        {products.map((product, index) => (
          <div key={product.id} className="group">
            <div
              className="bg-secondary/50 w-[288px] h-[348px] flex items-center justify-center relative overflow-hidden"
              onClick={() => handleShowDetail(index)}
            >
              <Image
                src={`/images/product/${product.image}`}
                width={250}
                height={250}
                alt={`image ${product.name}`}
              />
              <div className="flex absolute sm:group-hover:translate-y-0 translate-y-full bottom-0 transition-all duration-150 ease-linear">
                <p className="uppercase px-4 py-1 text-xs bg-primary text-white tracking-wide">
                  quick look
                </p>{" "}
                <div className="py-1 px-2 bg-[#555] text-white hover:text-red-400 transition-colors ">
                  <IoIosHeart size={15} />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center text-center mt-6 mb-2">
              <h4 className="text-primary font-medium h-12 overflow-hidden">
                {product.name}
              </h4>
              <p className="relative overflow-hidden w-full">
                <span className="absolute uppercase inline-block transition-all ease-in hover:text-primary text-sm -translate-x-28 opacity-0 sm:group-hover:translate-x-0 sm:group-hover:opacity-100 duration-300 cursor-pointer">
                  add to cart
                </span>{" "}
                <span
                  className={`${montserrat.className} inline-block sm:group-hover:translate-x-28 sm:group-hover:opacity-0 transition-all ease-out duration-300  `}
                >
                  GHC {product.price}
                </span>
              </p>
              <div className="sm:hidden flex items-center gap-8 my-4 ">
                <Button variant="primary">Add to cart</Button>
                <div className="p-2 bg-secondary/30 rounded text-primary">
                  <FaRegHeart size={20} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showDetail && (
        <div
          className="bg-black/60 fixed top-0 left-0 right-0 z-40 bottom-0"
          onClick={() => setShowDetail(false)}
        >
          <Button
            className="absolute top-1 right-1 text-primary"
            onClick={() => setShowDetail(false)}
          >
            X
          </Button>
          <ProductDetail product={products[selectedProductIndex]} />
        </div>
      )}
    </section>
  );
};

export default ProductSection;
