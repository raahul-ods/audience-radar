import React from 'react'

const Footer = () => {
  return (
    <div className="w-[1512px] h-[318px] pt-32 pb-[38px] bg-[#181818] flex-col justify-start items-center gap-6 inline-flex">
    <div className="w-[1232px] justify-between items-center inline-flex">
        <div className="w-[360px] flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch text-white text-lg font-bold font-['Inter'] leading-tight">Stay up to date</div>
            <div className="rounded-lg justify-start items-start gap-1.5 inline-flex">
                <div className="w-[360px] h-[52px] px-3.5 py-2.5 rounded-lg shadow border border-[#8b95ad] justify-start items-center gap-2 flex">
                    <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                        <div className="grow shrink basis-0 text-[#d6d6d6] text-base font-light font-['Inter'] leading-normal">Enter your email</div>
                    </div>
                </div>
                <div className="p-3 bg-[#55b271] rounded-lg justify-center items-center gap-2 flex">
                    <div className="px-0.5 justify-center items-center flex">
                        <div className="text-white text-lg font-bold font-['Inter'] leading-7">Submit</div>
                    </div>
                    <div className="w-6 h-6 px-1 py-1.5 justify-center items-center flex" />
                </div>
            </div>
        </div>
        <div className="w-[191.32px] h-[41.83px] relative">
            <div className="w-[41.83px] h-[41.83px] left-0 top-0 absolute">
                <div className="w-[41.83px] h-[41.83px] left-0 top-0 absolute bg-[#333333] rounded-full border border-[#494949]" />
                <div className="w-[17.93px] h-[17.93px] left-[11.95px] top-[11.95px] absolute" />
            </div>
            <div className="w-[41.83px] h-[41.83px] left-[149.49px] top-0 absolute">
                <div className="w-[41.83px] h-[41.83px] left-0 top-0 absolute bg-[#333333] rounded-full border border-[#494949]" />
                <div className="w-[17.93px] h-[17.93px] left-[11.95px] top-[11.95px] absolute" />
            </div>
            <div className="w-[41.83px] h-[41.83px] left-[99.66px] top-0 absolute">
                <div className="w-[41.83px] h-[41.83px] left-0 top-0 absolute bg-[#333333] rounded-full border border-[#494949]" />
                <div className="w-[17.93px] h-[17.93px] left-[11.95px] top-[11.95px] absolute" />
            </div>
            <div className="w-[41.83px] h-[41.83px] left-[49.83px] top-0 absolute">
                <div className="w-[41.83px] h-[41.83px] left-0 top-0 absolute bg-[#333333] rounded-full border border-[#494949]" />
                <div className="w-[19px] h-5 left-[11.49px] top-[10.92px] absolute" />
            </div>
        </div>
    </div>
    <div className="h-10 flex-col justify-start items-start gap-4 flex">
        <div className="self-stretch pt-4 border-t border-[#8b95ad] justify-between items-center inline-flex">
            <div className="text-white text-base font-light font-['Inter'] leading-normal">© 2024 GoAudience. All rights reserved.</div>
            <div className="justify-start items-start gap-4 flex">
                <div className="text-white text-base font-light font-['Inter'] leading-normal">Terms</div>
                <div className="text-white text-base font-light font-['Inter'] leading-normal">Privacy</div>
                <div className="text-white text-base font-light font-['Inter'] leading-normal">Cookies</div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Footer