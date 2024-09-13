import Image from 'next/image'
import React from 'react'


export interface InfoCardProps {
    mainText: string;
    subText: string;
  }

const InfoCard: React.FC<InfoCardProps> = ({ mainText, subText }) => {
  return (
    <div className="relative w-[368px] h-[168px] bg-[#55b271] rounded-xl overflow-hidden">
    {/* Background Image using CSS */}
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/InfoCardBG.svg)' }}></div>

    {/* Overlay Text */}
    <div className="relative z-[10] flex flex-col justify-center items-center h-full">
      <div className="text-center text-white text-[86px] font-bold font-inter leading-[101.42px]">{mainText}</div>
      <div className="text-center text-white text-2xl font-medium font-inter">{subText}</div>
    </div>
  </div>
  )
}

export default InfoCard