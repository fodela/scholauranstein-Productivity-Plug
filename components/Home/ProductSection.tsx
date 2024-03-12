import Image from "next/image";
import { Montserrat } from "next/font/google";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { Button } from "../ui/button";
import Link from "next/link";

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
  },
  {
    id: 2,
    name: "Plain Foldable table",
    price: "120",
    image: "plainbedtable.png",
    isFavorite: false,
  },
  {
    id: 3,
    name: "Laptop stand",
    price: "150",
    image: "laptopstanddetail.png",
    isFavorite: false,
  },
  {
    id: 4,
    name: "Multipurpose wall mount accessory holder",
    price: "25",
    image: "bgwallmount.png",
    isFavorite: false,
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
            <Link href={`/products/${product.name}`}>
              <div className="bg-secondary/50 w-[288px] h-[348px] flex items-center justify-center relative overflow-hidden">
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
            </Link>
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
    </section>
  );
};

export default ProductSection;
