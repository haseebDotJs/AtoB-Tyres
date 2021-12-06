import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion/dist/es/index"
const DropDown = <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" className="svg-inline--fa fa-chevron-down fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" color="#000000"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" /></svg>

const DropUp = <svg transform='rotate(180)' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" className="svg-inline--fa fa-chevron-down fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" color="#000000"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" /></svg>

const Header = () => {
    // service Open state for mobile version of service
    const [serviceOpen, setServiceOpen] = useState(false)
    const [hamburgerOpen, setHamburgerOpen] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const onMouseEnter = () => {
        setDropdown(true)
    }
    const onMouseLeave = () => {
        setDropdown(false)
    }
    // slide in animations of mobile menu
    const containerVariant = {
        visible: {
            x: 0,
            transition: {
                duration: 0.2,
            },
        },
        hidden: {
            x: "100vw",
        },
        exit: {
            x: "100vw"
        }
    }

    return (
        <header className="header container-p">
            <div className="header__top grid grid-cols-2 flex justify-between items-center mx-auto py-7 max-lg">
                <div className="flex">
                    <svg width={40} height={40} viewBox="0 0 101 101"><defs><style dangerouslySetInnerHTML={{ __html: ".logo-a{fill:#111;}.logo-b{fill:#ffd100;}.logo-c{fill:#fff;}" }} /></defs><g transform="translate(0.514 0.514)"><circle className="logo-a" cx="50.5" cy="50.5" r="50.5" transform="translate(-0.514 -0.514)" /><path className="logo-b" d="M275.382,240.86,249.74,285.021h50.334l-39.413-7.6,13.771-21.843L295.8,276.949Z" transform="translate(-224.79 -216.803)" /><path className="logo-c" d="M280.6,294.013l-30.865,3.753,24.692-42.736-13.771,35.139Z" transform="translate(-224.79 -229.548)" /></g></svg>
                    <h4 className="font-medium ml-3 header__logo-text">Element Softworks</h4>
                </div>
                {/* hamburger for mobile */}
                <div className="header__hamburger ml-auto" onClick={() => setHamburgerOpen(!hamburgerOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
                {/* nav items for desktop */}
                <div className="header__desktop-menu ml-auto flex items-center relative">
                    <div className="flex justify-center items-center header__desktop-menu--service" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <p className="text-center font-medium header__nav-item py-2" ><a href="#">Services</a></p>
                        <div className="w-4 ml-4" >
                            {dropdown ? DropUp : DropDown  }
                        </div >
                        {dropdown && <div className="header__desktop-menu--service-options" >
                            <div className="header__desktop-menu--service-options--container">
                                <p className="header__desktop-menu--service-options--container--services py-3 px-4 font-medium"><a href="#">App Development</a></p>
                                <p className="header__desktop-menu--service-options--container--services py-3 px-4 font-medium"><a href="#">Web Platforms</a></p>
                                <p className="header__desktop-menu--service-options--container--services py-3 px-4 font-medium"><a href="#">Graphic Design</a></p>
                            </div>
                        </div>
                        }
                    </div>
                    <p className="ml-12 font-medium header__nav-item py-2 "><a href="#">About</a></p>
                    <p className="ml-12 font-medium header__nav-item py-2 "><a href="#">Blog</a></p>
                    <p className="ml-12 font-medium header__nav-item py-2 "><a href="#">Portfolio</a></p>
                    <p className="ml-12 font-medium header__nav-item py-2 "><a href="#">Contact</a></p>
                </div>
            </div>
            <AnimatePresence>
                {hamburgerOpen &&
                    <motion.div className="header__mobile-menu text-center flex items-center justify-center"
                        variants={containerVariant}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div style={{ marginTop: "-80px" }}>
                            <div>
                                <div className="flex justify-center items-center" onClick={() => setServiceOpen(true)}>
                                    <p className="p-xl text-center font-bold header__mobile-menu--nav-item"><a href="#">Services</a></p>
                                    <div className="w-8 ml-2" >
                                        {DropDown}
                                    </div>
                                </div>
                                {serviceOpen && <div className="header__mobile-menu--serviceOpen flex items-center justify-center">
                                    <div style={{ marginTop: "-80px" }}>
                                        <div className="flex justify-center items-center" onClick={() => setServiceOpen(false)}>
                                            <p className="p-xl text-center font-bold header__mobile-menu--nav-item"><a href="#">Services</a></p>
                                            <div className="w-8 ml-2" >
                                                {DropUp}
                                            </div >
                                        </div>
                                        <p className="mt-12 p-xl font-bold"><a href="#">App Development</a></p>
                                        <p className="mt-12 p-xl font-bold"><a href="#">Web Platforms</a></p>
                                        <p className="mt-12 p-xl font-bold"><a href="#">Graphic Design</a></p>
                                    </div>
                                </div>
                                }
                            </div>
                            <p className="mt-12 p-xl font-bold header__mobile-menu--nav-item"><a href="#">About</a></p>
                            <p className="mt-12 p-xl font-bold header__mobile-menu--nav-item"><a href="#">Blog</a></p>
                            <p className="mt-12 p-xl font-bold header__mobile-menu--nav-item"><a href="#">Portfolio</a></p>
                            <p className="mt-12 p-xl font-bold header__mobile-menu--nav-item"><a href="#">Contact</a></p>
                        </div>
                    </motion.div >
                }
            </AnimatePresence>

        </header >
    )
}

export default Header
