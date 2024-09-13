import React from 'react'

const PromotionBanner = () => {
  return (
    <div className="w-[1172px] h-[137px] p-9 bg-gradient-to-r from-[#55b271] to-[#75bb8a] rounded-[14px] justify-start items-start gap-[38px] inline-flex">
    <div className="justify-start items-start gap-7 flex">
        <div className="w-14 h-14 relative">
            <div className="w-[53.62px] h-[53.59px] left-[1.09px] top-[54.69px] absolute">
            </div>
        </div>
        <div className="h-[59px] relative">
            <div className="left-0 top-0 absolute text-center text-white text-xl font-medium font-['Inter']">Custom audience lets you cut to the chase and target better from the get go.</div>
            <div className="w-[355px] h-[25px] left-0 top-[34px] absolute">
                <div className="left-0 top-0 absolute text-center text-white text-xl font-medium font-['Inter']">Love this data?</div>
                <div className="h-6 left-[161px] top-[1px] absolute justify-start items-center gap-3 inline-flex">
                    <div className="text-center text-white text-xl font-bold font-['Inter']">Try GoAudience</div>
                    <div className="w-6 h-6 p-1 bg-white rounded justify-center items-center gap-[13.39px] flex">
                        <div className="w-6 h-6 relative" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default PromotionBanner