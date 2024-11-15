'use client'

import { CartproductType, selectedimgType } from "@/app/product/[productid]/ProductDetails";

interface setColorProps {
    images: selectedimgType[];
    cartProduct: CartproductType;
    handColorSelect: (value: selectedimgType) => void;
}

const SetColor: React.FC<setColorProps> = ({ images, cartProduct, handColorSelect }) => {
    return (
        <div>
            <div className="flex gap-4 items-center">
                <span className="font-semibold">Color : </span>
                <div className="">
                    {images.map((image) => {
                        return(
                        <div
                        key={image.color}
                        onClick={()=>handColorSelect(image)}
                        className={`
                        h-7 
                        w-7 
                        rounded-full
                        border-teal-500 
                        flex 
                        items-center 
                        justify-center
                        ${
                            cartProduct.selectedimg.color === image.color 
                            ? 'border-[1.5px]' 
                            : 'border-none'
                            }
                            `}>

                            <div style={{ background: image.colorCode }} 
                            className="h-5 
                            w-5 
                            rounded-full 
                            border-[1.2px]
                            border-slate-500 
                            cursor-pointer
                            gap-2"></div>
                        </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SetColor;
