import React from 'react';

const CircularBar = ({ percentage, strokeColor, onChange }) => {
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
            </svg>
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                background: 'transparent',
                color: 'black',
            }}>
                <input
                    type="number"
                    value={percentage}
                    onChange={onChange}
                    style={{
                        width: '100%',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        border: 'none',
                        background: 'transparent',
                    }}
                />
            </div>
        </div>
    );
};

export default CircularBar;
