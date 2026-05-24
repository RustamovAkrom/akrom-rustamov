'use client';

import { useEffect, useState } from 'react';

export default function LoadingBar() {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((old) => {
                if (old >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setIsVisible(false), 300);
                    return 100;
                }
                const diff = Math.random() * 15 + 5;
                return Math.min(old + diff, 100);
            });
        }, 200);

        return () => clearInterval(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="loading-bar-wrapper">
            <div 
                className="loading-bar" 
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}
