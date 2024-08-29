// Modal.js
import React from 'react';

const CallSummaryModel = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto backdrop-brightness-50">
            <div className="relative p-4 w-full max-w-2xl max-h-full min-w-[960px]">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700" style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px' }}>
                    {/* Modal header */}
                    <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                            Call Summary
                        </h3>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={onClose}
                        >
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* Modal body */}
                    <div className="p-4 pb-1 space-y-4 text-lg">
                        Lorem ipsum dolor sit amet consectetur. Pellentesque eget laoreet posuere malesuada et montes pharetra vitae tortor. Orci parturient condimentum ullamcorper proin odio purus sed. Mollis neque sollicitudin lectus arcu vitae. Lectus urna augue adipiscing in. Felis varius habitant velit lacus euismod in. Lectus eu sollicitudin purus at magna risus. Sollicitudin quam consequat commodo pellentesque neque tincidunt. Neque bibendum consectetur consequat placerat varius sed at vitae. Nulla sollicitudin sagittis sollicitudin nunc urna penatibus quis dignissim pretium. Senectus eu aliquam arcu integer. Congue morbi id id mattis turpis mi eget pellentesque. Erat leo feugiat mattis varius lectus mauris mi eget facilisis. Praesent fermentum lectus pretium lectus id gravida proin. Amet vel vitae in erat et. Tincidunt lectus augue blandit sapien sed diam. In eget quisque placerat rhoncus massa elementum egestas arcu feugiat. Egestas sit phasellus in quam. Netus auctor id non egestas turpis id gravida. Sit convallis sed risus cursus. Vel arcu posuere bibendum tellus odio arcu. Orci mattis donec mi a lorem eget tellus. Euismod mauris sodales vehicula et egestas natoque fusce. Dui nulla egestas vulputate turpis vitae eget in. Neque nibh neque pharetra massa arcu aliquam vehicula lobortis. Natoque tincidunt mauris curabitur dolor mi blandit donec convallis proin. Ipsum pellentesque sapien gravida sed vulputate. Faucibus senectus bibendum mi cras enim eget lacus turpis maecenas. Est a et ultricies consequat nulla sed sed duis vestibulum. Commodo mauris vitae cursus risus sit. Mauris metus est arcu malesuada amet. Tincidunt auctor gravida nisl odio elit consectetur phasellus condimentum. Enim mi nascetur viverra ipsum enim commodo in mi. Commodo arcu platea libero pellentesque amet ut. Eget faucibus pellentesque ultricies in sit molestie ut nulla.
                    </div>
                    {/* Modal footer */}
                    <div className="flex items-center justify-end p-3 border-t border-gray-200 rounded-b dark:border-gray-600">

                        <button
                            type="button"
                            className="py-2.5 px-5 ms-3 text-sm font-medium text-white focus:outline-none bg-[#0D6EFD] rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallSummaryModel;
