import React, { useState, useEffect } from 'react';

const ScrollProgress: React.FC = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;

            setScrollProgress(Number(scroll));
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 z-[100]">
            <div
                className="h-full w-full origin-left bg-[var(--color-cta)] shadow-[0_0_10px_var(--color-cta)]"
                style={{ transform: `scaleX(${scrollProgress})` }}
            />
        </div>
    );
};

export default ScrollProgress;
