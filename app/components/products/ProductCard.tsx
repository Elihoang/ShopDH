'use client'

import { formatPrice } from "@/utils/formatprice"; 
import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import { Rating } from "@mui/material";
import { useRouter } from 'next/navigation'

interface ProductCardProps {
  data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/product/${data.id}`);
  };

  const productrating =
    data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) / data.reviews.length;

  return (
    <div
      onClick={handleClick}
      className="col-span-1
        cursor-pointer
        border-slate-600
        bg-slate-500 
        rounded-sm p-2 
        transition 
        hover:scale-105 
        text-center 
        text-sm"
    >

      <div className="flex flex-col
       items-center 
       w-full
       gap-1">
        <div className="aspect-square
         overflow-hidden 
         relative w-full">
          <Image
            fill
            src={data.images[0].image}
            alt={data.name}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="mt-2">{truncateText(data.name)}</div>
        <div>
          <Rating value={productrating} readOnly />
        </div>
        <div>{data.reviews.length} reviews</div>
        <div className="font-semibold">{formatPrice(data.price)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
