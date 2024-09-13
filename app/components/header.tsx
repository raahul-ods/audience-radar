import Image from 'next/image';
import React from 'react';
import RightArrow from '../icons/rightArrow';

const Header: React.FC = () => {
  return (
    <div className="w-full px-4 py-3 bg-white rounded-xl border border-[#f2f2f2] flex justify-between items-center">
      {/* Left Section */}
      <div className="relative">
        <Image 
          src="/images/AudienceRadarLogo.svg"
          alt="Description of the image"
          width={172} 
          height={26} />
      </div>
      
      {/* Right Section */}
      <div className="flex justify-start items-center gap-6">
        <div className="text-black text-sm font-medium font-inter leading-tight">Blogs</div>
        <div className="p-1 bg-[#55b271] rounded-md border border-[#55b271] flex justify-center items-center gap-2">
          <div className="px-0.5 flex justify-center items-center">
            <div className="text-white text-sm font-semibold font-inter leading-7">Try Goaudience</div>
          </div>
          <div className="flex justify-center items-center">
            <RightArrow color='#55b271'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
