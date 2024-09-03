const url = 'https://audience-recommender-function-j6d2ec4fda-uk.a.run.app';

const headers: Record<string, string> = {
    'Keep-Alive': 'timeout=300, max=1000',
    'timeout': '300000',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer c3751f68-23bd-4b61-82ee-cd941bbe1f90',
};

interface RequestData {
    url: string;
}

export interface AudienceResponse {
    id: string;
    score: string;
    name: string;
    description: string;
    records: string;
    provider: string;
}

export interface ApiResponse {
    audiences: AudienceResponse[];
}

const data: RequestData = {
    url: 'https://www.Query example'
};


export const fetchAudiences = async (): Promise<ApiResponse> => {
    const url = 'https://audience-recommender-function-j6d2ec4fda-uk.a.run.app';
    const headers: Record<string, string> = {
        'Keep-Alive': 'timeout=300, max=1000',
        'timeout': '300000',
        'Connection': 'keep-alive',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer c3751f68-23bd-4b61-82ee-cd941bbe1f90',
    };

    const data: RequestData = {
        url: 'https://www.Query example',
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const responseData: ApiResponse = await response.json();
    return responseData;
};

