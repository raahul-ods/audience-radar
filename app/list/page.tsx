"use client";

import { useEffect, useState } from "react";
import { useRouter,useSearchParams } from 'next/navigation'
import {
  fetchAudiences,
  AudienceResponse,
} from "../../services/recomend-audience";
import Header from "../components/header";
import SearchBar from "../components/searchbar";
import ListingCard from "../components/listingCard";
import { Router } from "next/router";
import { SpinnerLoader } from "../components/loader";

const Results: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [audiences, setAudiences] = useState<AudienceResponse[]>([
    {
      id: "616884",
      score: "1",
      name: "Quorum > Causal iQ Quest Diagnostics",
      description: "Quest Diagnostics audience - Never Expire",
      records: "2800000",
      provider: "Quorum",
    },
    {
      id: "603647",
      score: "1",
      name: "PeoplefindersDaaS > B2B > Company Name > M-Q > QUEST DIAGNOSTICS",
      description:
        "Individuals who likely work at QUEST DIAGNOSTICS. PeoplefindersDaaS is High Performing Data and sources data from more than 700 deterministic data sources. 50B data records, describing 300M+ unique individuals and 31M+ companies in the United States. Over 20 Contact Data Fields (e.g. Personal Email, Mobile Phone, Work Phone, Work Address etc.) are utilized to improve accuracy.",
      records: "39000",
      provider: "PeoplefindersDaaS",
    },
    {
      id: "392944",
      score: "1",
      name: "123Push > Optimized for CTV > Auto Owners > Nissan > Nissan Quest",
      description:
        "30 day full data refresh: Individuals who own a(n) Nissan Quest. Stirista has 135 million unique VIN numbers linked to consumer contact data from transactional sources including insurance, warranty, and service providers.",
      records: "110000",
      provider: "123Push",
    },
    {
      id: "619886",
      score: "1",
      name: "Quorum > QL - ATT - 1.50 L30",
      description:
        "This audience is comprised of MAIDS (mobile ad IDs) found at AT&T locations in the past 30 days.",
      records: "210000",
      provider: "Quorum",
    },
    {
      id: "619883",
      score: "1",
      name: "Quorum > QL - AT&T - 1.15 L30",
      description:
        "This audience is comprised of MAIDS (mobile ad IDs) found at AT&T locations in the past 30 days.",
      records: "210000",
      provider: "Quorum",
    },
    {
      id: "392660",
      score: "1",
      name: "123Push > Optimized for CTV > Auto Owners > Infiniti Series > Infiniti QX Series",
      description:
        "30 day full data refresh: Individuals who own a(n) Infiniti QX Series. Stirista has 135 million unique VIN numbers linked to consumer contact data from transactional sources including insurance, warranty, and service providers.",
      records: "100000",
      provider: "123Push",
    },
    {
      id: "621831",
      score: "1",
      name: "Quotient > QTA_ABSCO_MxcnFoodByers_ABSCO B&G Ortega Social Display Q4 2021_09.10.21_LR",
      description:
        "QTA_ABSCO_MxcnFoodByers_ABSCO B&G Ortega Social Display Q4 2021_09.10.21_LR",
      records: "41000000",
      provider: "Quotient",
    },
    {
      id: "653432",
      score: "2",
      name: "Skydeo > PlacesGraph > Quest Diagnostics",
      description:
        "Quest Diagnostics visitors based on geo-location data. Keywords: Health & Wellness, lab testing sites, quest diagnostics.",
      records: "1000000",
      provider: "Skydeo",
    },
    {
      id: "619884",
      score: "2",
      name: "Quorum > QL - AT&T - 1.15 L60",
      description:
        "This audience is comprised of MAIDS (mobile ad IDs) found at AT&T locations in the past 60 days.",
      records: "210000",
      provider: "Quorum",
    },
    {
      id: "619887",
      score: "2",
      name: "Quorum > QL - ATT - 1.50 L60",
      description:
        "This audience is comprised of MAIDS (mobile ad IDs) found at AT&T locations in the past 60 days.",
      records: "210000",
      provider: "Quorum",
    },
    {
      id: "617680",
      score: "2",
      name: "Quorum > DI_C_#1_Cochran_Chevrolet",
      description:
        "This is a Quorum automotive conquest audience that was custom built for this client.",
      records: "33000",
      provider: "Quorum",
    },
    {
      id: "617780",
      score: "2",
      name: "Quorum > DI_C_Walser_Subaru",
      description:
        "This is a Quorum automotive conquest audience that was custom built for this client.",
      records: "29000",
      provider: "Quorum",
    },
    {
      id: "617692",
      score: "2",
      name: "Quorum > DI_C_Aston_Martin_Houston",
      description:
        "This is a Quorum automotive conquest audience that was custom built for this client.",
      records: "100000",
      provider: "Quorum",
    },
    {
      id: "617762",
      score: "2",
      name: "Quorum > DI_C_Vision_Buick_GMC",
      description:
        "This is a Quorum automotive conquest audience that was custom built for this client.",
      records: "16000",
      provider: "Quorum",
    },
    {
      id: "617688",
      score: "2",
      name: "Quorum > DI_C_#1_Cochran_Nissan_Cranberry",
      description:
        "This is a Quorum automotive conquest audience that was custom built for this client.",
      records: "33000",
      provider: "Quorum",
    },
    {
      id: "617716",
      score: "2",
      name: "Quorum > DI_C_Jim_Ellis_Commercial_Test",
      description:
        "This is a Quorum automotive conquest audience that was custom built for this client.",
      records: "8000",
      provider: "Quorum",
    },
    {
      id: "617766",
      score: "2",
      name: "Quorum > DI_C_Vision_Kia_East_Rochester",
      description:
        "This is a Quorum automotive conquest audience that was custom built for this client.",
      records: "15000",
      provider: "Quorum",
    },
    {
      id: "617705",
      score: "2",
      name: "Quorum > DI_C_Crest_Volvo",
      description:
        "This is a Quorum automotive conquest audience that was custom built for this client.",
      records: "75000",
      provider: "Quorum",
    },
    {
      id: "617723",
      score: "2",
      name: "Quorum > DI_C_Lawrence_Kia",
      description:
        "This is a Quorum automotive conquest audience that was custom built for this client.",
      records: "44000",
      provider: "Quorum",
    },
    {
      id: "621666",
      score: "2",
      name: "Quorum > Viacom EyeQ GST Conquest > Never Expire",
      description: "GST competitor dealership visitors that never expire.",
      records: "730000",
      provider: "Quorum",
    },
    {
      id: "617748",
      score: "2",
      name: "Quorum > DI_C_Southern_Team_Subaru",
      description:
        "This is a Quorum automotive conquest audience that was custom built for this client.",
      records: "9600",
      provider: "Quorum",
    },
    {
      id: "617761",
      score: "2",
      name: "Quorum > DI_C_Victory_Mitsubishi",
      description:
        "This is a Quorum automotive conquest audience that was custom built for this client.",
      records: "17000",
      provider: "Quorum",
    },
    {
      id: "621680",
      score: "2",
      name: "Quorum > Viacom EyeQ HEB Super Segment > 60 Days",
      description: "HEB super segment visitors in the last 60 days.",
      records: "4700000",
      provider: "Quorum",
    },
    {
      id: "621677",
      score: "2",
      name: "Quorum > Viacom EyeQ HEB Retargeting > 90 Days",
      description: "HEB grocery store visitors in the last 90 days.",
      records: "1300000",
      provider: "Quorum",
    },
    {
      id: "617704",
      score: "2",
      name: "Quorum > DI_C_Crest_Nissan",
      description:
        "This is a Quorum automotive conquest audience that was custom built for this client.",
      records: "75000",
      provider: "Quorum",
    },
    {
      id: "617699",
      score: "2",
      name: "Quorum > DI_C_Calavan_CDJR",
      description:
        "This is a Quorum automotive conquest audience that was custom built for this client.",
      records: "100000",
      provider: "Quorum",
    },
    {
      id: "465789",
      score: "3",
      name: "AtoZ Special Offers > Consumers > Online Interests & Buyers > Seeq.com",
      description:
        "Seeq.com. AtoZ Special Offers - Behavioral Data for People based Marketing. Predictive Audience. Keywords: Seeq.com, credit card, consumer, shopping, online shopping, social media, social network, online brands, consumer data, purchase",
      records: "5500",
      provider: "IT Vendor Central",
    },
    {
      id: "619888",
      score: "3",
      name: "Quorum > QL - ATT - 1.50 L90",
      description:
        "This audience is comprised of MAIDS (mobile ad IDs) found at AT&T locations in the past 90 days.",
      records: "210000",
      provider: "Quorum",
    },
    {
      id: "619885",
      score: "3",
      name: "Quorum > QL - AT&T - 1.15 L90",
      description:
        "This audience is comprised of MAIDS (mobile ad IDs) found at AT&T locations in the past 90 days.",
      records: "210000",
      provider: "Quorum",
    },
    {
      id: "619546",
      score: "3",
      name: "Quorum > OBS_Ruby_Tuesday_Conquest",
      description: "Visited Restaurant within Last 90 Days",
      records: "1000000",
      provider: "Quorum",
    },
    {
      id: "616854",
      score: "3",
      name: "Quorum > Causal iQ Lowes",
      description: "Lowes Audience - Never Expire",
      records: "34000000",
      provider: "Quorum",
    },
    {
      id: "706470",
      score: "3",
      name: "Quorum > SEMCasting - Kensington Tours > 0.30 > Last 90 Days",
      description:
        "Audience consists of Mobile Ad Ids collected at affinity/competitor locations",
      records: "12000000",
      provider: "Quorum",
    },
    {
      id: "617888",
      score: "3",
      name: "Quorum > Fitness  > Planet Fitenss   Visitors L30",
      description:
        "Visitors of  2,030+  Planet Fitenss  across the US. Mobile Location Data Optimized for maximum ecommerce ROAS, refreshed daily.",
      records: "280000",
      provider: "Quorum",
    },
    {
      id: "619893",
      score: "3",
      name: "Quorum > QL - Beaches - 1.50 L60",
      description:
        "This audience is comprised of MAIDS (mobile ad IDs) found at beaches in the past 60 days.",
      records: "33000",
      provider: "Quorum",
    },
    {
      id: "621681",
      score: "3",
      name: "Quorum > Viacom EyeQ HEB Super Segment > 90 Days",
      description: "HEB super segment visitors in the last 90 days.",
      records: "4700000",
      provider: "Quorum",
    },
    {
      id: "621665",
      score: "3",
      name: "Quorum > Viacom EyeQ GST Conquest > 90 Days",
      description:
        "GST competitor dealership visitors that expire every 90 days.",
      records: "440000",
      provider: "Quorum",
    },
    {
      id: "405475",
      score: "4",
      name: "Aberdeen_SF > Technology In Use > Sales > Other Sales Software > Qvidian",
      description:
        "Individuals working at companies using Qvidian technology.  Technology installed data sourcing includes online surveys, call centers, and web mining of job boards, 10k reports, articles, blogs, social, 30 years of historical data, and content clicks/downloads.",
      records: "2000000",
      provider: "Aberdeen_SF",
    },
    {
      id: "816837",
      score: "4",
      name: "Hattrick Data > B2B --> Company Name --> M-Q --> Quest Diagnostics",
      description:
        "People who likely work at Quest Diagnostics. Hat Trick Data is a B2B-focused data marketplace, delivering custom and syndicated data solutions for the Adtech ecosystem.  Data solutions are developed using deterministic data sources and matched to the unique individual level (versus household) to ensure accuracy in marketing campaigns.",
      records: "44000",
      provider: "Hattrick Data",
    },
    {
      id: "465558",
      score: "4",
      name: "AtoZ Special Offers > Consumers > Online Interests & Buyers > Re-Quest.net",
      description:
        "Re-Quest.net. AtoZ Special Offers - Behavioral Data for People based Marketing. Predictive Audience. Keywords: Re-Quest.net, credit card, consumer, shopping, online shopping, social media, social network, online brands, consumer data, purchase",
      records: "660",
      provider: "IT Vendor Central",
    },
    {
      id: "465510",
      score: "4",
      name: "AtoZ Special Offers > Consumers > Online Interests & Buyers > Qv500.com",
      description:
        "Qv500.com. AtoZ Special Offers - Behavioral Data for People based Marketing. Predictive Audience. Keywords: Qv500.com, credit card, consumer, shopping, online shopping, social media, social network, online brands, consumer data, purchase",
      records: "1900",
      provider: "IT Vendor Central",
    },
    {
      id: "468076",
      score: "4",
      name: "AtoZ Special Offers > Consumers > Online Shoppers Interests > Quest4Deals.com",
      description:
        "Quest4Deals.com. AtoZ Special Offers - Behavioral Data for People based Marketing. Predictive Audience. Keywords: Quest4Deals.com, credit card, consumer, shopping, online shopping, social media, social network, online brands, consumer data, purchase",
      records: "29000",
      provider: "IT Vendor Central",
    },
    {
      id: "617759",
      score: "4",
      name: "Quorum > DI_C_Van_Chevrolet",
      description:
        "This is a Quorum automotive conquest audience that was custom built for this client.",
      records: "50000",
      provider: "Quorum",
    },
    {
      id: "617783",
      score: "4",
      name: "Quorum > DI_C_Westway_Ford",
      description:
        "This is a Quorum automotive conquest audience that was custom built for this client.",
      records: "77000",
      provider: "Quorum",
    },
    {
      id: "617765",
      score: "4",
      name: "Quorum > DI_C_Vision_Hyundai_Webster",
      description:
        "This is a Quorum automotive conquest audience that was custom built for this client.",
      records: "15000",
      provider: "Quorum",
    },
    {
      id: "476459",
      score: "4",
      name: "BrightQuery > US > SmallBatchTest > Test",
      description:
        "This is a test segment. Please do not request this segment in the marketplace.",
      records: "290",
      provider: "BrightQuery",
    },
    {
      id: "620017",
      score: "4",
      name: "Quorum > QRM Custom Personal Care For HRST 001",
      description: "Custom audience for HRST related to personal care.",
      records: "1200000",
      provider: "Quorum",
    },
    {
      id: "717981",
      score: "4",
      name: "Quotient > QTA_Health-Beauty-Care_Q274474_Hbl_02.29.24 > 1",
      description: "",
      records: "31000000",
      provider: "Quotient",
    },
    {
      id: "616885",
      score: "5",
      name: "Quorum > Causal iQ Quest Diagnostics_90 days",
      description:
        "MAIDs captured in Medical Buildings and Hospitals within the last 90 days",
      records: "120000",
      provider: "Quorum",
    },
    {
      id: "620025",
      score: "5",
      name: "Quorum > QSR > Buffalo Wild Wings L30",
      description: "",
      records: "24000",
      provider: "Quorum",
    },
    {
      id: "620315",
      score: "5",
      name: "Quorum > Quorum Best Practices Koons Kia Owings Mills",
      description: "Conquest best practices.",
      records: "77000",
      provider: "Quorum",
    },
  ]);
  //   const [audiences, setAudiences] = useState<AudienceResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [query, setQuery] = useState<string | null>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
      const query = searchParams.get("query")
      setQuery(query)
      if (query) {
          const getAudiences = async () => {
              try {
                  const data = await fetchAudiences(query);
                  if(!!data.audiences && data.audiences.length >0){
                    setAudiences(data.audiences);
                  }
              } catch (error) {
                  setError('Failed to fetch audiences');
                  console.error('Error:', error);
              } finally {
                  setLoading(false);
              }
          };

          getAudiences();
      } else {
          setLoading(false);
      }
  }, []);

  // if (loading) {
  //     return <div>Loading...</div>;
  // }

  // if (error) {
  //     return <div>{error}</div>;
  // }

  // if (!audiences.length) {
  //     return <div>No results found.</div>;
  // }

  const getAudiences = async (query: string) => {
    setLoading(true)
    try {
      const data = await fetchAudiences(query);
      console.log(data.audiences);
      if(!!data.audiences && data.audiences.length >0){
        setAudiences(data.audiences);
      }
    } catch (error) {
      setError("Failed to fetch audiences");
      setAudiences([]);
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleSearch = () => {
    if (!!query) {
      alert(query.trim());
      getAudiences(query);
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "50px",
          paddingBottom: "0px",
        }}
      >
        <Header />
        <section className="flex items-center justify-center w-full mt-[100px]">
          <div className="w-[70%]">
            <div className="w-full text-center text-black text-[68px] font-bold font-inter leading-[87px]">
              Your Meta ad custom audience is a search away
            </div>
            <div className="mt-[60px]">
              <div>
                <div
                  className="w-full py-10 relative rounded-[18px] flex flex-col items-center justify-center"
                  style={{
                    backgroundImage: "url(/images/SearchBG.svg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="relative w-[80%]">
                    <div className="w-full">
                      <SearchBar searchQuery={query} setSearchQuery={setQuery} cta={handleSearch} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center w-full mt-[100px]">
          <div className="w-[85%]">
            <div className="w-full p-8 relative bg-white rounded-lg shadow border-2 border-[#f2f1f1] h-[60vh] overflow-scroll">
              {!loading ? <div className="flex-col justify-start items-start gap-4 inline-flex">
                {audiences.map((item, index) => (
                  <div key={index} className="w-full">
                    <ListingCard {...item} />
                  </div>
                ))}
              </div> : <SpinnerLoader/>}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Results;
