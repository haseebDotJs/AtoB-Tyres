import React from 'react'
import Card from "./Card"
import { cardInfo } from "./CardInfo"


const CoreTeam = () => {
    console.log("cardInfo", cardInfo[0].name)
    return (
        <div className="coreTeam  light-bg">
            <div className="container-ez max-xl">
                <h2 className="font-semibold mb-5">Our core team</h2>
                <div className="grid md:grid-cols-3 gap-4 justify-center flex flex-col items-center ">
                  {
                      cardInfo.map(info => (
                          <Card name={info.name} position={info.position} details={info.details} image={info.image}/>
                      ))
                  }
                </div>
            </div>
        </div>
    )
}

export default CoreTeam
