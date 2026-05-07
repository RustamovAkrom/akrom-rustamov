// import { useEffect, useState } from 'react';

// interface AboutData {
//     lead: string;
//     body: string;
//     stats: Array<{
//         value: string | number;
//         label: string;
//         isNumber?: boolean;
//         suffix?: string;
//     }>;
//     timeline: Array<{
//         role: string;
//         year: string;
//         description: string;
//         isLive?: boolean;
//     }>;
// }

// export function useAboutData() {
//     const [data, setData] = useState<AboutData | null>(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const response = await fetch('/api/about');
//                 if (!response.ok) throw new Error('Failed to fetch');
//                 const json = await response.json();
//                 setData(json);
//             } catch (err) {
//                 setError(err instanceof Error ? err.message : 'Unknown error');
//             } finally {
//                 setLoading(false);
//             }
//         }

//         fetchData();
//     }, []);

//     return { data, loading, error };
// }
