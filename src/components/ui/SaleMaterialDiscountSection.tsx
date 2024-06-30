import React from 'react'
import { SaleCard } from './SaleCard'
import { MaterialCard } from './MaterialCard'
import { DiscountCard } from './DiscountCard'

const SaleMaterialDiscountSection = () => {
  return (
    <section className="w-full">
      <div>
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <SaleCard />
            <MaterialCard />
            <DiscountCard />
          </div>
        </div>
      </div>
    </section>
  )
}

export {SaleMaterialDiscountSection}
