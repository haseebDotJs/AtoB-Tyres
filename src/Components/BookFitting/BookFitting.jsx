import React from 'react'
import Button from "../Common/Button"
import phones from "../../images/case-studies-ab-tyres-branding-phones.png"
const BookFitting = () => {
    return (
        <section className="bookFitting light-bg">
            <div className="max-xl container-ez grid md:grid-cols-2 gap-12">
                <div>
                    <p className="p-lg font-medium">
                        The website was later upgraded with a tyre information database which used a cars number plate to fetch information about wheel sizes and tyres. Users can go through the process of easily finding, ordering and booking fitment of their tyres.
                    </p>
                    <p className="p-lg mt-4 font-medium">
                        If you would like to know more about database integration and APIs, click the button below.
                    </p>
                    <div className="mt-4">
                        <Button />
                    </div>
                    <div className="mt-20 flex flex-col items-center">
                        <div>
                            <h3 className="font-bold">Book Your Mobile Fitting</h3>
                            <div className="mt-6 mx-auto">
                                <Button text="Enter Registration" btn="btn-lg" />
                            </div>
                            <div className="mt-6 mx-auto">
                                <Button text="Search" bgColor="red-bg" btn="btn-lg" modify="border-yellow" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={phones} alt="phones" />
                </div>
            </div>
        </section>
    )
}

export default BookFitting
