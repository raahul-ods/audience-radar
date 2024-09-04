"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchAudiences, AudienceResponse } from '../../services/recomend-audience';

const Results: React.FC = () => {
    // const router = useRouter();
    const [audiences, setAudiences] = useState<AudienceResponse[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Ensure the router is fully initialized and the query is defined
        // if (!router.isReady) return;

        const query = "https://www.Query example";
        if (query) {
            const getAudiences = async () => {
                try {
                    const data = await fetchAudiences(query);
                    setAudiences(data.audiences);
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

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!audiences.length) {
        return <div>No results found.</div>;
    }

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', padding: '50px' }}>
            <h2>Results:</h2>
            {audiences.map((audience) => (
                <div key={audience.id} style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', width: '300px' }}>
                    <h3>{audience.name}</h3>
                    <p>{audience.description}</p>
                    <p><strong>Provider:</strong> {audience.provider}</p>
                    <p><strong>Records:</strong> {audience.records}</p>
                    <p><strong>Score:</strong> {audience.score}</p>
                </div>
            ))}
        </div>
    );
};

export default Results;
