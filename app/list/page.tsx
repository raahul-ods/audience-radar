"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  fetchAudiences,
  AudienceResponse,
} from "../../services/recomend-audience";
import Header from "../components/header";
import SearchBar from "../components/searchbar";
import ListingCard from "../components/listingCard";
import { SpinnerLoader } from "../components/loader";

const ResultsContent: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [audiences, setAudiences] = useState<AudienceResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [query, setQuery] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const query = searchParams.get("query");
    setQuery(query);
    if (query) {
      const getAudiences = async () => {
        try {
          const data = await fetchAudiences(query);
          if (data.audiences && data.audiences.length > 0) {
            setAudiences(data.audiences);
          }
        } catch (error) {
          setError("Failed to fetch audiences");
          console.error("Error:", error);
        } finally {
          setLoading(false);
        }
      };

      getAudiences();
    } else {
      setLoading(false);
    }
  }, [searchParams]);

  const getAudiences = async (query: string) => {
    setLoading(true);
    try {
      const data = await fetchAudiences(query);
      if (data.audiences && data.audiences.length > 0) {
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
    if (query) {
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
                    <SearchBar
                      searchQuery={query}
                      setSearchQuery={setQuery}
                      cta={handleSearch}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center w-full mt-[100px]">
          <div className="w-[85%]">
            <div className="w-full p-8 relative bg-white rounded-lg shadow border-2 border-[#f2f1f1] h-[60vh] overflow-scroll">
              {!loading ? (
                <div className="flex-col justify-start items-start gap-4 inline-flex">
                  {audiences.map((item, index) => (
                    <div key={index} className="w-full">
                      <ListingCard {...item} />
                    </div>
                  ))}
                </div>
              ) : (
                <SpinnerLoader />
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const Results: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultsContent />
    </Suspense>
  );
};

export default Results;
