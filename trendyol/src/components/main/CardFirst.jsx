import React, { useEffect, useState } from 'react'

function CardFirst({ cards }) {
    return (
        <>
            <div className="card-first-con">
                <div className="card-first-fluit">
                    <div className="row">
                        {
                            cards?.map(card => {
                                return (
                                    <div className="col-4 card-first">
                                        <img src={card.imgurl} alt="" />
                                        <div className="div-p">
                                            <p> {card.text} </p>
                                            <span>Alışverişe Başla <svg width="14" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clip-rule="evenodd" d="M7.35925 3.93057C8.02872 3.2611 9.11415 3.2611 9.78362 3.93057L16.6408 10.7877C17.3102 11.4572 17.3102 12.5426 16.6408 13.2121L9.78362 20.0692C9.11415 20.7387 8.02872 20.7387 7.35925 20.0692C6.68978 19.3998 6.68978 18.3143 7.35925 17.6449L13.0042 11.9999L7.35925 6.35494C6.68978 5.68547 6.68978 4.60004 7.35925 3.93057Z" fill="currentColor" />
                                            </svg></span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardFirst