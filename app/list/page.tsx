"use client";
import { useEffect, useState } from 'react';
import { fetchAudiences, AudienceResponse } from '../../services/recomend-audience';

const AudienceCards: React.FC = () => {
    const [audiences, setAudiences] = useState<AudienceResponse[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getAudiences = async () => {
            try {
                const data = await fetchAudiences();
                setAudiences(data.audiences);
            } catch (error) {
                setError('Failed to fetch audiences');
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        getAudiences();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
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

export default AudienceCards;
