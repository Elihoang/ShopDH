import Image from "next/image";

const Homebanner = () => {
    return ( 
        <div className="relative
        bg-gradient-to-r
        mt-2
        ml-2
        mr-2
        bg-teal-500
        to-teal-700
        mb-8">
             <div className="mx-auto
             px-2 py-2
             flex flex-col
             gap-2 
             md:flex-row
             items-center
             justify-evenly">
                <div className="mb-8 md:mb-0 text-center">
                    <h1 className="text-4xl
                    md:text-6xl
                    font-bold
                    text-white 
                    mb-4">Flast sale 18/12</h1>

                    <p className="text-lg
                    md:text-xl
                    text-white 
                    mb-2
                    ">hang ton kho</p>

                    <p className="text-2xl
                    md:text-5xl
                    text-red-400
                    font-bold
                    "> ko nen mua</p>
                   </div>
                <div className="w-1/3
                relative
                aspect-video">
                    <Image 
                      src='/R.png'
                      fill
                      alt="Banner Image"
                      className="object-contain"/>
                  </div>
                </div>
            </div>
     );
}
 
export default Homebanner;