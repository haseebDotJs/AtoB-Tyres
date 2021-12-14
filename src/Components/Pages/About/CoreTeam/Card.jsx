import React, { useState } from 'react'
import { motion } from "framer-motion"


const Card = ({ name, position, details,image }) => {
    console.log("name", name)
    const [hover, setHover] = useState(false)
    const onMouseEnter = () => {
        setHover(true)
    }
    const onMouseLeave = () => {
        setHover(false)
    }
    const containerVariant = {
        visible: {
            height: hover ? "350px" : "130px",
            bottom: -130,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            },
        }
    }
    return (
        <div className={`coreTeam__card rounded-sm  ${hover ? "shadow-xl" : "shadow-md"}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
            <div className="coreTeam__card--image" style={{backgroundImage: `url(${image})`}}/>

            <motion.div
                className={`coreTeam__card--slide overflow-y-hidden bg-white ${hover ? "shadow-xl" : "shadow-md"}`}
                variants={containerVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div className="container-p py-5">
                    <div >
                        <h4 className="font-medium">{name}</h4>
                        <p className="color-dimgray font-semibold">{position}</p>
                        <div className="mt-2">
                            <svg viewBox="0 0 64.8 14" style={{ maxWidth: 50 }}><defs><style dangerouslySetInnerHTML={{ __html: ".cls-1{fill:none;stroke:#ffd100;stroke-linecap:round;stroke-linejoin:round;stroke-width:5px;}" }} /></defs><title>Asset 5package--essential</title><g id="Layer_2" data-name="Layer 2"><g id="Package_03" data-name="Package 03"><polyline className="cls-1" points="2.5 2.93 10.85 11.28 19.07 3.06 27.12 11.11 35.56 2.67 44.38 11.5 53.38 2.5 62.3 11.41" /></g></g></svg>
                        </div>
                    </div>
                    <div className="mt-10">
                        <p>
                            {details}
                        </p>
                    </div>
                </div>
            </motion.div >

        </div>
    )
}

export default Card
