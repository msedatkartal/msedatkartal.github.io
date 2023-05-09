import React from 'react'
import Cards from '../cards/Cards'

function Navbar() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg text-color">
                    <div className="container-fluid m-auto">
                        <div className="logo student">
                            <a className="navbar-brand text-color mx-2" style={{ fontSize: "20px" }} href="/"><span>bilginet</span> akademi</a>
                        </div>
                        <button className="navbar-toggler border" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon border"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2">
                                <li className="nav-item dropdown text-color">
                                    <a className="nav-link dropdown-toggle text-color mx-2" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Eğitimlerimiz
                                    </a>
                                    <ul className="dropdown-menu egitimlerimiz">
                                        <li><a href="/teacher"> <Cards /> </a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-color mx-2" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Kurumsal
                                    </a>
                                    <ul className="dropdown-menu text-color kurumsal">
                                        <li><a className="dropdown-item text-color" href="/hakk">Hakkımızda</a></li>
                                        <li><a className="dropdown-item text-color" href="/ekip">Ekibimiz</a></li>
                                        <li><a className="dropdown-item text-color" href="/">Basında Biz</a></li>
                                        <li><a className="dropdown-item text-color" href="/">Akreditasyonlarımız</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active text-color mx-2" aria-current="page" href="/">Kursiyerlerimiz</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active text-color mx-2" aria-current="page" href="/">DemoPanel</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active text-color mx-2" aria-current="page" href="/">İletişim</a>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <div className="btn-group bg-light dropstart">
                                    <button type="button" className="btn  dropdown-toggle right" data-bs-toggle="dropdown" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" color='#f8f9fa' width="13" height="13" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                        </svg>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    </ul>
                                </div>
                                <a href="/login">
                                    <button className="btn btn-outline-light  text-color mx-2 student" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ margin: "4px" }} width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                        </svg>
                                        <p>Öğrenci Girişi</p>
                                    </button>
                                </a>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar