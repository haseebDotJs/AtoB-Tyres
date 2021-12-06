import React from 'react'
import webDesign from "../../images/case-studies-ab-tyres-branding-site.png"
import Button from "../Common/Button"
const Responsive = () => {
    return (
        <section className="responsive light-bg">
            <div className="container-ez max-xl grid md:grid-cols-2 gap-6">
                <div>
                    <img src={webDesign} alt="responsive web design" />
                </div>
                <div >
                    <div className="sticky top-0">
                        <h2 className="font-bold">
                            A to B's completely responsive website took the market of people needing roadside assistance.
                        </h2>
                        <p className="p-lg mt-4">
                            The Element Softworks team understood that many users had to look up to A to B under the extreme circumstances when they had tyre problems mid journey. This means they would most likely be on their mobile using mobile data on a motorway, where the signal might be unreliable. This is only one of the scenarios that drives Element Softworks to develop clean, quick websites that are accessible by as many people as possible.
                        </p>
                        <p className="p-lg mt-4">
                            If you require our web design services click the button below.
                        </p>
                        <div className="mt-4">
                            <Button />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Responsive
