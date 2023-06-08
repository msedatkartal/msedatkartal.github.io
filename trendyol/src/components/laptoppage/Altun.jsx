import React from 'react'

function Altun() {
    const cards = [
        {
            id: 1,
            img: "img/laptop/2.webp",
            text: "TRog Strıx G15 R7-6800h 32gb 1tb Ssd Rtx3050/4gb 15.6",
            money: "30.150,67 TL",
        },
        {
            id: 2,
            img: "img/laptop/3.webp",
            text: "Gaming G15 5511 I5 11400h 16gb 512gb Ssd Rtx3050 W11p 15.6",
            money: "21.271,36 TL",
        },
        {
            id: 3,
            img: "img/laptop/4.webp",
            text: "Victus 16-d1016nt I7 12700h 32gb 2tb Ssd Rtx3050 16.1 Inç W11p ",
            money: "31.770,35 TL",
        },
    ]
    return (
        <>
            <div className="altun">
                <img src="img/laptop/1.webp" alt="" />
                <div className="title">
                    <p>ALTUN ELEKTRİK<span>8.5</span></p>
                    <div className="text d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#666666" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                        </svg>
                        <p>Sponsorlu</p>
                    </div>
                </div>
            </div>
            <div className="threelaptop d-flex">
                {
                    cards?.map(card => {
                        return (
                            
                            <div key={card?.id} className="card me-3 mb-3 kart" style={{ maxWidth: " 231px", height: "110px", overflow: "hidden" }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={card.img} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <p className="card-text"> {card.text} </p>
                                            <p className="card-text"><small className="text-body"> {card.money} </small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        )
                    })
                }


            </div>
        </>
    )
}

export default Altun