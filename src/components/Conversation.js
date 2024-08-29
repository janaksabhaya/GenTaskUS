import React from 'react';

const Conversation = ({messages, currentTime = 30 }) => {
    
    return (
        <div className="bg-gray-50 p-4 min-h-96 overflow-y-auto">
            {messages?.map((message, index) => (
                <div
                    key={index}
                    className={`flex mb-4 transition-opacity duration-300  ${currentTime >= message.time ? 'opacity-100' : 'opacity-30'}`}
                >
                    <div className={`flex items-end ${message.sender === 'receiver' ? 'ml-auto' : 'mr-auto'}`}>
                    {message?.sender === 'user' && <div className='h-5 w-5 rounded-full border border-[#DEE2E6] mr-2 flex justify-center items-center'><i className="bi bi-person"></i></div> }
                        <div
                            className={`rounded-lg p-3 min-w-[416px] text-[#212529] ${message.sender === 'receiver' ? 'bg-[#ff00741a]' : 'bg-[#DCE8FF]'}`}
                        >
                            <p>{message?.text}</p>
                            <span className="flex justify-end text-xs text-gray-500 mt-2">{message?.timeText}</span>
                        </div>
                        {message?.sender === 'receiver' && <div className='h-5 w-5 rounded-full border border-[#DEE2E6] ms-2 flex justify-center items-center'><i className="bi bi-person"></i></div> }
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Conversation;
