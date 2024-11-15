import cart from "@/app/cart/page";
import { CartproductType } from "@/app/product/[productid]/ProductDetails";
import { createContext, use, useCallback, useContext, useEffect, useState }
from "react";

import toast from "react-hot-toast";
type CartContextType = {
    [x: string]: ReactNode;
    map(arg0: (item: any) => import("react").JSX.Element): import("react").ReactNode;
    length: number;
    id: any;
    cartTotalquantity: number;
    cartProduct:CartContextType[] | null;
    handleAddtocart:(product:CartproductType)=>void;
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props{
    [propName:string]:any;
}
export const CartContextProvider = (props:Props) => {
    const [cartTotalquantity, setCartTotalquantity] = useState(10);
    const [cartProduct,setCartproduct]=useState<CartproductType[] |null>(null);
   
   useEffect(() =>{
       const cartitem:any =localStorage.getItem("dhshopitem")
       const cartProduct: CartproductType[] | 
       null=JSON.parse(cartitem)
   
       setCartproduct(cartProduct);
    },[])
   
   
    const handleAddtocart=useCallback((product:CartproductType)=>{
        setCartproduct((prev) => {
            let updatedCart;
        if(prev){
           updatedCart=[...prev,product]
        }else{
            updatedCart=[product]
        }

        toast.success("san pham dc them vao gio hang")

        localStorage.setItem('dhshop',JSON.stringify(updatedCart))
    return updatedCart})
    },[cartProduct])
   
   const handleCartQtyAdd = useCallback((product:CartproductType)=>{
    let updateCart;
    if(product.quantity===99){
        return toast.error("max quantity")
    }

 
     if(cartProduct){
            updateCart=[...cartProduct];
            const index = cartProduct.findIndex((item) => 
            item.id === product.id);
            if (index > -1) {
               updateCart[index].quantity=
            ++updateCart[index].quantity           
         }

        setCartproduct(updateCart)
        localStorage.setItem('dhshopitem',JSON.stringify(updateCart))

        }

   },[cartProduct])
    const value= {
        cartTotalquantity,
        cartProduct,
        handleAddtocart,
    };

    return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
    const context = useContext(CartContext);

    if (context === null) {
        throw new Error("nhu con c");
    }

    return context;
};
