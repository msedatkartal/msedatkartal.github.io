import React from 'react'

function CardLaptop({ cards }) {
    return (
        <>
            <div className="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2">
                {
                    cards.map(ship => {
                        return (
                            <div key={ship.id} className="col laptops">
                                <a href="/asus">
                                    <div className="card">
                                        <div className="card-left-top-con">
                                            <div className="free box123" style={{ display: `${ship.free}` }}>
                                                <svg style={{ width: "32px", height: "16px" }} xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-box" viewBox="0 0 16 16">
                                                    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                                                </svg>
                                                <p>KARGO BEDAVA</p>
                                            </div>
                                            <div className="fast box123" style={{ display: `${ship.fast}` }}>
                                                <svg style={{ width: "16px", height: "16px", color: "white", position: "absolute", left: "2px" }} xmlns="http://www.w3.org/2000/svg" fill='white' viewBox="0 0 640 512">
                                                    <path d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
                                                </svg>
                                                <p>HIZLI TESLİMAT</p>
                                            </div>
                                            <div className="img" style={{ display: `${ship?.imgleftdisplay}` }}>
                                                <img src={ship?.imgleft} alt="" />
                                            </div>
                                        </div>
                                        <div className="card-right-top-con">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M22.025 3.07565C22.6537 3.73057 23.1503 4.50596 23.4884 5.35646L21.1652 6.28001C20.9447 5.72527 20.623 5.22519 20.2214 4.80686L20.2207 4.80614C19.8195 4.38782 19.3466 4.05945 18.8306 3.83661C18.3147 3.61379 17.764 3.5 17.2095 3.5C16.655 3.5 16.1043 3.61379 15.5884 3.83661C15.0766 4.05763 14.6071 4.38245 14.2081 4.79588L14.2065 4.79757L13.8325 5.20061C13.3596 5.7101 12.696 5.99974 12.0009 6C11.3058 6.00026 10.642 5.71111 10.1688 5.20197L9.79403 4.79874L9.7918 4.79632C8.983 3.95874 7.90254 3.5006 6.78997 3.5006C5.67286 3.5006 4.58811 3.96249 3.77824 4.80661C2.96652 5.65265 2.5 6.813 2.5 8.03541C2.5 9.25782 2.96652 10.4182 3.77824 11.2642L11.9997 19.8334L20.2212 11.2642C20.6227 10.8459 20.9447 10.3455 21.1652 9.79081C21.3858 9.23601 21.5 8.63934 21.5 8.03541C21.5 7.43147 21.3858 6.83481 21.1652 6.28001L23.4884 5.35646C23.8265 6.20691 24 7.1171 24 8.03541C24 8.95371 23.8265 9.86391 23.4884 10.7144C23.1503 11.5648 22.6538 12.3401 22.0252 12.995L12.7213 22.6923C12.5327 22.8889 12.2721 23 11.9997 23C11.7273 23 11.4667 22.8889 11.2781 22.6923L1.97426 12.995C0.705738 11.6728 0 9.8881 0 8.03541C0 6.18272 0.705738 4.39798 1.97426 3.07582C3.24413 1.75224 4.9755 1.0006 6.78997 1.0006C8.18377 1.0006 9.52853 1.44411 10.6527 2.24969C10.9921 2.49283 11.3113 2.76895 11.6057 3.07582C11.6123 3.08271 11.6188 3.08969 11.6252 3.09677L12 3.5L12.374 3.09696C12.3805 3.08987 12.387 3.08288 12.3936 3.07599C12.6852 2.77192 13.0026 2.49653 13.3417 2.25301C13.7334 1.97168 14.154 1.73288 14.5972 1.5415C15.424 1.1844 16.3118 1 17.2095 1C18.1071 1 18.9949 1.1844 19.8218 1.5415C20.6484 1.89849 21.3967 2.4205 22.025 3.07565ZM9.77239 4.77516L9.78536 4.7893C9.78101 4.78461 9.77668 4.7799 9.77239 4.77516Z" fill="currentColor" />
                                            </svg>
                                        </div>
                                        <img src={ship?.imgurl} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text" style={{ fontWeight: "bold" }}> {ship?.textp} <span style={{ fontWeight: "500" }}> {ship?.textspan} </span></p>
                                            <div className="star-con" style={{height:"14px",marginBottom:"5px"}}>
                                                <div className="star-fluit" style={{display:`${ship?.star}`}}>
                                                <img style={{width:"10px",height:"10px",marginRight:"2px"}} src="img/laptop/star.svg" alt="" />
                                                <img style={{width:"10px",height:"10px",marginRight:"2px"}} src="img/laptop/star.svg" alt="" />
                                                <img style={{width:"10px",height:"10px",marginRight:"2px"}} src="img/laptop/star.svg" alt="" />
                                                <img style={{width:"10px",height:"10px",marginRight:"2px"}} src="img/laptop/star.svg" alt="" />
                                                <img style={{width:"10px",height:"10px",marginRight:"2px"}} src="img/laptop/star.svg" alt="" />
                                                <img style={{width:"15px",height:"12px",marginLeft:"5px"}} src="img/laptop/cam.webp" alt="" />
                                                </div>
                                            </div>
                                            <div className="down-con" style={{ width: "202px", height: "18px",marginBottom:"4px" }}>
                                                <div className="down" style={{ display: `${ship?.down}` }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill='#bb0000' viewBox="0 0 576 512"><path d="M384 352c-17.7 0-32 14.3-32 32s14.3 32 32 32H544c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32s-32 14.3-32 32v82.7L342.6 137.4c-12.5-12.5-32.8-12.5-45.3 0L192 242.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0L320 205.3 466.7 352H384z" />
                                                    </svg>
                                                    <p style={{ fontSize: "12px", color: "#bb0000", display: "inline", marginTop: "18px", marginLeft: "5px" }}>Son 30 Günün En Düşük Fiyatı!</p>
                                                </div>
                                            </div>
                                            <del style={{ fontSize: "16px", lineHeight: "20px", color: "#878787", marginRight: "10px" }}> {ship?.del} </del>
                                            <h5 style={{ color: `${ship?.color}`, fontWeight: "600", lineHeight: "20px", marginBottom: "11px", display: "inline" }}> {ship?.money} </h5>
                                            <div className="card-bot-con" style={{ width: "202px", height: "29px", marginTop: "20px" }}>
                                                <div className="card-left-bot-con" style={{ display: `${ship?.cardleft}` }}>
                                                    <img src="img/laptop/birlikte.svg" alt="" />
                                                    <span >Birlikte Kazan</span>
                                                </div>
                                                <div className="card-right-bot-con" style={{ display: `${ship?.cardright}` }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M18.9954 11.0492L18.7195 6.56841V6.56855C18.6987 6.23323 18.5561 5.917 18.3185 5.67938C18.0809 5.44177 17.7647 5.2992 17.4294 5.27843L12.9489 5.00248C12.5545 4.97879 12.169 5.12541 11.8902 5.40525L5.4032 11.8922C5.14495 12.1506 5 12.5008 5 12.8661C5 13.2312 5.14494 13.5816 5.4032 13.8399L10.1601 18.5968C10.4184 18.8551 10.7688 19 11.1339 19C11.4992 19 11.8494 18.8551 12.1078 18.5968L18.5947 12.1077C18.8738 11.8284 19.0197 11.4431 18.9956 11.0489L18.9954 11.0492ZM15.7414 10.771H15.7412C15.4078 11.1044 14.9556 11.2918 14.4841 11.2918C14.0127 11.2918 13.5604 11.1045 13.2269 10.771C12.8935 10.4377 12.7062 9.98539 12.7062 9.51394C12.7062 9.04232 12.8935 8.59021 13.2269 8.25672C13.5604 7.92336 14.0127 7.73604 14.4841 7.73604C14.9556 7.73604 15.4079 7.92335 15.7412 8.25687C16.0749 8.59009 16.2623 9.04235 16.2623 9.51394C16.2623 9.98543 16.0748 10.4377 15.7412 10.771H15.7414Z" fill="#F27A1A" />
                                                    </svg>
                                                    <span>Çok Al Az Öde</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        )
                    })
                }
            </div>
        </>
    )
}

export default CardLaptop