import React from 'react'
import { more } from "../../assets/data"
function AsusMore() {
    return (
        <>
            <div className="asus-more-con">
                <div className="asus-more-fluit row  row-cols-md-5 row-cols-2">
                    {
                        more?.map(more => {
                            return (
                                <div key={more.id} className="asus-more col">
                                    <div className="more-img">
                                        <img src={more?.img} alt="" />
                                    </div>
                                    <p> {more?.text} </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default AsusMore