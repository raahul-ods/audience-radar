import { AudienceResponse } from "@/services/recomend-audience";
import React from "react";

const ListingCard: React.FC<AudienceResponse> = ({
  id,
  score,
  name,
  description,
  records,
  provider,
}) => {
  return (
    <div className="bg-white w-full relative rounded-xl shadow border-2 justify-between items-center inline-flex">
      <div className="w-[65%] flex-col justify-start items-start inline-flex">
        <div className="w-full self-stretch px-6 py-4 justify-start items-center gap-4 inline-flex">
          <div className="self-stretch justify-start items-start gap-4 flex">
            <div className="flex-col justify-start items-start gap-2 inline-flex">
              <div className="w-full text-black text-lg font-bold font-inter leading-relaxed">
                {name}
              </div>
              <div className="pr-[145px] justify-start items-center inline-flex">
                <div className="w-full text-[#909090] text-sm font-normal font-inter leading-tight truncate-multiline">
                  {description.substring(0, 140)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-start items-center flex">
        <div className="w-[197px] px-6 py-4 justify-center items-center gap-3 flex">
          <div className="text-black text-base font-bold font-inter leading-tight">
            {provider}
          </div>
        </div>
        <div className="w-[154px] px-6 py-4 justify-center items-center flex">
          <div className="text-black text-base font-bold font-inter leading-tight">
            {records}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
