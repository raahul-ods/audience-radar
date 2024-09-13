import React from 'react'

export const PrimaryButton = () => {
  return (
    <div className="h-[62px] px-[19px] py-[14.73px] bg-white rounded-[10.72px] shadow border border-[#55b271] justify-start items-center gap-[13.39px] inline-flex">
    <div className="text-center text-[#55b271] text-2xl font-semibold font-['Inter']">Export audience to meta</div>
</div>
  )
}

export const SecondaryButton = () => {
    return (
        <div className="h-[62px] px-6 py-[14.73px] bg-[#55b271] rounded-[10.72px] justify-center items-center gap-[13.39px] inline-flex">
    <div className="text-center text-white text-2xl font-semibold font-['Inter']">Mail full report</div>
</div>
    )
  }
