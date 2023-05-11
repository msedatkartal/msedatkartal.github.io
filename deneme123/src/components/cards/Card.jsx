import React from 'react'

function Card( {card} ) {
    return (
        <>
            <div className="card egitimler mb-3">
                <div className="d-flex">
                    <div className="col-md-2" style={{margin:"auto", width:"25%"}}>
                        <img src= {card.imgurl} className="img-fluid rounded-start" alt= {card.title} />
                    </div>
                    <div className="col">
                        <div className="card-body">
                            <h5 className="card-title">{card.title}</h5>
                            <p className="card-text"> {card.text} </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card