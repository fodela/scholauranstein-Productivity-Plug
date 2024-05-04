"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { products } from "../Home/ProductSection";
import Image from "next/image";
import { Button } from "../ui/button";

export default function CartAlert() {
  return (
    <Table className="">
      <TableHeader>
        <TableRow>
          <TableHead className="w-full">Product</TableHead>
          <TableHead className="text-center">Quantity</TableHead>
          <TableHead className="text-right">Subtotal</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.name}>
            <TableCell className="font-medium w-full">
              <div className="sm:flex gap-4">
                <Image
                  width={70}
                  height={70}
                  alt={product.name}
                  src={`/images/product/${product.image}`}
                />
                <div className="">
                  <p>{product.name}</p>
                  <p className="text-sm font-normal">
                    Price: GHC{product.price}
                  </p>
                  <Button variant="ghost" className="block text-red-500 p-0">
                    Remove
                  </Button>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-center">{2}</TableCell>
            <TableCell className="text-right">{+product.price * 2}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
