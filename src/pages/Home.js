import React, { useState } from 'react'
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

  const paginatedItems = records.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <>
      <hr />
      <div className='shadow-lg my-2'>
        <Dropdown label='Location' icon={<i className="bi bi-geo-alt-fill"></i>} />
        <Dropdown label='Clients' icon={<i className="bi bi-suitcase-lg-fill"></i>} />
        <Dropdown label='Teams' icon={<i className="bi bi-people-fill"></i>} />
        <Dropdown label='Calls' icon={<i className="bi bi-headset"></i>} />
        <Dropdown label='Method' icon={<i className="bi bi-gear"></i>} />
        <Dropdown label='Sentiments' icon={<i className="bi bi-gear"></i>} />
        <Dropdown label='Status' icon={<i className="bi bi-gear"></i>} />
      </div>

      <div className="relative overflow-x-auto  sm:rounded-lg mt-1 custom-table-height">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 h-fit">
          <thead className="text-xs text-[#212529] capitalize font-bold text-[16px] bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
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
              <tr key={record.id} className="bg-white border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer" onClick={() => navigate('/call-details')}>
                <td className="p-4">
                  <input
                    type="checkbox"
                    onClick={(e) => e.stopPropagation()}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </td>
                <td className="px-4 py-2">{record.recordingRef}</td>
                <td className="px-4 py-2">{record.date}</td>
                <td className="px-4 py-2">{record.startTime}</td>
                <td className="px-4 py-2">{record.duration}</td>
                <td className="px-4 py-2">{record.agentId}</td>
                <td className="px-4 py-2">{record.agentName}</td>
                <td className="px-4 py-2">{record.client}</td>
                <td className="px-4 py-2">{record.location}</td>
                <td className="px-4 py-2">{record.score}</td>
                <td className="px-4 py-2"><img src={record?.sentiment} /></td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded-full text-white ${record.confidence === "HIGH" ? "bg-green-500" : "bg-red-500"}`}>
                    {record.confidence}
                  </span>
                </td>
                <td className="px-4 py-2">{record.method}</td>
                <td className="px-4 py-2">{record.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  )
}

export default Home