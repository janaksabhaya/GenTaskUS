import React from 'react';
import Logo from '../logo.svg'
import { useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <header className="header">
            <nav className="bg-white border-gray-200 dark:bg-gray-900" style={currentPath === '/call-evaluation' ? { boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px' } : { boxShadow: 'none' }}>
                <div className=" flex flex-wrap items-center p-5 gap-[40px] w-full">

                    <img
                        src={Logo}
                        width={100}
                        height={20}
                        alt="Taskus Logo"
                    />

                    <div className="flex items-center justify-between">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a
                                    href="/"
                                    className={`block py-2 px-3 md:p-0  rounded md:bg-transparent md:dark:text-blue-500 ${currentPath === '/' || currentPath === '/call-details'  ? "text-blue-700" : 'text-gray-900'}`}
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/call-evaluation"
                                    className={`block py-2 px-3 md:p-0  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${currentPath === '/call-evaluation' ? "text-blue-700" : 'text-gray-900'}`}
                                >
                                    Call Evaluation
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    );
};

export default Header;