'use client';
import { FaShoppingCart } from "react-icons/fa";
import { Rating } from "@mui/material";
import { use, useCallback, useEffect, useState } from "react";
import SetColor from "@/app/components/products/SetColor";
import Setquatity from "@/app/components/products/Setquatity";
import Button from "@/app/components/products/Button";
import Productimg from "@/app/components/products/Productimg";
import { IconBaseProps } from "react-icons/lib";
import { useCart } from "@/hooks/useCart";
import { Router,} from "next/router";
import { useRouter } from "next/navigation";
import { MdChangeCircle,MdCheckCircle } from "react-icons/md";


interface ProductDetailsProps {
    product: any;
}

export type CartproductType ={
    id:string, 
    name: string,
    description:string, //mo ta
    category: string, //loai hang
    brand:string,
    selectedimg:selectedimgType,
    quantity:number,
    price:number
}

export type selectedimgType={
    color:string,
    colorCode:string,
    image:string
}


const Horizontal = () => {
    return <hr className="w-[30%] my-2" />;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
   
    const {cartTotalquantity} = useCart()

    const {handleAddtocart,cartProduct}=useCart()

    const [isProductinCart,setisProductinCart]=useState(false)

    const [Cartproduct,setCartproduct]=useState<CartproductType>({
    id:product.id, 
    name: product.name,
    description:product.description, //mo ta
    category: product.category, //loai hang
    brand: product.brand,
    selectedimg:{...product.images[0]},
    quantity:1,
    price:product.price
    });


   const router=useRouter();



//    console.log(cartTotalquantity)
   
//    console.log(cartProduct)

//    useEffect(()=>{
//     setisProductinCart(false)
//     if(cartProduct){
//         const Index=cartProduct.findIndex((item)=>
//         item.id === product.id)
//     }
//    },[Cartproduct])
   


    useEffect(() => {
       setisProductinCart(false);

       if (cartProduct) {
          const index = cartProduct.findIndex((item) => 
          item.id === product.id);

         if (index > -1) {
            setisProductinCart(true);
         }
       }
       }, [cartProduct]);

    const productrating =
        product.reviews.reduce((acc: number, item: any) =>
        item.rating + acc, 0) /
        product.reviews.length;

    const handColor = useCallback((value:selectedimgType)=>
    {
        setCartproduct((prev)=>{
            return {...prev,selectedimg:value}
        })
    },[Cartproduct.selectedimg])
     
    // const handColor = useCallback(
    //     (value: selectedimgType) => {
    //         // Your logic here
    //         console.log(`Selected color: ${value.color}`);
    //     },
    //     [cartProduct.selectedimg]
    // );
    const handlequatityadd=useCallback(()=>{
        setCartproduct((prev)=>{
            return{...prev,quantity:++prev.quantity}
        })
    },[Cartproduct])

    
    const handlequatityremove=useCallback(()=>{   

        if(Cartproduct.quantity === 1 ){
            return 0;
        }
        setCartproduct((prev)=>{
        return{...prev,quantity:--prev.quantity}
    })
},[Cartproduct])

     
    return (
        <div className="grid grid-cols-l md:grid-cols-2 gap-12">
            {/* <div>Images</div> */}
            <Productimg 
            cartproduct={Cartproduct}
            product={product}
            handleColor={handColor} />
            <div className="flex flex-col gap-2 text-slate-500 text-sm">
                <h2 className="text-3xl font-medium text-slate-800">{product.name}</h2>
                <div className="flex items-center gap-2">
                    <Rating value={productrating} readOnly />
                    <div>{product.reviews.length}</div>
                </div>
                <Horizontal />
                <div className="text-justify">{product.description}</div>
                <Horizontal />
                <div>
                    <span className="font-semibold">Category : </span>
                    {product.category}
                </div>
                <div>
                    <span className="font-semibold">Brand : </span>
                    {product.brand}
                </div>
                <div className={product.inStock ? 'text-teal-600' : 'text-rose-700'}>
                    {product.inStock ? 'In stock' : 'Out of stock'}
                </div>
                <Horizontal />
                {isProductinCart ? (<>
                <p className="mb-2 text-slate-600 flex items-center gap-1"> 
                    <MdCheckCircle className='text-teal-700'size={20}/>
                    <span>ko cart</span>
                </p>
                <div className="max -w-[400px]">
                    <Button label='view Cart' 
                    outline 
                    onClick={()=> {
                    router.push('/cart');
                    }} />
                </div>
                </> ): (<>
                <SetColor 
                 cartProduct={Cartproduct}
                 images={product.images}
                 handColorSelect={handColor}/>
                <Horizontal/>
               <Setquatity
                    cartProduct={Cartproduct}
                    handlequatityadd={handlequatityadd}
                    handlequatityremove={handlequatityremove} cartCounter={false}/>
               
                <Horizontal/>
                <div className="max-w-[400px]">
                    <Button 
                    label="Add to cart" 
                    onClick={() =>  handleAddtocart(Cartproduct) }
                    disabled={false} 
                    outline={false} 
                    small={false} 
                    custom={""} 
                    icon={() => <FaShoppingCart />}
                    />
                </div>
                </>
                )}
            </div>
        </div>
    );
};

export default ProductDetails;
