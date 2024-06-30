import React from 'react'
import Image from 'next/image'
const CompanySection = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between container mx-auto py-[60px]">
        <Image src={"/images/steps.png"} alt="steps" width={82} height={32}/>
        <Image src={"/images/mango.png"} alt="steps" width={82} height={32}/>
        <Image src={"/images/food.png"} alt="steps" width={82} height={32}/>
        <Image src={"/images/fooduk.png"} alt="steps" width={82} height={32}/>
        <Image src={"/images/bookoff.png"} alt="steps" width={82} height={32}/>
        <Image src={"/images/gseries.png"} alt="steps" width={82} height={32}/>
    </div> 
    </div>
  )
}

export {CompanySection}
