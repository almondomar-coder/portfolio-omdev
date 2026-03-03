import React from 'react';

const BlobAnimation: React.FC = () => {
    return (
        <div className="relative w-full max-w-[400px] aspect-square mx-auto">
            <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full drop-shadow-xl"
                aria-labelledby="t"
            >
                <defs>
                    <clipPath id="blobClip">
                        <path
                            d="M43.1,-68.5C56.2,-58.6,67.5,-47.3,72.3,-33.9C77.2,-20.5,75.5,-4.9,74.2,11.3C72.9,27.6,71.9,44.5,63.8,57.2C55.7,69.8,40.6,78.2,25.5,79.2C10.4,80.1,-4.7,73.6,-20.9,69.6C-37.1,65.5,-54.5,63.9,-66,54.8C-77.5,45.8,-83.2,29.3,-85.7,12.3C-88.3,-4.8,-87.7,-22.3,-79.6,-34.8C-71.5,-47.3,-55.8,-54.9,-41.3,-64.2C-26.7,-73.6,-13.4,-84.7,0.8,-86C15,-87.2,29.9,-78.5,43.1,-68.5Z"
                            transform="translate(100 100)"
                        />
                    </clipPath>
                </defs>

                {/* Clip Image */}
                <image
                    href="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    width="200"
                    height="200"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath="url(#blobClip)"
                    className="hover:scale-105 transition-transform duration-700 ease-in-out"
                />

                {/* Text Path Guide (Invisible) */}
                <path
                    id="textGuide"
                    d="M43.1,-68.5C56.2,-58.6,67.5,-47.3,72.3,-33.9C77.2,-20.5,75.5,-4.9,74.2,11.3C72.9,27.6,71.9,44.5,63.8,57.2C55.7,69.8,40.6,78.2,25.5,79.2C10.4,80.1,-4.7,73.6,-20.9,69.6C-37.1,65.5,-54.5,63.9,-66,54.8C-77.5,45.8,-83.2,29.3,-85.7,12.3C-88.3,-4.8,-87.7,-22.3,-79.6,-34.8C-71.5,-47.3,-55.8,-54.9,-41.3,-64.2C-26.7,-73.6,-13.4,-84.7,0.8,-86C15,-87.2,29.9,-78.5,43.1,-68.5Z"
                    transform="translate(100 100)"
                    fill="none"
                    stroke="none"
                />

                {/* Animated Text */}
                <text className="text-[8px] font-bold tracking-widest uppercase fill-[var(--color-primary)]">
                    <textPath href="#textGuide" startOffset="0%">
                        ❤ WEB DEVELOPER ❤ SEO EXPERT ❤ UI/UX DESIGNER ❤
                        <animate
                            attributeName="startOffset"
                            from="0%"
                            to="100%"
                            dur="20s"
                            repeatCount="indefinite"
                        />
                    </textPath>
                    <textPath href="#textGuide" startOffset="100%">
                        ❤ WEB DEVELOPER ❤ SEO EXPERT ❤ UI/UX DESIGNER ❤
                        <animate
                            attributeName="startOffset"
                            from="-100%"
                            to="0%"
                            dur="20s"
                            repeatCount="indefinite"
                        />
                    </textPath>
                </text>
            </svg>
        </div>
    );
};

export default BlobAnimation;
