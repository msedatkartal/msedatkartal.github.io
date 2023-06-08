import React from 'react'
import { navbar_bot, navbar_img } from '../../assets/data'

function NavFluit({ index = "" }) {
    const items = navbar_bot[index] || [];
    return (
        <>
            <div className="nav-fluit-con" >
                <div className="nav-fluit-fluit">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <>
                                    {
                                        items?.map((navitem, navindex) => (
                                            <>
                                                <div style={{ display: `${navitem?.display2}`,maxWidth:"190px" }} key={navindex} className={"col-" + Math.round(12 / items?.length)}>
                                                    <div className="div">
                                                        <b> {navitem.category} </b>
                                                    </div>
                                                    {
                                                        navitem?.title_con?.map(categori => {
                                                            return (
                                                                <>
                                                                    <div key={categori.id} className="div">
                                                                        <b>{categori?.titleb}</b>
                                                                        <a href='/' > {categori?.title} </a>
                                                                    </div>

                                                                </>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <div style={{ display: `${navitem?.display}` }} className={items?.length == 6 ? "col-2 pad" : "col-3 pad"}>
                                                    <img src={navitem?.img} alt="" />
                                                    <img src={navitem?.img2} alt="" />
                                                </div>
                                            </>
                                        )
                                        )
                                    }
                                </>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavFluit