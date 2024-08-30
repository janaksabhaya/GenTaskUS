import React, { useEffect, useRef, useState } from 'react';
import Logo from '../logo.svg'
import { useLocation } from 'react-router-dom';
import Dropdown from '../common/Menu';

const Header = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const [openDropdown, setOpenDropdown] = useState(null);
    const containerRef = useRef(null);
    const handleDropdownClick = (label) => {
        setOpenDropdown(openDropdown === label ? null : label);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setOpenDropdown(null);  // Close all dropdowns
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <header className="header sticky top-0 z-[99999] ">
            <nav className="bg-white border-gray-200 z-50 " >
                <div className=" flex flex-wrap items-center p-5 gap-[40px] w-full">

                    <img
                        src={Logo}
                        width={100}
                        height={20}
                        alt="Taskus Logo"
                    />

                    <div className="flex items-center justify-between">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <a
                                    href="/"
                                    className={`block py-2 px-3 md:p-0 rounded  ${currentPath === '/' || currentPath === '/call-details' ? "text-[#495057]" : ' text-[#0D6EFD]'}`}
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/call-evaluation"
                                    className={`block py-2 px-3 md:p-0  rounded hover:bg-gray-100 md:hover:bg-transparent ${currentPath === '/call-evaluation' ? "text-[#495057]" : ' text-[#0D6EFD]'}`}
                                >
                                    Call Evaluation
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {currentPath !== '/call-details' && (<>
                <div ref={containerRef} className='shadow-lg py-2 relative z-50 border-t bg-white'>
                    <Dropdown
                        label='Location'
                        icon={<i className="bi bi-geo-alt-fill"></i>}
                        isOpen={openDropdown === 'Location'}
                        onClick={() => handleDropdownClick('Location')}
                    />
                    <Dropdown
                        label='Clients'
                        icon={<i className="bi bi-suitcase-lg-fill"></i>}
                        isOpen={openDropdown === 'Clients'}
                        onClick={() => handleDropdownClick('Clients')}
                    />
                    <Dropdown
                        label='Teams'
                        icon={<i className="bi bi-people-fill"></i>}
                        isOpen={openDropdown === 'Teams'}
                        onClick={() => handleDropdownClick('Teams')}
                    />
                    <Dropdown
                        label='Calls'
                        icon={<i className="bi bi-headset"></i>}
                        isOpen={openDropdown === 'Calls'}
                        onClick={() => handleDropdownClick('Calls')}
                    />
                    <Dropdown
                        label='Method'
                        icon={<i className="bi bi-gear"></i>}
                        isOpen={openDropdown === 'Method'}
                        onClick={() => handleDropdownClick('Method')}
                    />
                    <Dropdown
                        label='Sentiments'
                        icon={<i className="bi bi-gear"></i>}
                        isOpen={openDropdown === 'Sentiments'}
                        onClick={() => handleDropdownClick('Sentiments')}
                    />
                    <Dropdown
                        label='Status'
                        icon={<i className="bi bi-gear"></i>}
                        isOpen={openDropdown === 'Status'}
                        onClick={() => handleDropdownClick('Status')}
                    />
                </div>
            </>)

            }

        </header>
    );
};

export default Header;