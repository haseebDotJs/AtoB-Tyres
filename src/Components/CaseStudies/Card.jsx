import React from 'react'

const Card = ({ pic, cardOptions }) => {
    return (
        <a href="#">
            <div className="transition-all duration-300 hover:shadow-xl cursor-pointer  ">
                <img src={pic} alt="a-to-b tyres" />
                <div className="caseStudies__textContainer p-6 bg-white ">
                    <div className="ml-1">
                        <h4 className="font-medium">A to B Tyres</h4>
                        <p className="overflow-ellipsis mt-4">
                            Creating a presence for a global marketplace that attracts ultra high networth individuals & companies.
                        </p>
                    </div>
                    <div className="mt-4 flex flex-wrap">
                        {cardOptions.map(data => (
                            data === "Favourite" ?
                                <button className="text-gray-900 yellow-bg px-2 mt-1 ml-1 ">
                                    <a href="#" className="p-sm"> {data}</a>
                                </button>
                                :
                                <button className="caseStudies__option text-gray-500 light-gray-bg px-2 mt-1 ml-1  border-2 border-coolGray-500 transition duration-500 ease-in-out ">
                                    <a href="#" className="p-sm"> {data}</a>
                                </button>
                        ))}
                    </div>
                </div>

            </div>
        </a>
    )
}

export default Card
