import Image from "next/image";
import { Montserrat } from "next/font/google";

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
    image: "bgtable.webp",
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
      <h2 className="font-bold text-xl mb-8 text-primary">Our Products</h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center ">
        {products.map((product) => (
          <div key={product.id}>
            <div className="bg-[#e3cbcb]/30 w-[288px] h-[348px] flex items-center justify-center">
              <Image
                src={`/images/product/${product.image}`}
                width={250}
                height={250}
                alt={`image ${product.name}`}
              />
            </div>
            <div className="text-center mt-6 mb-2">
              <h4 className="text-primary font-medium h-12 overflow-hidden">
                {product.name}
              </h4>
              <p className={montserrat.className}>GHC {product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
