import React, { useEffect, useRef, useState } from 'react'
import Dropdown from '../common/Menu';
import Pagination from '../common/Pagination';
import SmileIcon from '../assets/images/face-smile.svg'
import ExpressionlessIcon from '../assets/images/face-expressionless.svg'
import ConfusedIcon from '../assets/images/face-confused.svg'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const records = [
    {
      id: 1,
      recordingRef: "Text line",
      date: "Text line",
      startTime: "Text line",
      duration: "Text line",
      agentId: "Text line",
      agentName: "Text line",
      client: "Text line",
      location: "Text line",
      score: "91",
      sentiment: SmileIcon,
      confidence: "HIGH",
      method: "Auto",
      status: "Evaluated",
    },
    {
      id: 2,
      recordingRef: "Text line",
      date: "Text line",
      startTime: "Text line",
      duration: "Text line",
      agentId: "Text line",
      agentName: "Text line",
      client: "Text line",
      location: "Text line",
      score: "91",
      sentiment: SmileIcon,
      confidence: "HIGH",
      method: "Manual",
      status: "Pending",
    },
    {
      id: 3,
      recordingRef: "Text line",
      date: "Text line",
      startTime: "Text line",
      duration: "Text line",
      agentId: "Text line",
      agentName: "Text line",
      client: "Text line",
      location: "Text line",
      score: "91",
      sentiment: ExpressionlessIcon,
      confidence: "HIGH",
      method: "Manual",
      status: "Pending",
    },
    {
      id: 3,
      recordingRef: "Text line",
      date: "Text line",
      startTime: "Text line",
      duration: "Text line",
      agentId: "Text line",
      agentName: "Text line",
      client: "Text line",
      location: "Text line",
      score: "91",
      sentiment: SmileIcon,
      confidence: "HIGH",
      method: "Manual",
      status: "Pending",
    },
    {
      id: 3,
      recordingRef: "Text line",
      date: "Text line",
      startTime: "Text line",
      duration: "Text line",
      agentId: "Text line",
      agentName: "Text line",
      client: "Text line",
      location: "Text line",
      score: "91",
      sentiment: ConfusedIcon,
      confidence: "LOW",
      method: "Manual",
      status: "Pending",
    },
    {
      id: 3,
      recordingRef: "Text line",
      date: "Text line",
      startTime: "Text line",
      duration: "Text line",
      agentId: "Text line",
      agentName: "Text line",
      client: "Text line",
      location: "Text line",
      score: "91",
      sentiment: SmileIcon,
      confidence: "HIGH",
      method: "Manual",
      status: "Pending",
    },
    {
      id: 3,
      recordingRef: "Text line",
      date: "Text line",
      startTime: "Text line",
      duration: "Text line",
      agentId: "Text line",
      agentName: "Text line",
      client: "Text line",
      location: "Text line",
      score: "91",
      sentiment: SmileIcon,
      confidence: "HIGH",
      method: "Manual",
      status: "Pending",
    },
    {
      id: 3,
      recordingRef: "Text line",
      date: "Text line",
      startTime: "Text line",
      duration: "Text line",
      agentId: "Text line",
      agentName: "Text line",
      client: "Text line",
      location: "Text line",
      score: "91",
      sentiment: SmileIcon,
      confidence: "HIGH",
      method: "Manual",
      status: "Pending",
    },
    {
      id: 3,
      recordingRef: "Text line",
      date: "Text line",
      startTime: "Text line",
      duration: "Text line",
      agentId: "Text line",
      agentName: "Text line",
      client: "Text line",
      location: "Text line",
      score: "91",
      sentiment: ConfusedIcon,
      confidence: "LOW",
      method: "Manual",
      status: "Pending",
    },
    {
      id: 3,
      recordingRef: "Text line",
      date: "Text line",
      startTime: "Text line",
      duration: "Text line",
      agentId: "Text line",
      agentName: "Text line",
      client: "Text line",
      location: "Text line",
      score: "91",
      sentiment: SmileIcon,
      confidence: "HIGH",
      method: "Manual",
      status: "Pending",
    },
    {
      id: 3,
      recordingRef: "Text line",
      date: "Text line",
      startTime: "Text line",
      duration: "Text line",
      agentId: "Text line",
      agentName: "Text line",
      client: "Text line",
      location: "Text line",
      score: "91",
      sentiment: SmileIcon,
      confidence: "HIGH",
      method: "Manual",
      status: "Pending",
    },
  ];

  const itemsPerPage = 10;

  const [currentPage, setCurrentPage] = useState(1);


  const totalPages = Math.ceil(50 / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  // const [openDropdown, setOpenDropdown] = useState(null);
  // const containerRef = useRef(null);
  // const handleDropdownClick = (label) => {
  //   setOpenDropdown(openDropdown === label ? null : label);
  // };
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (containerRef.current && !containerRef.current.contains(event.target)) {
  //       setOpenDropdown(null);  // Close all dropdowns
  //     }
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);


  const paginatedItems = records.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <>
      <hr />
      {/* <div ref={containerRef} className='shadow-lg py-2'>
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
      </div> */}

      <div className="relative overflow-x-auto custom-table-height bg-white">
        <table className="w-full text-sm text-left text-gray-500 h-fit">
          <thead className="text-xs text-[#212529] capitalize font-bold text-[16px] bg-gray-50 dark:bg-gray-700">
            <tr className='text-base font-bold bg-[#E3EAF1] leading-6'>
              <th className="p-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </th>
              <th className="px-4 py-2">Recording Ref#</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Start Time</th>
              <th className="px-4 py-2">Duration</th>
              <th className="px-4 py-2">Agent ID</th>
              <th className="px-4 py-2">Agent Name</th>
              <th className="px-4 py-2">Client</th>
              <th className="px-4 py-2">Location</th>
              <th className="px-4 py-2">Score</th>
              <th className="px-4 py-2">Sentiment</th>
              <th className="px-4 py-2">Confidence</th>
              <th className="px-4 py-2">Method</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {records.map(record => (
              <tr key={record.id} className="bg-[#ffffff] text-[#212529] border-b hover:bg-gray-50  cursor-pointer" onClick={() => navigate('/call-details')}>
                <td className="p-4">
                  <input
                    type="checkbox"
                    onClick={(e) => e.stopPropagation()}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                </td>
                <td className="px-4">{record.recordingRef}</td>
                <td className="px-4">{record.date}</td>
                <td className="px-4">{record.startTime}</td>
                <td className="px-4">{record.duration}</td>
                <td className="px-4">{record.agentId}</td>
                <td className="px-4">{record.agentName}</td>
                <td className="px-4">{record.client}</td>
                <td className="px-4">{record.location}</td>
                <td className="px-4">{record.score}</td>
                <td className="px-4 w-[34px] h-[34px]"><img src={record?.sentiment} className='w-[34px] h-[34px]' /></td>
                <td className="px-4">
                  <span className={`px-2 py-1 rounded text-xs text-white ${record.confidence === "HIGH" ? "bg-[#198754]" : "bg-[#DC3545]"}`}>
                    {record.confidence}
                  </span>
                </td>
                <td className="px-4 ">{record.method}</td>
                <td className="px-4">{record.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer className='sticky bottom-0 z-50'>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </footer>
    </>
  )
}

export default Home