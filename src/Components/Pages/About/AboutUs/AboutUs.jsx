import React from 'react'
import AboutUsImg from "../../../../images/about/about-us.svg"
const AboutUs = () => {
    return (
        <>
            <div className="aboutUs flex items-center justify-center">
                <div className="max-xsm text-center container-p">
                    <h1 className="font-semibold">About us</h1>
                    <p className="p-md leading-6">We are dedicated team working on the latest technologies to serve our clients from all around the world with bespoke and innovative solutions.</p>
                    <div className="aboutUs__image mt-10">
                        <img alt="About Us graphic" src={AboutUsImg} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs
