import React from 'react'

const ListingCard = () => {
  return (
    <div className="h-[133px] px-6 py-4 justify-center items-center gap-4 inline-flex">
    <div className="self-stretch justify-start items-start gap-4 flex">
        <div className="flex-col justify-start items-start gap-2 inline-flex">
            <div className="w-[738px] text-black text-lg font-bold font-['Inter'] leading-relaxed">{`RainBarrel > Public > United States of America > Frequent Visitors > Brand > Nike (EGUS93VBUKA)`}</div>
            <div className="h-10 pr-[145px] justify-start items-center inline-flex">
                <div className="w-[593px] text-[#909090] text-sm font-normal font-['Inter'] leading-tight">{`"Nike" provides a wide range of athletic footwear, apparel, equipment, and accessories for various sports and fitness activities.`}</div>
            </div>
        </div>
    </div>
</div>
  )
}

export default ListingCard