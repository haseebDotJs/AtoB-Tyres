import React from 'react'
import Button from "../Common/Button"
const ReadyToStart = () => {
    return (
        <section >
            <div className="mx-auto max-md container-ez text-center ">
                <h2 className="font-bold">
                    Ready to start your next big project?
                </h2>
                <p className='p-lg mt-4'>We’re friendly people, get in touch today for a free consultation to learn how we can improve your business</p>
                <div className="flex flex-col justify-center items-center md:flex-row mt-7">
                    <div >
                        <Button text="Contact us"/>
                    </div>
                    <div className="mt-4 md:ml-8 md:mt-0">
                        <Button text="Schedule phone call" btn="btn-lg" modify="border-dark hover-opacity-down fill-transparent"/>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ReadyToStart
