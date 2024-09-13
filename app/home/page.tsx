"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  fetchAudiences,
  AudienceResponse,
} from "../../services/recomend-audience";
import SearchBar from "../components/searchbar";
import Header from "../components/header";
import RightArrow from "../icons/rightArrow";
import InfoCard, { InfoCardProps } from "../components/infoCard";
import TestimonialCard, {
  TestimonialCardProps,
} from "../components/testimonialCard";
import Footer from "../components/footer";
import GetStartedCard from "../components/getStartedCard";

const Home: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [audiences, setAudiences] = useState<AudienceResponse[]>();
  const [click, setClick] = useState<Number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState<string | null>("");

  const router = useRouter()

  const [showMainSearch, setShowMainSearch] = useState(true);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      console.log(elementRef.current);
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        console.log(`rect top - ${rect.top}, rect bottom - ${rect.bottom}`);
        // Change visibility based on element's position
        if (rect.bottom < 0) {
          setShowMainSearch(false);
        } else {
          setShowMainSearch(true);
        }
      }
    };

    // Set up event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const infoCards: InfoCardProps[] = [
    { mainText: "400+", subText: "Data sources" },
    { mainText: "23M", subText: "Custom Audiences" },
    { mainText: "32", subText: "Brands powered" },
  ];

  const testimonialCards: TestimonialCardProps[] = [
    {
      mainText:
        "We started seeing success with GoAudience within the first 3 weeks of using it for our client Health Direct in their new product launch. The client's CPM's have decreased by over 50%, our ROAS has improved by 144%. Needless to say we and the client are very happy with our decision to work with GoAudience.",
      profileImage: "/images/Mikhail.svg",
      position: "CEO at Blue Light Media",
      name: "Mikhail Alfon",
    },
    {
      mainText:
        "We started seeing success with GoAudience within the first 3 weeks of using it for our client Health Direct in their new product launch. The client's CPM's have decreased by over 50%, our ROAS has improved by 144%. Needless to say we and the client are very happy with our decision to work with GoAudience.",
      profileImage: "/images/Mikhail.svg",
      position: "CEO at Blue Light Media",
      name: "Mikhail Alfon",
    },
    {
      mainText:
        "We started seeing success with GoAudience within the first 3 weeks of using it for our client Health Direct in their new product launch. The client's CPM's have decreased by over 50%, our ROAS has improved by 144%. Needless to say we and the client are very happy with our decision to work with GoAudience.",
      profileImage: "/images/Mikhail.svg",
      position: "CEO at Blue Light Media",
      name: "Mikhail Alfon",
    },
  ];

  const getAudiences = async (query: string) => {
    try {
      const data = await fetchAudiences(query);
      console.log(data.audiences);
      setAudiences(data.audiences);
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
      // getAudiences(query);
      router.push(`/list?query=${encodeURIComponent(query)}`);
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
          <div className="w-3/4">
            <div className="w-full mb-[60px]">
              <div className="w-full text-center text-black text-[64px] font-bold font-inter leading-[70px]">
                The perfect custom audience for your Meta ads is a search away
              </div>
              <div className="text-center text-black text-lg font-light font-inter mt-3">
                Find custom audience segments with our proprietary AI audience
                builder for free.
                <br />
                Just paste your domain URL and you’re all set!
              </div>
            </div>
            <div>
              <div>
                <div
                  ref={elementRef}
                  className="w-full py-10 relative rounded-[18px] flex flex-col items-center justify-center"
                  style={{
                    backgroundImage: "url(/images/SearchBG.svg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* <div className="absolute w-full flex justify-between top-[151px]">
                  <div className="w-[800.13px] h-[800.13px] left-[-738px] top-[151px]   rotate-[30deg] bg-[#55b271] rounded-full shadow-md border-2 border-[#99d6ac] overflow-hidden" />
                  <div className="w-[800.13px] h-[800.13px] left-[735px]  rotate-[-30deg] bg-[#55b271] rounded-full shadow border-2 border-[#99d6ac]" />
                </div> */}
                  <div className="relative w-[80%]">
                    <div className="w-full">
                      <SearchBar searchQuery={query} setSearchQuery={setQuery} cta={handleSearch}/>
                      <div className="p-1 bg-[#e1f1e6] rounded-md border mt-[-4px] float-right mr-4 justify-center items-center gap-2 inline-flex">
                        <div className="px-0.5 justify-center items-center flex">
                          <div className="text-[#55b271] text-base font-semibold font-inter leading-7">
                            Not sure?
                          </div>
                        </div>
                        <RightArrow strokeWidth="4" color="#55b271" />
                      </div>
                    </div>
                  </div>

                  <div className="w-[80%] mt-12 text-center text-white text-lg font-normal font-inter leading-7">
                    Find out the true power of your brand with meta ads. Search
                    to find custom audience segments for free and use
                    GoAudiencce to export it to meta.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {!showMainSearch && (
          <section
            className="fixed bottom-[-8px] w-[80vw] rounded-xl p-6 z-50 bg-gradient-to-r from-[#55b271] to-[#55b26f]"
            style={{
              backgroundImage: "url(/images/SearchBG.svg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <SearchBar searchQuery={query} setSearchQuery={setQuery} cta={handleSearch} />
          </section>
        )}

        <section className="flex items-center justify-center w-full mt-[120px]">
          <div className="w-3/4">
            <div className="text-center">
              <span className="text-black text-[42px] font-bold font-inter">
                Find from millions in less than 30
              </span>
              <span className="text-black text-[32px] font-bold font-inter">
                secs
              </span>
            </div>
            <div className="flex gap-8 items-center justify-center mt-8">
              {infoCards.map((item, index) => (
                <div key={index}>
                  <InfoCard mainText={item.mainText} subText={item.subText} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center w-full mt-[120px]">
          <div className="w-3/4">
            <div className="w-full">
              <div className="w-full text-center text-black text-[42px] font-bold font-inter">
                Here’s what our customer’s have to say!
              </div>
            </div>
            <div className="w-full flex gap-8 items-center justify-center mt-[60px]">
              {testimonialCards.map((item, index) => (
                <div key={index}>
                  <TestimonialCard
                    position={item.position}
                    profileImage={item.profileImage}
                    name={item.name}
                    mainText={item.mainText}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <section>
        <div className="relative w-full mt-[4vh]">
          <div
            style={{
              width: "100%",
              height: "40vh",
              background: "linear-gradient(to bottom, white 50%, #181818 50%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              textAlign: "center",
              padding: "20px", // Adjust padding as needed
            }}
          >
            <div className="w-[70%]">
              <GetStartedCard />
            </div>
          </div>
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Home;
