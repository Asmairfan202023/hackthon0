import Image from "next/image";

export default function BlowHero(){
    return (
        <>
     <div className="showBlowBar w-[100%] h-[4rem] bg-[#F9F1E7]" >
        <div>
        <Image src="/filter.png" width={30} height={50} alt="Picture of the author" />
            <p>Filter</p>


            <p>| Showing 1–16 of 32 results</p>
        </div>



        <div>
            <p>Show</p>
            {/* <div > 16</div> */}
            
            </div>
            <input className="w-[2.5rem] h-[2.5rem] bg-black text-white text-center self-center" type="text" placeholder="16" name="" id="" />
            <p>Short by</p>
            <input className="w-[8rem] h-[2.5rem] bg-black text-white text-center self-center" type="text" placeholder="16" name="" id="" />
              </div>
        </>
    )
}