import Image from "next/image";
import { Heading } from './_components/Heading'
import { Heros } from "./_components/Heros";
import { Footer } from "./_components/Footer";

const MarketingLanding = () => {
  return(
    <div className="flex flex-col items-center">
      <div>
         <Heading/>
         <Heros/>
         <Footer/>
      </div>
    </div>

  )
}

export default MarketingLanding;