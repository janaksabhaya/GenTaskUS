// Drawer.js
import React from 'react';

const CallDetailsModel = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const CallDetailsModelData = [
        {
            title: 'Caller Information',
            labelDataPairs: [
                { label: 'Caller Name', data: 'John Doe' },
                { label: 'Phone Number', data: '(123) 456-7890' },
                { label: 'Call Duration', data: '15 minutes' },
                { label: 'Call Type', data: 'Inbound' },
                { label: 'Time of Call', data: '10:30 AM, Aug 28, 2024' },
                { label: 'Call Status', data: 'Completed' },
                { label: 'Notes', data: 'Follow-up required' }
            ]
        },
        {
            title: 'Agent Information',
            labelDataPairs: [
                { label: 'Agent Name', data: 'Jane Smith' },
                { label: 'Department', data: 'Customer Support' },
                { label: 'Agent ID', data: 'CS00123' },
                { label: 'Shift', data: 'Morning' },
                { label: 'Handled Calls Today', data: '8 calls' },
                { label: 'Rating', data: '4.5/5' },
                { label: 'Agent Remarks', data: 'Customer satisfied.' }
            ]
        },
        {
            title: 'Call Summary',
            labelDataPairs: [
                { label: 'Issue Reported', data: 'Unable to login to account' },
                { label: 'Resolution', data: 'Password reset' },
                { label: 'Follow-up Date', data: 'Sep 5, 2024' },
                { label: 'Escalation Status', data: 'Not Escalated' },
                { label: 'Call Recording', data: 'Link to recording' },
                { label: 'Customer Satisfaction', data: 'Positive' },
                { label: 'Next Steps', data: 'send email.' }
            ]
        }
    ];


    return (
        <div className="fixed flex justify-end top-0 right-0 z-40 h-screen overflow-y-auto transition-transform translate-x-0 backdrop-brightness-50 w-full dark:bg-gray-800 border-b" style={{ boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px' }}>
         <div className='w-full h-full max-w-[368px] bg-white'>
         <div className='p-4'>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    Call Details
                </h3>
                <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={onClose}
                >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>
            </div>
            <div className='border-t'>
                {CallDetailsModelData?.map((section, index) => (
                    <div className='p-4' key={index}>
                        <h6 className='font-bold'>{section.title}</h6>
                        {section?.labelDataPairs.map((pair, pairIndex) => (
                            <div className='flex justify-between items-center mt-1' key={pairIndex}>
                                <h6 className='text-base text-[#6C757D]'>{pair.label}</h6>
                                <h6 className='text-base text-right'>{pair.data}</h6>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
         </div>
           
        </div>
    );
};

export default CallDetailsModel;
