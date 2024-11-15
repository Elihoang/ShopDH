'use client'


import { CartproductType } from "@/app/product/[productid]/ProductDetails";
import { ClassNames } from "@emotion/react";
import React from "react";
interface SetquatityProps{
    cartCounter: boolean;
    cartProduct: CartproductType;
    handlequatityadd:()=>void;
    handlequatityremove:()=>void
}


const add ='border-[1.2px] border-slate-300 px-2 rounded'
const remove='border-[1.2px] border-slate-300 px-2 rounded'
const Setquatity:React.FC<SetquatityProps> = ({
    cartCounter,
    cartProduct,
    handlequatityadd,
    handlequatityremove
}) => {
    return ( 
        <div className="flex gap-8
        items-center">
            {cartCounter ? null :
            <div className="font-semibold">Quatity :
                </div>}
                <div className="flex gap-4 items-center text-base">
                    <button onClick={handlequatityremove}
                  className={remove}  >-</button>
                    <div>{cartProduct.quantity}</div>
                    <button onClick={handlequatityadd} className={add} >+</button>
                </div>
        </div>
     );
}
 
export default Setquatity;