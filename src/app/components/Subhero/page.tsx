import Image from "next/image"
// import Dining from "@/Pictures/dining.png"
// import Living from "@/Pictures/living.png" 
// import Bedroom from "@/Pictures/bedroom.png" 
export default function SubHero(){

    return (
        <>
        <div className="subText">
            <h3> Browse The Range</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="imgArea">
            <div className="imgOne">

            <Image src="/dining.png" width={282} height={480} alt="Picture of the author" />
                <h6>Dining</h6>
            </div>
                

            <div className="imgTow">
            <Image src="/living.png" width={282} height={480} alt="Picture of the author" />
            <h6>Living</h6>
            </div>
            
            <div className="imgThree">

            <Image src="/bedroom.png" width={282} height={480}  alt="Picture of the author" />
            <h6>Bedroom</h6>    
            </div>
           </div>

        </>
    )
}