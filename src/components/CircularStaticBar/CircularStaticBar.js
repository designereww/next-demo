import React from 'react';

const CircularStaticBar = ({ percentage, strokeColor }) => {
    const r = 62; // radius
    const circumference = 2 * Math.PI * r;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className='relative'>
            <svg width="144" height="144">
                <circle
                    stroke="white"
                    fill="#e6e6e6"
                    strokeWidth="10"
                    r={r}
                    cx="72"
                    cy="72"
                />
                <circle
                    stroke={strokeColor}
                    fill="transparent"
                    strokeWidth="10"
                    r={r}
                    cx="72"
                    cy="72"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    style={{
                        transition: 'stroke-dashoffset 0.35s',
                        transform: 'rotate(-90deg)',
                        transformOrigin: '50% 50%',
                    }}
                />
                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dy=".3em"
                    fontSize="20"
                    fontWeight="bold"
                >
                    {percentage}
                </text>
            </svg>

        </div>
    );
};

export default CircularStaticBar;
