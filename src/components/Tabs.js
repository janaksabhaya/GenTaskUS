import React, { useState } from 'react';
import CallRecordingPlayer from './CallRecordingPlayer';
import Conversation from './Conversation';
import SentimentAnalysisGraph from './SentimentAnalysisGraph';
import Waveform from './waveForm';
import SentimentChart from './SentimentChart';
// import AudioUrl from '../assets/recoding/audio-song.mp3'
import AudioUrl from '../assets/recoding/recordingTest.mp3'


const Tabs = () => {
    const [activeTab, setActiveTab] = useState('transcription');
    const [currentTime, setCurrentTime] = useState(50);

    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = (play) => {
        setIsPlaying(play);
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    const messages = [
        { sender: 'user', text: 'Hi David, have you got the project report pdf?', time: 10, timeText: '03:34 PM' },
        { sender: 'receiver', text: 'NO. I did not get it', time: 25, timeText: '03:46 PM' },
        { sender: 'user', text: 'Hi David, have you got the project report pdf?', time: 10, timeText: '03:48 PM' },
        { sender: 'receiver', text: 'NO. I did not get it', time: 25, timeText: '03:51 PM' },
        { sender: 'user', text: 'Hi David, have you got the project report pdf?', time: 10, timeText: '03:54 PM' }

    ];

    const sentimentData = [
        { type: 'F', sentiments: [{ width: 12, color: 'blue' }, { width: 10, color: 'pink' }] },
        { type: 'H', sentiments: [{ width: 20, color: 'blue' }, { width: 18, color: 'pink' }] },
        { type: 'F', sentiments: [{ width: 15, color: 'blue' }, { width: 12, color: 'pink' }] },
    ];

    const messagesSentiment = [
        {
            id: 1,
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
            text: 'Hi David, have you got the project report pdf?',
            labels: [
                { text: 'Greeting', type: 'title' },
                { text: 'Excess Charges, Bank Statement', type: 'massage' }
            ],
            time: '03:34 PM',
        },
        {
            id: 3,
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
            text: 'Hi David, have you got the project report pdf?',
            labels: [
                { text: 'Diagnosis/Resolution', type: 'title' },
                { text: '123456789', type: 'title' }
            ],
            time: '03:34 PM',
        }
    ];


    return (
        <div>
            <div className='relative'>
                <ul className="flex flex-wrap text-sm font-medium text-center h-[48px] text-gray-500 border-b px-5 pt-3 border-gray-200  bg-[#e3eaf1] ">
                    <li className="me-2">
                        <button
                            className={`inline-block px-4 py-2 rounded-t-lg border-[#DEE2E6] ${activeTab === 'transcription' ? 'text-[#495057] bg-white ' : 'hover:text-gray-600 hover:bg-gray-50 text-[#0D6EFD]'}`}
                            onClick={() => handleTabChange('transcription')}
                        >
                            Transcription
                        </button>
                    </li>
                    <li className="me-2">
                        <button
                            className={`inline-block px-4 py-2 rounded-t-lg ${activeTab === 'sentiment' ? 'text-[#495057] bg-white ' : 'hover:text-gray-600 hover:bg-gray-50 text-[#0D6EFD]'}`}
                            onClick={() => handleTabChange('sentiment')}
                        >
                            Sentiment
                        </button>
                    </li>
                </ul>
                <div className='absolute top-[7.49px] right-5 flex gap-2 bg-white border rounded'>
                    <h6 className='text-sm text-[#6C757D] px-2 py-[6px]'>CONFIDENCE</h6>
                    <div className='bg-[#198754] flex items-center rounded-r'>
                        <h6 className='  text-sm text-white text-center px-[6px] py-[2px]'>HIGH</h6>
                    </div>
                </div>
            </div>
            <div className="">
                {activeTab === 'transcription' &&
                    <>
                        <div className='px-4 py-3 border-b'>
                            <CallRecordingPlayer audioUrl={AudioUrl}
                                onPlayPause={handlePlayPause} />
                        </div>
                        <div className='flex '>
                            <div className='w-full border-r'>
                                <Conversation messages={messages} currentTime={currentTime} />
                            </div>
                            <div className='w-[480px] relative'>
                                <Waveform
                                    audioUrl={AudioUrl}
                                    isPlaying={isPlaying} />
                                {/* <div className='absolute w-[90%] top-[78px] left-4'><SentimentAnalysisGraph data={sentimentData} /></div> */}
                            </div>
                        </div>

                    </>
                }

                {activeTab === 'sentiment' &&
                    <>
                        <SentimentChart />
                        <div>
                            <div className="bg-gray-50 p-4 max-h-96 overflow-y-auto">
                                {messagesSentiment?.map((message, index) => (
                                    <div
                                        key={index}
                                        className={`mb-4 transition-opacity duration-300`}
                                    >
                                        <div className={`flex items-end`}>
                                            <div className='h-5 w-5 rounded-full border border-[#DEE2E6] mr-2 flex justify-center items-center'><i className="bi bi-person"></i></div>

                                            <div
                                                className='rounded-lg p-3 min-w-[416px] w-full mr-[104px] text-[#212529] bg-[#ff00741a]'
                                            >
                                                <p>{message?.text}</p>
                                                <span className="flex justify-end text-xs text-gray-500 mt-2">{message?.time}</span>
                                            </div>

                                        </div>
                                        <div className='flex gap-2 ms-8 mt-2'>
                                            {message.labels.map((label, index) => {
                                                return (
                                                    <>
                                                        <div>
                                                            <h6 className={`text-xs  font-bold text-white px-2 py-1 w-fit rounded ${label?.type === 'title' ? 'bg-[#6C757D]' : 'bg-[#DC3545]'}`}> {index === 0 ? `ID: ${message.id} |` : ''}  {label?.text}</h6>
                                                        </div>
                                                        {/* <div>
                                                            <h6 className='text-xs font-bold bg-[#DC3545] text-white w-fit  px-2 py-1 rounded'>Excess Charges, Bank Statement</h6>
                                                        </div> */}
                                                    </>
                                                )
                                            })}

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </>
                }

            </div>
        </div>
    );
};

export default Tabs;
