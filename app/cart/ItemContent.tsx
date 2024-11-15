'use client'

import React from "react";
import { CartproductType } from "../product/[productid]/ProductDetails";
import { formatPrice } from "@/utils/formatprice";
import Link from "next/link";
import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import Setquatity from "../components/products/Setquatity";
import { useCart } from "@/hooks/useCart";

interface ItemContentProps{
    item: CartproductType
}



const ItemContent:React.FC<ItemContentProps> = ({item}) => {
    const {handleRemovetocart,handleCartQtyAdd} =useCart();
    return ( 
        <div
        className="grid grid-cols-5
        text-xs
        md:text-sm
        gap-4
        border-t-[1.5px]
        border-slate-500
        mt-5
        py-4
        items-center">
            <div className=" items-center mt-6 col-span-2 justify-self-start flex gap-2 md:gap-4">
                <Link href={`/product/${item.id}`}>
                    <div className=" relative w-[100px] aspect-square ">
                        <Image
                        src={item.selectedimg.image}
                        alt={item.name}
                        fill
                        className="object-contain"
                        />
                    </div>
                </Link>
                
                <div className="flex flex-col justify-between">
                <Link href={`/product/${item.id}`}>
                    {truncateText(item.name)}</Link>
                <div>{item.selectedimg.color}</div>
                <div className="w-[70px]">
                    <button onClick={()=>{}}  
                    className="text-slate-500 underline">Remove
                    </button>
                </div>
            </div>
        </div>
            <div className=" mt-6 items-center justify-self-center">{formatPrice(item.price)}</div>
            <div className="mt-6 justify-self-center" >
                <Setquatity
                cartCounter={true}
                cartProduct={item}
                handlequatityadd={()=>{
                    handleCartQtyAdd
                }}
                handlequatityremove={()=>{}}
                />
            </div>
           <div>
           </div>

        </div>
     );
}
 
export default ItemContent;