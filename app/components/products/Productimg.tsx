'use client'

import { CartproductType, selectedimgType } from "@/app/product/[productid]/ProductDetails";
import Image from "next/image";
import React from "react";

interface ProductImgProps {
    cartproduct: CartproductType;
    product: any;
    handleColor: (value: selectedimgType) => void;
}

const ProductImg: React.FC<ProductImgProps> = ({
    cartproduct,
    product,
    handleColor
}) => {
    return (
        <div className="grid grid-cols-6 gap-2 h-full max-h-[500px] min-h-[500px] sm:min-h-[500px]">
            <div className="flex flex-col items-center justify-center gap-4 cursor-pointer border h-full max-h-[500px] min-h-[500px] sm:min-h-[500px]">
                {product.images.map((image: selectedimgType) => (
                    <div
                        key={image.color}
                        onClick={() => handleColor(image)}
                        className={`relative w-[80%] aspect-square border-teal-700 rounded
                            ${cartproduct.selectedimg.color === image.color ? 'border-[2px]' : 'border-none'}
                        `}
                    >
                        <Image src={image.image} alt={image.color} fill className="object-contain" />
                    </div>
                ))}
            </div>
            <div className="col-span-5 relative aspect-square">
                <Image
                    src={cartproduct.selectedimg.image}
                    fill
                    className="w-full h-full object-contain max-h-[500px] min-h-[500px] sm:min-h-full" alt={""}                />
            </div>
        </div>
    );
}

export default ProductImg;
