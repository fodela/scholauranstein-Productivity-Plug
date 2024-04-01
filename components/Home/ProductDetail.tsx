import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";

const ProductDetail = ({ product }: { product: any }) => {
  const [colorIndex, setColorIndex] = useState(0);
  return (
    <div className="px-8 py-16 h-full flex justify-center  items-center">
      <div className="max-h-[90vh]  overflow-y-scroll">
        <div
          className="max-w-screen-lg mx-auto grid md:grid-cols-2 bg-white p-8 md:gap-8 relative "
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={`/images/product/${product.image}`}
            alt={`image of ${product.name}`}
            width={500}
            height={500}
          />
          <div className="">
            <h3 className="font-bold text-xl text-primary">{product.name}</h3>
            <p className="">{product.description}</p>
            <p className="text-primary font-bold text-lg">
              GHC {product.price}
            </p>
            <div className="">
              <h5 className="font-bold text-lg mt-2">Choose color</h5>
              <p>{product.availableColors[colorIndex].name}</p>
              <div className="flex gap-4 flex-wrap py-4">
                {product.availableColors.map((color: any, index: number) => (
                  <div
                    key={index}
                    className={`h-8 w-8 rounded ${
                      product.availableColors[index].color
                    } ${
                      colorIndex === index &&
                      "scale-125 border-2 border-primary transition-all duration-300"
                    }`}
                    onClick={() => setColorIndex(index)}
                  ></div>
                ))}
              </div>
            </div>
            <div className="mt-8">
              {" "}
              <Button variant="primary">Add to cart</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
