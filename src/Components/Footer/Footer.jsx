import React from 'react'
// import messenger from "../../images/3069715_circle_facebook messenger_messenger_round icon_social icon_icon.svg"
const Footer = () => {
    return (
        <footer className="footer yellow-bg">
            <div className="max-xl container-p ">
                <div className="py-3 lg:flex lg:justify-between ">
                    <div className="flex py-3">
                        <p className="footer__text p-reg font-black "><a href="#">Facebook</a></p>
                        <p className="footer__text p-reg font-black ml-5"><a href="#">Twitter</a></p>
                        <p className="footer__text p-reg font-black ml-5"><a href="#">Instagram</a></p>
                    </div>
                    <div className="flex py-3">
                        <p className="footer__text p-reg font-black"><a href="#">Terms and conditions</a></p>
                        <p className="footer__text p-reg font-black ml-5"><a href="#">Privacy policy</a></p>
                    </div>
                </div>
            </div>
            <div className="divider" />
            <div className="max-xl container-p lg:flex lg:justify-between lg:items-end pt-10 pb-12">
                <div className="flex">
                    <svg width={40} height={40} viewBox="0 0 101 101"><defs><style dangerouslySetInnerHTML={{ __html: ".logo-a{fill:#111;}.logo-b{fill:#ffd100;}.logo-c{fill:#fff;}" }} /></defs><g transform="translate(0.514 0.514)"><circle className="logo-a" cx="50.5" cy="50.5" r="50.5" transform="translate(-0.514 -0.514)" /><path className="logo-b" d="M275.382,240.86,249.74,285.021h50.334l-39.413-7.6,13.771-21.843L295.8,276.949Z" transform="translate(-224.79 -216.803)" /><path className="logo-c" d="M280.6,294.013l-30.865,3.753,24.692-42.736-13.771,35.139Z" transform="translate(-224.79 -229.548)" /></g></svg>
                    <h4 className="font-medium ml-3">Element Softworks</h4>
                </div>
                <div>
                    <div className="flex mt-3 lg:justify-end lg:mt-0">
                        <p className="p-reg">Company No. <span className="font-bold">09486419</span></p>
                        <p className="p-reg ml-4">VAT No. <span className="font-bold">GB279997505</span></p>
                    </div>
                    <p className="p-reg mt-4 ">Element Softworks Ltd. Registered company in England and Wales 2015-2021 ©</p>

                </div>
            </div>
        </footer>
    )
}

export default Footer
