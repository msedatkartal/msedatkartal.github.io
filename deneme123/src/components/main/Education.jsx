import React from 'react'

function Education({ educations }) {
    return (
        <>
            <div className="education-con w-100 text-center" >
                <h2 >EĞİTİMLERİMİZ</h2>
                <div className="hrrrr" style={{margin:"auto",width:"70%",height:"1px",background:"#676676"}}></div>
                {
                    educations?.map(education => {
                        return (
                            <>
                                <div className="education-fluid" style={{ padding: "48px 15px 0" }}>
                                    <div className="education-text">
                                        <h4 style={{ margin: "0 0 12px" }}> {education.title} </h4>
                                        <h5 style={{ margin: "0 0 2px" }}> {education.text1} </h5>
                                        <p> {education.text2} </p>
                                        <h3 style={{ padding: "16px 0" }}> {education.text3} </h3>
                                        <p> {education.text4} </p>
                                        <div className="buttons" style={{ padding: "24px 0 0" }}>
                                            <button className='buton sol' style={{}}>Eğitim Detayı</button>
                                            <a href="/kayit">
                                            <button className='buton sag' style={{ marginLeft: "16px" }}>Şimdi Başvur</button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="education-anima">
                                        <div className="iframe-con">
                                            <img src= {education?.imgurl} style={{width:"100%",objectFit:"fill"}} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="hrrrr" style={{margin:"20px auto ",width:"70%",height:"1px",background:"#676676"}}></div>
                            </>
                        )
                    })
                }
                <div className="button">
                    <a href="/teacher">
                    <button style={{width:"135px",height:"50px",border:"1px solid white", background:"transparent",color:"white",marginTop:"30px"}}>TÜM EĞİTİMLER</button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Education