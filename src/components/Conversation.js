import React from 'react';
import ReceiverIcon from '../assets/images/receiver.svg'
import SenderIcon from '../assets/images/sender.svg'

const Conversation = ({messages, currentTime = 30 }) => {
    
    return (
        <div className=" p-4 h-[56vh] overflow-y-auto ">
            {messages?.map((message, index) => (
                <div
                    key={index}
                    className={`flex mb-4 transition-opacity duration-300  ${currentTime >= message.time ? 'opacity-100' : 'opacity-30'}`}
                >
                    <div className={`flex items-end ${message.sender === 'receiver' ? 'ml-auto' : 'mr-auto'}`}>
                    {message?.sender === 'user' && <div className='h-5 w-5 rounded-full border border-[#DEE2E6] mr-2 flex justify-center items-center'><img src={ReceiverIcon} alt='receiver'/></div> }
                        <div
                            className={`rounded-lg p-3 min-w-[416px] text-[#212529] ${message.sender === 'receiver' ? 'bg-[#ff00741a] ml-[60px]' : 'bg-[#DCE8FF] mr-[60px]'}`}
                        >
                            <p>{message?.text}</p>
                            <span className="flex justify-end text-xs text-gray-500 mt-2">{message?.timeText}</span>
                        </div>
                        {message?.sender === 'receiver' && <div className='h-5 w-5 rounded-full border border-[#DEE2E6] ms-2 flex justify-center items-center'><img src={SenderIcon} alt='sender'/></div> }
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Conversation;
