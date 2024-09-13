import React from 'react'

const GetStartedCard = () => {
  return (
    <div className="w-[1232px] h-[318px] relative bg-[#55b271] rounded-[18px]">
    <div className="h-[248px] left-[87px] top-[35px] absolute flex-col justify-start items-center gap-12 inline-flex">
        <div className="self-stretch h-[156px] flex-col justify-start items-center gap-2 flex">
            <div className="justify-start items-center gap-2 inline-flex">
                <div className="text-center text-white text-[42px] font-bold font-['Inter'] leading-[52px]">Built with</div>
                <div className="text-center text-white text-[40px] font-bold font-['Bricolage Grotesque'] uppercase leading-[52px]">🫶</div>
                <div className="text-center text-white text-[42px] font-bold font-['Inter'] leading-[52px]">by Experts at GoAudience</div>
            </div>
            <div className="w-[902px] text-center text-white text-xl font-normal font-['Inter'] leading-loose">GoAudience is an AI custom audience builder for meta ads with just one goal— providing enterprise grade targeting to those who don’t have access to it. Our platform help brands achieve profitable growth with benchmark-beating ROAS.</div>
        </div>
        <div className="flex-col justify-start items-center gap-[42px] flex">
            <div className="px-3 py-2 bg-white rounded-md border border-white justify-center items-center gap-2 inline-flex">
                <div className="px-0.5 justify-center items-center flex">
                    <div className="text-[#55b271] text-xl font-semibold font-['Inter'] leading-7">Get Started</div>
                </div>
                <div className="w-6 h-6 px-1 py-1.5 justify-center items-center flex" />
            </div>
        </div>
    </div>
</div>
  )
}

export default GetStartedCard