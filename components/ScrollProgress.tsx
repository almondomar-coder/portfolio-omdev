import React, { useState, useEffect } from 'react';

const ScrollProgress: React.FC = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        let ticking = false;
        const update = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            setScrollProgress(windowHeight > 0 ? totalScroll / windowHeight : 0);
            ticking = false;
        };
        const onScroll = () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(update);
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 z-[100] pointer-events-none">
            <div
                className="h-full w-full origin-left bg-[var(--color-cta)] shadow-[0_0_10px_var(--color-cta)]"
                style={{ transform: `scaleX(${scrollProgress})`, willChange: 'transform' }}
            />
        </div>
    );
};

export default ScrollProgress;
