import React from 'react'
import SmileIcon from '../assets/images/face-smile.svg'
import ExpressionlessIcon from '../assets/images/face-expressionless.svg'
import ConfusedIcon from '../assets/images/face-confused.svg'
import ClockIcon from '../assets/images/clock.svg'
import ScoreTables from '../components/callEvulution/ScoreTables'
import WordCloudUI from '../components/callEvulution/WordCloudPhases.js'
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
            <div className='mx-[60px]'>
                <div className='my-6'>
                    <div className='flex justify-center w-full gap-6 '>
                        <div className='border border-solid  rounded-lg w-full bg-white' style={{ boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.08)' }}>
                            <div className='flex justify-between items-center bg-[#ECF1F6] rounded-t-lg px-4 py-3'>
                                <div className='gap-3 flex'>
                                    <i className="bi bi-calendar"></i>
                                    <span className='font-bold text-base'>As on 01-08-2024</span>
                                </div>
                                <div className='font-medium text-[#0D6EFD]'>
                                    Review
                                </div>
                            </div>
                            <div className='flex'>
                                {/* <div className='border-r w-full h-full'> */}
                                    <div className='flex flex-col justify-center items-center py-[56px] border-r w-full'>
                                        <i className="bi bi-headset text-[#FF0074] text-[48px]"></i>
                                        <h6 className='text-[16px] font-medium'>Calls</h6>
                                        <h6 className='text-[64px] font-light'>400</h6>
                                    </div>
                                {/* </div> */}
                                <div className='flex flex-col justify-center w-full py-5 px-6 gap-5'>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex items-center gap-2'>
                                            <i className="bi bi-check-all  text-[#198754] text-[40px]"></i>
                                            <h6>AI Evaluated</h6>
                                        </div>
                                        <h6 className='text-2xl font-medium'>360</h6>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex items-center gap-2'>
                                            <img src={ClockIcon} alt='clock' />
                                            <h6>Pending Review</h6>
                                        </div>
                                        <h6 className='text-2xl font-medium'>40</h6>
                                    </div>
                                </div>
            
                            </div>
                        </div>


                        <div className='border rounded-lg w-full bg-white' style={{ boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.08)' }}>
                            <div className='flex justify-between items-center bg-[#ECF1F6] rounded-t-lg px-4 py-3'>
                                <div className='font-bold text-base'>
                                    Score & Sentiment
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='flex flex-col items-center py-[56px] border-r w-full'>
                                    <i className="bi bi-headset  text-[#FF0074] text-[48px]"></i>

                                    <h6 className='text-[16px] font-medium'>Average Quality Score</h6>
                                    <div className='flex'>
                                        <h6 className='text-[64px] font-light'>81</h6>
                                        <span className='flex items-center ms-3 mb-3 text-[#6C757D]'><sup>/100</sup></span>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center w-full py-5 px-6 gap-5'>
                                    {/* <h6 className='text-[28px] font-medium'>Sentiments</h6> */}
                                    <div className='flex justify-between items-center'>
                                        <div className='flex items-center gap-2'>
                                            <img src={SmileIcon} alt='smile' />
                                            <h6>Positive</h6>
                                        </div>
                                        <h6 className='text-2xl font-medium'>300</h6>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex items-center gap-2'>
                                            <img src={ExpressionlessIcon} alt='Expressionless' />
                                            <h6>Neutral</h6>
                                        </div>
                                        <h6 className='text-2xl font-medium'>36</h6>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex items-center gap-2'>
                                            <img src={ConfusedIcon} alt='confused' />
                                            <h6>Negative</h6>
                                        </div>
                                        <h6 className='text-2xl font-medium'>24</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center w-full mt-6 gap-6 '>
                        {data?.map((item) => (
                            <div
                                key={item.id}
                                className='w-full border rounded-lg bg-white'
                                style={{ boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.08)' }}
                            >
                                <div className='p-5 flex items-center gap-4'>
                                    <i className={`bi ${item?.icon} text-[#FF0074] text-[40px]`}></i>
                                    <h6 className='text-2xl font-medium'>{item.title}</h6>
                                </div>

                                <div className='flex flex-col gap-3 p-5 pt-2'>
                                    <div className='flex justify-between items-center'>
                                        <h6 className='font-medium text-xl text-[#6C757D]'>Total Calls</h6>
                                        <h6 className='text-xl font-medium'>{item.totalCalls}</h6>
                                    </div>

                                    <div className='flex justify-between items-center'>
                                        <h6 className='font-medium text-xl text-[#6C757D]'>AI Evaluated</h6>
                                        <h6 className='text-xl font-medium'>{item.aiEvaluated}</h6>
                                    </div>

                                    <div className='flex justify-between items-center'>
                                        <h6 className='font-medium text-xl text-[#6C757D]'>Pending Review</h6>
                                        <h6 className='text-xl font-medium'>{item.pendingReview}</h6>
                                    </div>
                                </div>

                                <div className='border-t'>
                                    <div className='flex justify-between items-center p-5'>
                                        <h6 className='font-medium text-xl text-[#6C757D]'>Pending Review</h6>
                                        <h6 className='text-xl font-medium'>{item.pendingReview}</h6>
                                    </div>
                                    <div className='pt-2 pb-5 px-9 flex justify-between'>
                                        <div className='flex flex-col items-center'>
                                            <img src={SmileIcon} alt='smile' width={80} height={80} />
                                            <h6 className='text-[40px] mt-2 font-light'>{item.smileCount}</h6>
                                        </div>
                                        <div className='flex flex-col items-center'>
                                            <img src={ExpressionlessIcon} alt='Expressionless' width={80} height={80} />
                                            <h6 className='text-[40px] mt-2 font-light'>{item.expressionlessCount}</h6>
                                        </div>
                                        <div className='flex flex-col items-center'>
                                            <img src={ConfusedIcon} alt='confused' width={80} height={80} />
                                            <h6 className='text-[40px] mt-2 font-light'>{item.confusedCount}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-center mb-5'>
                                    <h6 className='text-base font-normal text-[#0D6EFD]'>Review</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* score table */}
                <div>
                    <ScoreTables />

                </div>
                <div className='flex gap-6'>
                    <WordCloudPhases words={positiveWords} title={'Top 5 Phrases (Positive)'}/>
                    <WordCloudPhases words={negativeWords} title={'Top 5 Phrases (Negative)'}/>
                </div>

            </div>
        </div>
    )
}

export default CallEvaluation