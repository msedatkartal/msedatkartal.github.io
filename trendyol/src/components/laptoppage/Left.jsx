import React from 'react'
import { acc_list } from "../../assets/data"

function Left() {
    return (
        <>
            <div className="acc-con">
                <div className="accordion" id="accordionPanelsStayOpenExample">
                    {
                        acc_list?.map((liste, index) => {
                            return (
                                <div key={index} className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={"#panelsStayOpen-" + liste.collapse}
                                            aria-expanded="true"
                                            aria-controls={"panelsStayOpen-" + liste.collapse}
                                        >
                                            {liste.title}
                                        </button>
                                    </h2>
                                    <div
                                        id={"panelsStayOpen-" + liste.collapse}
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            <b style={{ display: `${liste.pe}` }}>Laptop</b>
                                            <input
                                                type="search"
                                                className="form-control"
                                                id="exampleFormControlInput1"
                                                placeholder={liste.title + " ara"}
                                                style={{ display: `${liste.inp}` }}
                                            />
                                            <form style={{ display: `${liste.fiyat}` }} className="row row-cols-3 g-3 ">
                                                <div className="col">
                                                    <input
                                                        type="search"
                                                        className="form-control"
                                                        id="exampleInputSearch1"
                                                        placeholder="En Az"
                                                        aria-describedby="searchHelp"
                                                        style={{ width: "56px", height: "25px", padding: "1px" }}
                                                    />
                                                </div>
                                                <div className="col">
                                                    <input
                                                        type="search"
                                                        className="form-control"
                                                        id="exampleInputSearch1"
                                                        placeholder="En Çok"
                                                        aria-describedby="searchHelp"
                                                        style={{ width: "56px", height: "25px", padding: "1px", margin: "0 5px" }}
                                                    />
                                                </div>
                                                <div className="col">
                                                    <button type="submit" style={{ width: "36px", height: "25px", padding: "0" }} className="btn">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </form>
                                            <div className="row row-cols-4">
                                                {
                                                    liste?.color?.map(color => {
                                                        return (
                                                            <div key={color.id} className="col">
                                                                <a href="/">
                                                                    <div style={{ background: `${color.color}`, margin: "2px " }} className="color"></div>
                                                                </a>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            {
                                                liste?.content?.map((item, contIndex) => {
                                                    return (
                                                        <div key={contIndex} className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />{item.input}
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Left