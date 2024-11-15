import Link from "next/link";
import Footerlist from "./Footerlist";
import Container from "../Container";
import { MdFacebook} from 'react-icons/md'
import {AiFillGithub,AiFillTwitterCircle ,AiFillAppstore, AiFillInstagram,AiFillFacebook} from "react-icons/ai"
import {SiZalo} from 'react-icons/si'

const Footer = () => {
    return (  
        <footer className="
        bg-slate-700
        text-slate-200
        text-sm 
        mt-16">
        <Container>
        <div className="
        flex
        flex-col
        md:flex-row
        justify-between
        pl-10
        pt-16
        pb-8">
        <Footerlist>
        <h3 className="
        text-base
        font-bold
        mb-2
        ">Shop DuyHoang</h3>
        <Link href='#'>Phones</Link>
        <Link href='#'>Laptops</Link>
        <Link href='#'>Desktops</Link>
        <Link href='#'>Watches</Link>
        <Link href='#'>Tvs</Link>
        <Link href='#'>Accessories</Link>
        </Footerlist>
        <Footerlist>
        <h3 className="
        text-base
        font-bold
        mb-2
        ">Customer Service</h3>
        <Link href='#'>Contact us</Link>
        <Link href='#'>Shipping Policy</Link>
        <Link href='#'>Return & Exchanges</Link>
        <Link href='#'>Watches</Link>
        <Link href='#'>FAQs</Link>
        
        </Footerlist>
        <div className="w-full
          md:w-1/3
          mb-6 
          md:mb-0">
       
        <h3 className="
        text-base
        font-bold
        mb-2
        ">About Us</h3>
        <p className="mb-2">Our store provides genuine,
         reputable, tested,
         and market-leading products.
         Hello customers
         duma ko bang dc a clm</p>
        <h2>Shop DH luon dong hanh cung ban</h2>
        </div>
        <Footerlist>
        <h3 className="
        text-base
        font-bold
        mb-4
        ">Follow Us</h3>
       <div className="flex gap-2">
       <Link href='#'>
        <AiFillGithub size ={25}/>
       </Link>
       <Link href='#'>
        <SiZalo size ={25}/>
       </Link>
       <Link href='#'>
        <MdFacebook size ={25}/>
       </Link>
       <Link href='#'>
        <AiFillInstagram size ={25}/>
       </Link>
       </div>
        </Footerlist>
       
        </div>
        </Container>
        </footer>
        
       ) }
        
        export default Footer;