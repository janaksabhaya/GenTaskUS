import React from 'react'
import SmileIcon from '../assets/images/face-smile.svg'
import ExpressionlessIcon from '../assets/images/face-expressionless.svg'
import ConfusedIcon from '../assets/images/face-confused.svg'
import ClockIcon from '../assets/images/clock.svg'
import ScoreTables from '../components/callEvulution/ScoreTables'
import WordCloudPhases from '../components/callEvulution/WordCloudPhases.js'

const CallEvaluation = () => {

    const positiveWords = [
        { text: 'Thank', value: 50 },
        { text: 'patience', value: 30 },
        { text: 'help', value: 25 },
        { text: 'appreciate', value: 20 },
        { text: 'understanding', value: 15 },
        { text: 'choosing', value: 25 },
        { text: 'value', value: 30 },
        { text: 'us', value: 30 },
        { text: 'business', value: 30 },
    ];

    const negativeWords = [
        { text: 'Unresolved', value: 50 },
        { text: 'issue', value: 30 },
        { text: 'Poor', value: 25 },
        { text: 'service', value: 20 },
        { text: 'Billing', value: 25 },
        { text: 'Rude', value: 30 },
        { text: 'errors', value: 30 },
        { text: 'behavior', value: 30 },
        { text: 'response', value: 30 },
    ];

    const cardData = [
        {
            icon: <i className="bi bi-headset text-[#FF0074] text-[24px]"></i>,
            label: 'Total Calls',
            value: 400,
        },
        {
            icon: <i className="bi bi-check-all  text-[#198754] text-[24px]"></i>,
            label: 'AI Evaluated',
            value: 360,
        },
        {
            icon: <img src={ClockIcon} alt='clock' />,
            label: 'Pending Review',
            value: 40,
        },
        {
            icon: <i className="bi bi-check-all text-[#FF0074] text-[24px]"></i>,
            label: 'Average Quality Score',
            value: '81/100',
        },
        {
            icon: <img src={SmileIcon} alt='smile' />,
            label: 'Positive',
            value: 300,
        },
        {
            icon: <img src={ExpressionlessIcon} alt='Expressionless' />,
            label: 'Neutral',
            value: 36,
        },
        {
            icon: <img src={ConfusedIcon} alt='Confused' />,
            label: 'Negative',
            value: 24,
        },
    ];


    const data = [
        {
            id: 1,
            title: "Enquiry",
            icon: "bi-question-octagon-fill",
            totalCalls: 140,
            aiEvaluated: 120,
            pendingReview: 20,
            smileCount: 105,
            expressionlessCount: 10,
            confusedCount: 5,
        },
        {
            id: 2,
            title: "Complaint",
            icon: "bi-exclamation-diamond-fill",
            totalCalls: 150,
            aiEvaluated: 130,
            pendingReview: 20,
            smileCount: 110,
            expressionlessCount: 15,
            confusedCount: 5,
        },
        {
            id: 3,
            title: "Order Taking",
            icon: "bi-cart-check-fill",
            totalCalls: 160,
            aiEvaluated: 140,
            pendingReview: 20,
            smileCount: 115,
            expressionlessCount: 20,
            confusedCount: 5,
        },
    ];

    return (
        <div className='mb-5'>
            <div className='mx-3'>
                <div className='my-3'>
                    <div className='flex justify-center w-full gap-6 '>
                        <div className='border border-solid rounded-lg w-full bg-white' style={{ boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.08)' }}>
                            <div className='flex justify-between px-7 py-6'>
                                {cardData.map((item, index) => {
                                    return (
                                        <>
                                            <div key={index} className={`flex gap-4 w-full mr-[28px] ${index !== cardData.length - 1 ? 'border-r' : ''}`} >
                                                <div className='flex justify-center items-center bg-[#E7F1FF] w-[48px] p-3 h-[48px] rounded'>
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <h6 className='text-[#6C757D] text-sm'>{item?.label}</h6>
                                                    <h6 className='text-2xl font-bold'>{item?.value}</h6>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center w-full mt-3 gap-3 '>
                        {data?.map((item) => (
                            <div
                                key={item.id}
                                className='w-full border rounded-lg bg-white'
                                style={{ boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.08)' }}
                            >
                                <div className='p-4 pb-0 flex items-center justify-between '>
                                    <div className='flex items-center gap-4'>
                                        <i className={`bi ${item?.icon} text-[#FF0074] text-[24px]`}></i>
                                        <h6 className='text-2xl font-medium'>{item.title}</h6>
                                    </div>
                                    <div>
                                        <h6 className='text-base font-normal text-[#0D6EFD] underline'>Review</h6>
                                    </div>
                                </div>

                                <div className='flex justify-between p-5'>
                                    <div>
                                        <h6 className='text-[#6C757D] text-sm'>Total Calls</h6>
                                        <h6 className='text-xl font-medium'>{item.totalCalls}</h6>
                                    </div>
                                    <div>
                                        <h6 className='text-[#6C757D] text-sm'>AI Evaluated</h6>
                                        <h6 className='text-xl font-medium'>{item.aiEvaluated}</h6>
                                    </div>
                                    <div>
                                        <h6 className='text-[#6C757D] text-sm'>Pending Review</h6>
                                        <h6 className='text-xl font-medium'>{item.pendingReview}</h6>
                                    </div>
                                </div>

                                <div className='border-t flex justify-between p-5'>
                                    <div className='flex gap-3 border-r w-full mr-[28px]' >
                                        <div className='flex justify-center items-center w-[48px] h-[48px] rounded'>
                                            <img src={SmileIcon} alt='smile' width={44} height={44} />
                                        </div>
                                        <div>
                                            <h6 className='text-[#6C757D] text-sm'>Positive</h6>
                                            <h6 className='text-2xl font-bold'>{item.smileCount}</h6>
                                        </div>
                                    </div>
                                    <div className='flex gap-3 border-r w-full mr-[28px]' >
                                        <div className='flex justify-center items-center w-[48px] h-[48px] rounded'>
                                            <img src={ExpressionlessIcon} alt='smile' width={44} height={44} />
                                        </div>
                                        <div>
                                            <h6 className='text-[#6C757D] text-sm'>Neutral</h6>
                                            <h6 className='text-2xl font-bold'>{item.expressionlessCount}</h6>
                                        </div>
                                    </div>
                                    <div className='flex gap-3 w-full mr-[28px]' >
                                        <div className='flex justify-center items-center w-[48px] h-[48px] rounded'>
                                            <img src={ConfusedIcon} alt='smile' width={44} height={44} />
                                        </div>
                                        <div>
                                            <h6 className='text-[#6C757D] text-sm'>Total Calls</h6>
                                            <h6 className='text-2xl font-bold'>{item?.confusedCount}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* score table */}
                <div>
                    <ScoreTables />

                </div>
                <div className='flex gap-3'>
                    <WordCloudPhases words={positiveWords} title={'Top 5 Phrases (Positive)'} />
                    <WordCloudPhases words={negativeWords} title={'Top 5 Phrases (Negative)'} />
                </div>

            </div>
        </div>
    )
}

export default CallEvaluation