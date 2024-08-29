import React, { useState } from 'react'

const Dropdown = ({ label = 'menu', icon = '', dropdownItems }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);


    const Items = [
        { label: `${label} 1`, href: '#' },
        { label: `${label} 2`, href: '#' },
        { label: `${label} 3`, href: '#' },
    ];

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={toggleDropdown}
                className="flex items-center px-3 py-2 text-blue-600 hover:text-blue-800 focus:outline-none"
                type="button"
            >
                {icon}
                <span className="ml-2 capitalize mr-1 text-[16px]">{label}</span>
                <div>
                    <i className="bi bi-caret-down-fill" style={{ fontSize: '10px' }}></i>
                </div>
            </button>

            {isOpen && (
                <div className="absolute mt-1 bg-white border border-gray-200 rounded shadow-lg z-50">
                    <ul className="py-1 text-gray-700">
                        {dropdownItems ? dropdownItems : Items?.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item?.href}
                                    className="block px-4 py-2 hover:bg-gray-100"
                                >
                                    {item?.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown