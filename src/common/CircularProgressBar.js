import React from 'react';

const CircularProgressBar = ({ percentage }) => {
    const radius = 18;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className="relative flex items-center justify-center w-12 h-12">
            <svg className="transform -rotate-90 w-full h-full">
                <circle
                    cx="22"
                    cy="22"
                    r={radius}
                    strokeWidth="4"
                    stroke="#D1E7DD"
                    fill="transparent"
                />
                <circle
                    cx="22"
                    cy="22"
                    r={radius}
                    strokeWidth="4"
                    stroke="#198754"
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    className="transition-all duration-300"
                />
            </svg>
            <span className="absolute text-black font-bold text-lg top-[11px] left-[12px]">
                {percentage}
            </span>
        </div>
    );
};

export default CircularProgressBar;
