import React from 'react'
import SepetLeft from '../components/Sepet/SepetLeft'
import SepetRight from '../components/Sepet/SepetRight'
import SepetCards from '../components/Sepet/SepetCards'

function Sepet() {
    return (
        <>
            <div className="sepet-con">
                <div className="sepet-fluit">
                    <div className="row">
                        <div className="col-9">
                            <SepetLeft />
                            <div className="bottom none">
                                <button className="btn" type="button">
                                    <p>
                                        Sepeti Onayla
                                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill='white' viewBox="0 0 320 512">
                                            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                                        </svg>
                                    </p>
                                </button>
                            </div>
                            <SepetCards />
                        </div>
                        <div className="col-3 display">
                            <SepetRight />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sepet