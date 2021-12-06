import React from 'react'
import Button from "./Button"
const WantToKnow = ({ text }) => {
    return (
        <section className="WTK">
            <div className="max-xl container-p grid md:grid-cols-12 lg:grid-cols-2 py-12 gap-4 flex items-center" >
                <h2 className="font-bold md:col-span-9 lg:col-span-1">
                    {text}
                </h2>
                <div className=" md:col-span-3 lg:col-span-1 md:ml-auto">
                    <Button />
                </div>
            </div>
        </section>
    )
}

export default WantToKnow
 