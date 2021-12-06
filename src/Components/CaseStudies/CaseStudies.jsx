import React from 'react'
import Button from "../Common/Button"
import pic1 from "../../images/atob-site.png"
import pic2 from "../../images/gundies-desktop.png"
import pic3 from "../../images/lv-site.jpg"
import Card from './Card'

const CaseStudies = () => {
    const cardData = [
        {
            cardOptions: ["Web Platforms", "Graphic Design", "Animation", "API Development", "Layout Design and Print", "SEO", "UX", "Web Design", "Web Development"],
            heading: "A to B tyres",
            subHeading: "Creating a presence for a global marketplace that attracts ultra high networth individuals & companies.",
            pic: pic1
        },
        {
            cardOptions: ["Favourite", "Web Platforms", "Graphic Design", "Animation", "API Development", "Layout Design and Print", "SEO", "UX", "Web Design", "Web Development"],
            heading: "Gundies",
            subHeading: "The Gundies is an annual voting &amp; award ceremony spotlighting the top creators in the firearm community. Featuring over 2 million views per month.",
            pic: pic2
        },
        {
            cardOptions: ["Web Platforms", "Graphic Design", "Animation", "API Development", "Layout Design and Print", "SEO", "UX", "Web Design", "Web Development"],
            heading: "Lit Vodka",
            subHeading: "Assisting an emerging distillery that has a unique audience base establish  a digital presence.",
            pic: pic3
        }
    ]

    return (
        <section className="caseStudies light-bg " >
            <div className="max-xl container-ez">
                <div className="md:flex md:justify-between">
                    <h2 className="font-bold">Our recent case studies</h2>
                    <div className="mt-4 md:mt-0">
                        <Button btn="btn-md" text="View all case studies" />
                    </div>
                </div>
                <div >
                    <div className="mt-20 grid lg:grid-cols-3 gap-8 ">
                        {
                            cardData.map(data => (
                                <Card pic={data.pic} cardOptions={data.cardOptions} heading={data.heading} subHeading={data.subHeading} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CaseStudies
