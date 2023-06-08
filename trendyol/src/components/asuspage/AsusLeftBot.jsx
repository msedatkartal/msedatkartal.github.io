import React from 'react'
import { asus_carousel } from "../../assets/data"

function AsusLeftBot() {
    return (
        <>
            <div className="asus-left-bot-con">
                <div className="asus-left-bot-fluit">
                    {
                        asus_carousel.map(asus => {
                            return (
                                <div key={asus.id} className="img-con">
                                    <img src={asus.img} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default AsusLeftBot