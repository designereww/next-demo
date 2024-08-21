import React from 'react';

const CircularInput = ({ value, label, onChange, isPercentage, readOnly }) => {
    const r = 62; // radius
    const circumference = 2 * Math.PI * r;
    const offset = isPercentage
        ? circumference - (value / 100) * circumference
        : circumference - (100 - value / value) * circumference;

    return (
        <div style={{ textAlign: 'center', margin: '0 20px', position: 'relative', width: '144px', height: '144px' }}>
            <svg width="144" height="144">
                <circle
                    stroke="#e6e6e6"
                    fill="transparent"
                    strokeWidth="10"
                    r={r}
                    cx="72"
                    cy="72"
                />
                <circle
                    stroke={isPercentage ? "#00ff00" : "#ff0000"}
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
            <input
                type="number"
                value={value}
                onChange={onChange}
                readOnly={readOnly}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '50px',
                    height: '30px',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    border: 'none',
                    background: 'transparent',
                    outline: 'none',
                }}
                min="0"
            />
            <div style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold', color: '#555' }}>
                {label}
            </div>
        </div>
    );
};

export default CircularInput;
