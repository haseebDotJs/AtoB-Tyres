import React from 'react'
import success from "../../images/case-studies-ab-tyres-branding-top.png"
const Success = () => {
    return (
        <section className="success light-bg ">
            <div className="max-xl container-ez">
                <div className="mb-20 grid gird-cols-1 sm:grid-cols-2  gap-2 sm:gap-8">
                    <h2 className="font-bold ">With the time A to B Tyres was with us, they saw a _% increase in _ and a _% increase in_.</h2>
                    <div>
                        <div >
                            <p className="p-lg ">
                                Using the mediums of web & photography we equipped Ben with the beggings of a brand to advertising his business within the local area.
                            </p>
                            <p className="p-lg mt-6">
                                This allowed Ben to take advantage of more risky business decisions, such as adding a mobile fitting divisions that turned out well; not only because of the well-received Google advertising, but because of the incorporated tyre search, purchasing & booking system, we encoded into the site.
                            </p>
                        </div>
                    </div>
                </div>
                <div >
                    <img src={success} alt="case-studies-ab-tyres-branding-top" />
                </div>
            </div>
        </section>
    )
}

export default Success
