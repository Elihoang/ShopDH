
import Container from "./components/Container";
import Homebanner from "./components/nav/Homebanner";
import { products } from "@/utils/products";
import { truncateText } from "@/utils/truncateText";
import Productcard from "./components/products/ProductCard";


export default function Home(){
    return (
    <div className="p-10">
        <Container>
            <div>
                <Homebanner />
            </div>
            <div className="
            grid grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8">
                {products.map ((product: any) => {
                return <Productcard key={product.id} data={product}/>;
                })}
                </div>
        </Container>
    </div>
    )
}