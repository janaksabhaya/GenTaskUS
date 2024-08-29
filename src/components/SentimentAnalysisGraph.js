import React from 'react';

const SentimentAnalysisGraph = ({ data }) => {
    return (
        // <div className="relative bg-red-100 p-4 rounded-lg shadow overflow-hidden h-64">
        //     {data.map((item, index) => (
        //         <div key={index} className="flex items-center mb-1">
        //             <div className={`w-4 h-60 flex-shrink-0 ${item.type === 'F' ? 'bg-orange-500' : item.type === 'H' ? 'bg-gray-400' : ''}`}>
        //                 {item.type && <span className="absolute text-xs text-white -top-2">{item.type}</span>}
        //             </div>
        //             <div className="flex-1 h-full relative">
        //                 <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center z-50">
        //                     {item.sentiments.map((sentiment, i) => (
        //                         <div key={i} className={`h-2 w-${sentiment?.width} mx-1 ${sentiment?.color === 'pink' ? 'bg-pink-500' : 'bg-blue-500'}`} />
        //                     ))}
        //                 </div>
        //             </div>
        //         </div>
        //     ))}
        // </div>
        
        <div className="flex items-center space-x-4">
            <div className="w-full">
                <div className="flex justify-between mb-2 text-sm text-gray-600">
                    <span>F</span>
                    <span>H</span>
                    <span>F</span>
                </div>
                <div className="flex flex-col">
                    {data.map((item, index) => (
                        <div key={index} className="relative mb-2">
                            {/* Graph bars */}
                            {item?.sentiments.map((segment, i) => (
                                <div
                                    key={i}
                                    className={`absolute h-2 ${segment?.color} top-0`}
                                    style={{ width: `${segment.width}%`, left: `${segment.left}%` }}
                                />
                            ))}
                            {/* Voice Interruption (F) */}
                            {item?.type === 'F' && (
                                <div className="h-4 bg-orange-500 relative w-full mt-2"></div>
                            )}
                            {/* Hold (H) */}
                            {item?.type === 'H' && (
                                <div className="h-4 bg-gray-500 relative w-full mt-2"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SentimentAnalysisGraph;
