'use client'

// Ensure that the correct naming convention is used in the import statement
import { CartContextProvider } from "@/hooks/useCart";

interface CartProviderProps {
    children: React.ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    return (
        <CartContextProvider>
            {children}
        </CartContextProvider>
    );
}

export default CartProvider;
