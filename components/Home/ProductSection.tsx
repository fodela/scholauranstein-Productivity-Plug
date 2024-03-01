import Image from "next/image";
import { Montserrat } from "next/font/google";
import { FaHeart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";

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
  },
  {
    id: 2,
    name: "Plain Foldable table",
    price: "120",
    image: "plainbedtable.png",
  },
  {
    id: 3,
    name: "Laptop stand",
    price: "120",
    image: "laptopstanddetail.png",
  },
  {
    id: 4,
    name: "Multipurpose wall mount accessory holder",
    price: "25",
    image: "bgwallmount.png",
  },
];
const ProductSection = () => {
  return (
    <section
      id="products"
      className="px-8 max-w-screen-xl mx-auto my-16 scroll-mt-28"
    >
      <h2 className="font-bold text-xl mb-8 text-primary text-center">
        Our Products
      </h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center ">
        {products.map((product) => (
          <div key={product.id} className="group">
            <div className="bg-[#e3cbcb]/30 w-[288px] h-[348px] flex items-center justify-center relative overflow-hidden">
              <Image
                src={`/images/product/${product.image}`}
                width={250}
                height={250}
                alt={`image ${product.name}`}
              />
              <div className="flex absolute group-hover:translate-y-0 translate-y-full bottom-0 transition-all duration-150 ease-linear">
                <p className="uppercase px-4 py-1 text-xs bg-primary text-white tracking-wide">
                  quick look
                </p>{" "}
                <div className="py-1 px-2 bg-[#555] text-white hover:text-red-400 transition-colors ">
                  <IoIosHeart size={15} />
                </div>
              </div>
            </div>
            <div className="text-center mt-6 mb-2">
              <h4 className="text-primary font-medium h-12 overflow-hidden">
                {product.name}
              </h4>
              <p className="relative overflow-hidden">
                <span className="absolute uppercase inline-block transition-all ease-in hover:text-primary text-sm -translate-x-28 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-300 cursor-pointer">
                  add to cart
                </span>{" "}
                <span
                  className={`${montserrat.className} inline-block group-hover:translate-x-28 group-hover:opacity-0 transition-all ease-out duration-300  `}
                >
                  GHC {product.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
