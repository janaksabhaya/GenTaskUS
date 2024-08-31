import React, { useState } from 'react'
import SmileIcon from '../assets/images/face-smile.svg'
import Tabs from '../components/Tabs'
import InputDropdown from '../common/InputMenu'
import CallSummaryModel from '../components/model/CallSummaryModel'
import CallDetailsModel from '../components/model/CallDetailsModel'
import CircularProgressBar from '../common/CircularProgressBar'
import { useNavigate } from 'react-router-dom'


const CallDetails = () => {
    const [qualityScore, setQualityScore] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const navigate = useNavigate();

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);


    const [questions, setQuestions] = useState([
        {
            id: 1,
            title: 'Did the agent say thank you for calling or apply a local greeting?',
            weight: '5',
            score: 100,
        },
        {
            id: 2,
            title: 'Did the agent mention the company name?',
            weight: '5',
            score: 100,
        },
        {
            id: 3,
            title: 'Did the agent verify the authorized user?',
            weight: '5',
            score: 100,
        }
    ]);


    const [questionsResolution, setQuestionsResolution] = useState([
        {
            id: 1,
            title: 'Did agent do effective probing on the call?',
            weight: '5',
            score: 100,
        },
        {
            id: 2,
            title: 'Did the agent provide clear understanding of the issue to the customer & confirmed it with the customer?',
            weight: '5',
            score: 100,
        },
    ]);

    const hundleQulityScrore = () => {
        setQualityScore(!qualityScore)
    }


    const handleInputChange = (id, newScore) => {
        if (newScore.length <= 3 && newScore >= 0 && newScore <= 100 ) {
            setQuestions(questions.map(q =>
                q.id === id ? { ...q, score: newScore } : q
            ));
        }
    };

    const handleInputChangeResolution = (id, newScore) => {
        if (newScore.length <= 3 && newScore >= 0 && newScore <= 100) {
            setQuestionsResolution(questionsResolution.map(q =>
                q.id === id ? { ...q, score: newScore } : q
            ));
        }
    };


    const handleSubmit = () => {
        console.log('Submitted Scores:', questions);
        setQualityScore(false);
    };


    const handleDiscard = () => {
        setQuestions(questions);
        setQuestionsResolution(questionsResolution);
    };

    console.log('questions', questions)
    console.log('questionsResolution', questionsResolution)

    const handleBackClick = () => {
        navigate(-1);
    };
    return (
        <>
            <CallSummaryModel isOpen={isModalOpen} onClose={closeModal} />
            <CallDetailsModel isOpen={isDrawerOpen} onClose={closeDrawer} />
            <div className='mb-5'>
                <hr />
                <div className='relative shadow-lg py-4 px-2 flex gap-4 items-center bg-white'>
                    <span className='flex items-center'><i className="bi bi-chevron-left cursor-pointer" onClick={handleBackClick}></i></span>
                    <h6 className='text-xl font-medium'>Recording 94838387483</h6>
                </div>

                <div className='mx-[12px] mt-3 '>
                    <div className='flex gap-6'>
                        <div className='border border-solid rounded-lg w-full bg-white'>
                            <div className='flex justify-between items-center bg-[#ECF1F6] rounded-t-lg px-4 py-3'>
                                <div className=''>
                                    <span className='font-semibold'>Call Details</span>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <i className="bi bi-headset text-[#FF0074]"></i>
                                    <h6 className='text-sm font-normal'>Tim Clark</h6>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <i className="bi bi-tag-fill text-[#FF0074]"></i>
                                    <h6 className='text-sm font-normal'>Inquiry</h6>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <i className="bi bi-geo-alt-fill text-[#FF0074]"></i>
                                    <h6 className='text-sm font-normal'>New Delhi</h6>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <i className="bi bi-clock-fill text-[#FF0074]"></i>
                                    <h6 className='text-sm font-normal'>03m 43s</h6>
                                </div>
                                <div className='font-medium text-xs text-[#0D6EFD] cursor-pointer' onClick={openDrawer}>
                                    View details
                                </div>
                            </div>

                            <div className='flex p-5'>
                                <div className='border-r pr-5 w-full'>
                                    <div className='flex items-center justify-between'>
                                        <div>
                                            <span className='text-base font-bold'>Call Summary</span>
                                        </div>

                                        <div className='text-xs font-bold text-[#0D6EFD] cursor-pointer' onClick={openModal}>
                                            Read More
                                        </div>
                                    </div>
                                    <div>
                                        <p className='text-[#6C757D]'> Lorem ipsum dolor sit amet consectetur. Tristique commodo nec consectetur nunc mauris pretium. Lectus imperdiet enim phasellus imperdiet ut risus. Sagittis donec.</p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='border-r px-5 flex flex-col items-center'>
                                        <h6 className='text-base font-bold'>Sentiment</h6>
                                        <img src={SmileIcon} alt='smile' width={48} height={48} className='w-12 h-12 mt-[2px]' />
                                    </div>
                                    <div className='px-5'>
                                        <h6 className='text-base font-bold'>Score</h6>
                                        {/* <img src={SmileIcon} alt='smile' width={48} height={48} className='w-12 h-12' /> */}
                                        {/* <div className='w-[100px] h-2 bg-green-700 rounded-full'>

                                        </div> */}
                                        <CircularProgressBar percentage={91} />
                                    </div>
                                </div>
                            </div>

                            {/* tabs */}
                            <Tabs />
                        </div>

                        {/* QUALITY SCORE */}
                        <div className='border border-solid rounded-lg min-w-[428px] bg-white'>
                            <div className='p-5 bg-[#ECF1F6] rounded-t-lg'>
                                <div className='flex justify-between items-center'>
                                    <h6 className='font-bold text-xl'>QUALITY SCORE</h6>
                                    <div className='flex items-center font-normal gap-3'>
                                        {qualityScore ? <h6 className='text-[#0D6EFD] text-sm cursor-pointer' onClick={handleDiscard}>DISCARD</h6> : ""}
                                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={hundleQulityScrore}> {qualityScore ? 'SAVE' : 'CHANGE'}</button>
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <h6 className='text-sm font-normal'>Select Quality Form</h6>
                                    <div className='mt-2'>
                                        <InputDropdown label='Customer Service QA-1' />
                                    </div>
                                </div>
                            </div>

                            {/* Opening */}
                            <div className='px-5 py-[26px]'>
                                <div className='flex justify-between items-center'>
                                    <h6 className='text-lg font-bold'>Opening</h6>
                                    <h6 className='bg-[#212529] px-2 py-2 rounded text-white text-xs' >Weight: 20%</h6>
                                </div>
                                <div>
                                    {questions?.map((question) => (
                                        <div key={question.id} className='flex gap-5 mt-6 justify-between'>
                                            <div>
                                                <h6 className='text-base font-normal'>{question?.title}</h6>
                                                <h6 className='bg-[#6C757D] px-2 py-2 rounded text-white text-xs w-fit mt-2' >Weight: {question.weight}%</h6>
                                            </div>
                                            <div className='relative '>
                                                <input type='text'
                                                    className={`border border-[#CED4DA]  w-[88px] px-3 py-[6px] rounded ${qualityScore ? '' : 'bg-[#E9ECEF]'}`}
                                                    value={question.score}
                                                    placeholder='100'
                                                    disabled={!qualityScore}
                                                    onChange={(e) => handleInputChange(question.id, e.target.value)} />
                                                {qualityScore && <span className='absolute top-[6px] left-[60px] '><i className="bi bi-pencil-fill text-[#6C757D]"></i></span>}
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>

                            {/* Diagnosis & Resolution */}
                            <div className='px-5 pt-[26px] pb-2 border-t'>
                                <div className='flex justify-between items-center'>
                                    <h6 className='text-lg font-bold' >Diagnosis & Resolution</h6>
                                    <h6 className='bg-[#212529] px-2 py-2 rounded text-white text-xs' >Weight: 60%</h6>
                                </div>
                                <div>
                                    {questionsResolution?.map((questionRes) => (
                                        <div key={questionRes.id} className='flex gap-5 mt-6 justify-between'>
                                            <div>
                                                <h6 className='text-base font-normal'>{questionRes?.title}</h6>
                                                <h6 className='bg-[#6C757D] px-2 py-2 rounded text-white text-xs w-fit mt-2' >Weight: {questionRes.weight}%</h6>
                                            </div>
                                            <div className='relative '>
                                                <input type='text'
                                                    className={`border border-[#CED4DA] w-[88px] px-3 py-[6px] rounded ${qualityScore ? '' : 'bg-[#E9ECEF]'}`}
                                                    value={questionRes?.score}
                                                    placeholder='100'
                                                    disabled={!qualityScore}
                                                    onChange={(e) => handleInputChangeResolution(questionRes.id, e.target.value)} />
                                                {qualityScore && <span className='absolute top-[6px] left-[60px] '><i className="bi bi-pencil-fill text-[#6C757D]"></i></span>}
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default CallDetails