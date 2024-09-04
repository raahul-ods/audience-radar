"use client";


import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchAudiences, AudienceResponse } from '../../services/recomend-audience';

const Home: React.FC = () => {
    const [searchText, setSearchText] = useState<string>('');
    const [audiences, setAudiences] = useState<AudienceResponse[]>();
    const [click, setClick] = useState<Number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    // const router =  useRouter();

    const getAudiences = async (query: string) => {
      try {
          const data = await fetchAudiences(query);
          console.log(data.audiences)
          setAudiences(data.audiences);
      } catch (error) {
          setError('Failed to fetch audiences');
          setAudiences([])
          console.error('Error:', error);
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

  console.log(audiences)

  return (
    <div><h2 style={{  padding: '50px' }}>Results for {searchText}:</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', padding: '50px' }}>
          {!!audiences && audiences.map((audience) => (
              <div key={audience.id} style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', width: '300px' }}>
                  <h3>{audience.name}</h3>
                  <p>{audience.description}</p>
                  <p><strong>Provider:</strong> {audience.provider}</p>
                  <p><strong>Records:</strong> {audience.records}</p>
                  <p><strong>Score:</strong> {audience.score}</p>
              </div>
          ))}
      </div>
      </div>
  );
  }

    // useEffect(() => {
    //   router =  useRouter();
    // },[])
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchText.trim()) {
          alert(searchText.trim())
          getAudiences(searchText)
            // router.push(`/list?query=${encodeURIComponent(searchText)}`);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '50px' }}>
            <h1>Search for Audiences</h1>
            <form onSubmit={handleSearch}  style={{ display: 'flex', alignItems: 'center', gap: '10px', border: "1px solid #7f7f7f", borderRadius: "8px", marginTop: "12px" }}>
                <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Enter search query"
                    style={{ padding: '10px', fontSize: '16px', width: '300px' ,borderRadius: "8px" }}
                />
                <button type="submit" style={{ padding: '10px 20px', fontSize: '16px' }}>
                    Search
                </button>
            </form>

            {!!audiences && <div style={{marginTop: "24px"}}>
            {cards()}
            </div>}
        </div>
    );
};

export default Home;
