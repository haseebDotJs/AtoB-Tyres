import React from 'react'

import Header from "../../../Components/Header/Header"
import Hero from "../../../Components/Hero/Hero"
import Success from "../../../Components/Success/Success";
import WantToKnow from "../../../Components/Common/WantToKnow";
import Responsive from "../../../Components/Responsive/Responsive";
import BrandingCar from "../../../Components/BrandingCar/BrandingCar";
import BookFitting from "../../../Components/BookFitting/BookFitting";
import Tyres from "../../../Components/Tyres/Tyres";
import CaseStudies from "../../../Components/CaseStudies/CaseStudies";
import ReadyToStart from "../../../Components/ReadyToStart/ReadyToStart";
import Footer from "../../../Components/Footer/Footer";

const text1 = "Want to know more about our SEO services?"
const text2 = "Want to know more about our web development services?"
const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Success />
            <WantToKnow text={text1} />
            <Responsive />
            <WantToKnow text={text2} />
            <BrandingCar />
            <BookFitting />
            <Tyres />
            <CaseStudies />
            <ReadyToStart />
            <Footer />
        </div>
    )
}

export default Home
