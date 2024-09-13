"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  fetchAudiences,
  AudienceResponse,
} from "../../services/recomend-audience";
import SearchBar from "../components/searchbar";
import Header from "../components/header";
import RightArrow from "../icons/rightArrow";

const Home: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [audiences, setAudiences] = useState<AudienceResponse[]>();
  const [click, setClick] = useState<Number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  // const router =  useRouter();

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

  const cards = () => {
    if (loading && !searchText) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    if (!!audiences && !audiences.length && !searchText) {
      return <div>No results found for {searchText}.</div>;
    }

    console.log(audiences);

    return (
      <div>
        <h2 style={{ padding: "50px" }}>Results for {searchText}:</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            padding: "50px",
          }}
        >
          {!!audiences &&
            audiences.map((audience) => (
              <div
                key={audience.id}
                style={{
                  border: "1px solid #ccc",
                  padding: "16px",
                  borderRadius: "8px",
                  width: "300px",
                }}
              >
                <h3>{audience.name}</h3>
                <p>{audience.description}</p>
                <p>
                  <strong>Provider:</strong> {audience.provider}
                </p>
                <p>
                  <strong>Records:</strong> {audience.records}
                </p>
                <p>
                  <strong>Score:</strong> {audience.score}
                </p>
              </div>
            ))}
        </div>
      </div>
    );
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchText.trim()) {
      alert(searchText.trim());
      getAudiences(searchText);
      // router.push(`/list?query=${encodeURIComponent(searchText)}`);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "50px",
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
              <div className="w-full py-10 relative bg-gradient-to-r from-[#55b27160] to-[#55b26f] rounded-[18px] flex flex-col items-center justify-center">
                {/* <div className="absolute w-full flex justify-between top-[151px]">
                  <div className="w-[800.13px] h-[800.13px] left-[-738px] top-[151px]   rotate-[30deg] bg-[#55b271] rounded-full shadow-md border-2 border-[#99d6ac] overflow-hidden" />
                  <div className="w-[800.13px] h-[800.13px] left-[735px]  rotate-[-30deg] bg-[#55b271] rounded-full shadow border-2 border-[#99d6ac]" />
                </div> */}
                <div className="relative w-[80%]">
                  <div className="w-full">
                    <SearchBar />
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
                  Find out the true power of your brand with meta ads. Search to
                  find custom audience segments for free and use GoAudiencce to
                  export it to meta.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
        </div>
      </section>

      {!!audiences && <div style={{ marginTop: "24px" }}>{cards()}</div>}
    </div>
  );
};

export default Home;
