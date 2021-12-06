import React, { useEffect, useState } from 'react'
import hero from "../../images/case-studies-ab-tyres-hero.png"
const Hero = () => {
    // blurring image for 1 second
    const [blur, setBlur] = useState("filter blur-lg")

    useEffect(() => {
        setTimeout(() => {
            setBlur("")
        }, 1500);
    }, []);

    return (
        <section className="hero light-bg">
            <div >
                <div className="hero__heading  mx-auto" >
                    <div className="max-sm container-p pt-4 pb-8">
                        <h1 className="font-bold mt-6">A to B Tyres</h1>
                        <p className="p-lg leading-9">Creating a presence for a global marketplace that attracts ultra high networth individuals & companies.</p>
                    </div>
                </div>
                <div className={`hero__image ${blur} `}>
                    <img className="block" src={hero} alt="hero" width="100%" height="100%" />
                </div>
            </div>
            <div className="hero__info ">
                <div className="container-p max-xl pt-16 pb-12 grid gird-cols-1 sm:grid-cols-2 color-white">
                    <div>
                        <div>
                            <h3 >Client</h3>
                            <p className="p-lg">A to B Tyres</p>
                        </div>
                        <div className="my-12">
                            <h3>Purpose</h3>
                            <p className="p-lg">Website, Photography</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>Project</h3>
                            <p className="p-lg">Ben from A to B Tyres required to be at every search for anything tyre related, withing the Ipswich area.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
