"use client";
import { ShoppingCart } from "lucide-react";
import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import CartAlert from "./CartAlert";

const CartIcon = () => {
  return (
    <div className="fixed bottom-16 right-4  ">
      <AlertDialog>
        <AlertDialogTrigger>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <div className="bg-primary p-3 rounded opacity-50 hover:opacity-100 transition-all relative">
                  <ShoppingCart className="text-white" />
                </div>{" "}
                <div className="absolute bg-red-500 text-sm rounded-full aspect-square h-7 w-7 flex justify-center items-center text-white -top-3 -right-3 ">
                  40
                </div>
              </TooltipTrigger>
              <TooltipContent className="">View Cart</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </AlertDialogTrigger>
        <AlertDialogContent className="overflow-y-scroll">
          <AlertDialogCancel className="absolute top-4 right-4">
            X
          </AlertDialogCancel>
          <AlertDialogHeader>Cart</AlertDialogHeader>
          <CartAlert />
          <AlertDialogFooter>
            <AlertDialogAction>Proceed to checkout &rarr;</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default CartIcon;
