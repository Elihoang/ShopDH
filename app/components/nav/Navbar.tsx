import Link from "next/link"

import { Redressed } from "next/font/google"
import Container from "../Container"

const redressed =Redressed({ subsets :['latin'], weight:['400']})
const Navbar =()=>{
    return (
        <div className="
        sticky 
        top-0
        w-full
        bg-slate-200
        z-30
        shadow-sm
        ">
            <div className="
            py-4 
            boder-b-1px">
              <Container>
                    <div className="
                    flex
                    items-center
                    justify-between
                    gap-3
                    md-gap-0
                    ">
                        <Link href='/' className={`${redressed.className}
                        font-bold text-2xl`}>DH-Shop</Link>
                    <div className=" hidden md:block">Sreach</div>
                    <div className="
                    flex 
                    items-center
                    gap-8">
                        <div>CartCount</div>
                        <div>UserMenu</div>
                    </div>
                  </div>
                  </Container>
            </div>
        </div>

    )
}

export default Navbar