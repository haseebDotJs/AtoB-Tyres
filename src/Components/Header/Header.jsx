import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion/dist/es/index"
import { Link, useLocation } from "react-router-dom"


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

    const navigationItem = [
        {
            id: 1,
            navItem: "services",
            link: "/service",
            active: false
        },
        {
            id: 2,
            navItem: "about",
            link: "/about",
            active: false
        },
        {
            id: 3,
            navItem: "blog",
            link: "/blog",
            active: false
        },
        {
            id: 4,
            navItem: "portfolio",
            link: "/portfolio",
            active: false
        },
        {
            id: 5,
            navItem: "contact",
            link: "/contact",
            active: false
        }
    ]
    const [navItems, setNavItems] = useState(navigationItem)
    const { pathname } = useLocation()
    useEffect(() => {
        const activateNav = navItems.map(item => item.link === pathname ? { ...item, active: true } : { ...item, active: false })
        setNavItems(activateNav)

    }, []);



    const handleNavClick = (link) => {
        const activateNav = navItems.map(item => item.link === link ? { ...item, active: true } : { ...item, active: false })
        setNavItems(activateNav)
    }
    return (
        <header className="header container-p">
            <div className="header__top grid grid-cols-2 flex justify-between items-center mx-auto py-7 max-lg">
                <Link to="/">
                    <div className="flex">
                        <svg width={40} height={40} viewBox="0 0 101 101"><defs><style dangerouslySetInnerHTML={{ __html: ".logo-a{fill:#111;}.logo-b{fill:#ffd100;}.logo-c{fill:#fff;}" }} /></defs><g transform="translate(0.514 0.514)"><circle className="logo-a" cx="50.5" cy="50.5" r="50.5" transform="translate(-0.514 -0.514)" /><path className="logo-b" d="M275.382,240.86,249.74,285.021h50.334l-39.413-7.6,13.771-21.843L295.8,276.949Z" transform="translate(-224.79 -216.803)" /><path className="logo-c" d="M280.6,294.013l-30.865,3.753,24.692-42.736-13.771,35.139Z" transform="translate(-224.79 -229.548)" /></g></svg>
                        <h4 className="font-medium ml-3 header__logo-text">Element Softworks</h4>
                    </div>
                </Link>
                {/* hamburger for mobile */}
                <div className="header__hamburger ml-auto" onClick={() => setHamburgerOpen(!hamburgerOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
                {/* nav items for desktop */}
                <div className="header__desktop-menu ml-auto flex items-center relative">
                    {navItems.map(item => (
                        item.link === "service" ?
                            <div className="flex justify-center items-center header__desktop-menu--service" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                                <div>
                                    <Link to="/service" onClick={() => handleNavClick(item.link)}>
                                        <p className={`text-center font-medium header__nav-item py-2 ${item.active && "color-olive"}`} >
                                            {item.navItem}
                                        </p>
                                    </Link>
                                    <div className="w-4 ml-4" >
                                        {dropdown ? DropUp : DropDown} haseeb
                                    </div >
                                    {dropdown && <div className="header__desktop-menu--service-options" >
                                        <div className="header__desktop-menu--service-options--container">
                                            <Link to="/service/app-development">
                                                <p className="header__desktop-menu--service-options--container--services py-3 mx-4 font-medium">
                                                    App Development
                                                </p>
                                            </Link>
                                            <Link to="/service/app-development">
                                                <p className="header__desktop-menu--service-options--container--services py-3 px-4 font-medium">
                                                    Web Platforms
                                                </p>
                                            </Link>
                                            <Link to="/service/app-development">
                                                <p className="header__desktop-menu--service-options--container--services py-3 px-4 font-medium">
                                                    Graphic Design
                                                </p>
                                            </Link>
                                        </div>
                                    </div>
                                    }
                                </div>
                            </div>
                            :
                            <Link to={item.link} onClick={() => handleNavClick(item.link)}>
                                <p className={`ml-12 font-medium header__nav-item py-2 ${item.active && "color-olive"}`}>
                                    {item.navItem}
                                </p>
                            </Link>
                    )
                    )}

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
                            {navItems.map(item => (
                                item.link === "service" ?
                                    <div>
                                        <div className="flex justify-center items-center" onClick={() => setServiceOpen(true)}>
                                            <Link to="/service">
                                                <p className={`p-xl text-center font-bold header__mobile-menu--nav-item ${item.active && "color-olive"}`}>
                                                    {item.navItem}
                                                </p>
                                            </Link>
                                            <div className="w-8 ml-2" >
                                                {DropDown}
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <Link to={item.link}>
                                        <p className={`mt-12 p-xl font-bold header__mobile-menu--nav-item ${item.active && "color-olive"}`}>
                                            {item.navItem}
                                        </p>
                                    </Link>
                            ))}
                            {serviceOpen && <div className="header__mobile-menu--serviceOpen flex items-center justify-center">
                                <div style={{ marginTop: "-80px" }}>

                                    <div className="flex justify-center items-center" onClick={() => setServiceOpen(false)}>
                                        <Link to="/service">
                                            <p className="p-xl text-center font-bold header__mobile-menu--nav-item">
                                                Services
                                            </p>
                                        </Link>
                                        <div className="w-8 ml-2" >
                                            {DropUp}
                                        </div >
                                    </div>
                                    <Link to="/service/app-development">
                                        <p className="mt-12 p-xl font-bold">
                                            App Development
                                        </p>
                                    </Link>
                                    <Link to="/service/web-platforms">
                                        <p className="mt-12 p-xl font-bold">
                                            Web Platforms
                                        </p>
                                    </Link>
                                    <Link to="/service/graphic-design">
                                        <p className="mt-12 p-xl font-bold">
                                            Graphic Design
                                        </p>
                                    </Link>
                                </div>
                            </div>
                            }
                        </div>
                    </motion.div >
                }
            </AnimatePresence>

        </header >
    )
}

export default Header
