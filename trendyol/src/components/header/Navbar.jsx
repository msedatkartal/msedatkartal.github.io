import React, { useState } from 'react'
import { nav_canvas } from "../../assets/data"

function Navbar() {
    const list_nav1 = [
        {
            id: 1,
            search: "kadın çanta"
        },
        {
            id: 2,
            search: "halı"
        },
        {
            id: 3,
            search: "duvar saati"
        },
        {
            id: 4,
            search: "omuz çantası"
        },
        {
            id: 5,
            search: "takım"
        },
        {
            id: 6,
            search: "akıllı çocuk saati"
        },
        {
            id: 7,
            search: "tablet"
        },
        {
            id: 8,
            search: "erzak saklama kabı"
        },
        {
            id: 9,
            search: "akülü araba"
        },
        {
            id: 10,
            search: "airpods"
        },

    ]
    // const [nav1s, setNav1s] = useState(list_nav1)
    const list_nav2 = [
        {
            id: 1,
            search: "Giyim"
        },
        {
            id: 2,
            search: "Giyim"
        },
        {
            id: 3,
            search: "Pantolon"
        },
        {
            id: 4,
            search: "Spor Ayakkabı"
        },
        {
            id: 5,
            search: "Omuz Çantası"
        },
        {
            id: 6,
            search: "Kozmetik"
        },
        {
            id: 7,
            search: "Ayakkabı"
        },
        {
            id: 8,
            search: "Aksesuar"
        },
        {
            id: 9,
            search: "Sofra&Mutfak"
        },
        {
            id: 10,
            search: "Elektronik"
        },
        {
            id: 11,
            search: "Süpermarket"
        },
        {
            id: 12,
            search: "İç Giyim"
        },
        {
            id: 13,
            search: "Spor Outdoor"
        },
        {
            id: 14,
            search: "Çanta"
        },
        {
            id: 15,
            search: "Ceket"
        },
        {
            id: 16,
            search: "Güneş Gözlüğü"
        },
        {
            id: 17,
            search: "Eşofman"
        },
        {
            id: 18,
            search: "Bluz&Tunik&Büstiyer"
        },
        {
            id: 19,
            search: "Ev Dekorasyon"
        },
        {
            id: 20,
            search: "Ev Gereçler"
        },

    ]
    // const [nav2s, setNav2s] = useState(list_nav2)
    var change = true
    const open = () => {
        var open = document.getElementById("input-on")
        if (change === true) {
            open.style.display = "block"
        } else {
            open.style.display = "none"
        }
        change = !change
    }
    var change = true
    const open2 = () => {
        var open = document.getElementById("input-on2")
        if (change === true) {
            open.style.display = "block"
        } else {
            open.style.display = "none"
        }
        change = !change
    }
    function mouseOn() {
        var y = document.getElementById("giris")
        y.style.display = "block";
    }

    function mouseOff() {
        var z = document.getElementById("giris")
        z.style.display = "none";
    }

    var changebtn = true;
    const buton = () => {
        var btn = document.getElementById("search")
        if (changebtn == true) {
            btn.style.border = "2px solid #f27a1a"
        } else {
            btn.style.border = "none"
        }
        changebtn = !changebtn
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid navbar-fluid">
                    <a className="navbar-brand" href="/">
                        <h1>trendyol</h1>
                    </a>
                    <form className="d-flex search-con" role="search">
                        <div className="search d-flex" id='search' onClick={buton}>
                            <input className="form-control me-2 bg-transparent " onClick={open} type="search" placeholder="Aradığınız ürün,kategori veya markayı yazınız" aria-label="Search" />
                            <a href="/">
                                <button className="btn" type="submit">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#f27a1a" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </button>
                            </a>
                        </div>
                        <div id='input-on' className="search-open">
                            <div className="populer">
                                <p>Popüler Aramalar</p>
                                {
                                    list_nav1?.map(nav1 => {
                                        return (
                                            <div key={nav1?.id} className="search-box">
                                                <a href="/"> {nav1.search} </a>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="special">
                                <p>Sana Özel Kategoriler</p>
                                {
                                    list_nav2?.map(nav2 => {
                                        return (
                                            <div key={nav2?.id} className="search-box">
                                                <a href="/"> {nav2.search} </a>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </form>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li id='nav-item' onMouseOver={mouseOn} onMouseOut={mouseOff} className="nav-item">
                                <a className="nav-link" id="button-3" href="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" /></svg>
                                    <p>Giriş Yap</p>
                                </a>
                                <div id='giris' className="card giris-modal">
                                    <div className="card-body">
                                        <a href="/" className="btn orange">Giriş Yap</a>
                                        <a href="/" className="btn white">Üye Ol</a>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M22.025 3.07565C22.6537 3.73057 23.1503 4.50596 23.4884 5.35646L21.1652 6.28001C20.9447 5.72527 20.623 5.22519 20.2214 4.80686L20.2207 4.80614C19.8195 4.38782 19.3466 4.05945 18.8306 3.83661C18.3147 3.61379 17.764 3.5 17.2095 3.5C16.655 3.5 16.1043 3.61379 15.5884 3.83661C15.0766 4.05763 14.6071 4.38245 14.2081 4.79588L14.2065 4.79757L13.8325 5.20061C13.3596 5.7101 12.696 5.99974 12.0009 6C11.3058 6.00026 10.642 5.71111 10.1688 5.20197L9.79403 4.79874L9.7918 4.79632C8.983 3.95874 7.90254 3.5006 6.78997 3.5006C5.67286 3.5006 4.58811 3.96249 3.77824 4.80661C2.96652 5.65265 2.5 6.813 2.5 8.03541C2.5 9.25782 2.96652 10.4182 3.77824 11.2642L11.9997 19.8334L20.2212 11.2642C20.6227 10.8459 20.9447 10.3455 21.1652 9.79081C21.3858 9.23601 21.5 8.63934 21.5 8.03541C21.5 7.43147 21.3858 6.83481 21.1652 6.28001L23.4884 5.35646C23.8265 6.20691 24 7.1171 24 8.03541C24 8.95371 23.8265 9.86391 23.4884 10.7144C23.1503 11.5648 22.6538 12.3401 22.0252 12.995L12.7213 22.6923C12.5327 22.8889 12.2721 23 11.9997 23C11.7273 23 11.4667 22.8889 11.2781 22.6923L1.97426 12.995C0.705738 11.6728 0 9.8881 0 8.03541C0 6.18272 0.705738 4.39798 1.97426 3.07582C3.24413 1.75224 4.9755 1.0006 6.78997 1.0006C8.18377 1.0006 9.52853 1.44411 10.6527 2.24969C10.9921 2.49283 11.3113 2.76895 11.6057 3.07582C11.6123 3.08271 11.6188 3.08969 11.6252 3.09677L12 3.5L12.374 3.09696C12.3805 3.08987 12.387 3.08288 12.3936 3.07599C12.6852 2.77192 13.0026 2.49653 13.3417 2.25301C13.7334 1.97168 14.154 1.73288 14.5972 1.5415C15.424 1.1844 16.3118 1 17.2095 1C18.1071 1 18.9949 1.1844 19.8218 1.5415C20.6484 1.89849 21.3967 2.4205 22.025 3.07565ZM9.77239 4.77516L9.78536 4.7893C9.78101 4.78461 9.77668 4.7799 9.77239 4.77516Z" fill="currentColor" />
                                    </svg>

                                    <p>Favorilerim</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                    </svg>
                                    <p>Sepetim</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="offcanvas-nav-con">
                <>
                    <div className="top-con">
                        <div className="top-left">
                            <a
                                className="btn"
                                data-bs-toggle="offcanvas"
                                href="#offcanvasExample"
                                role="button"
                                aria-controls="offcanvasExample"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                                </svg>
                            </a>
                            <a href="/">
                                <img src="img/trend-logo.svg" alt="" />
                            </a>
                        </div>
                        <div className="top-right">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-person"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-heart"
                                viewBox="0 0 16 16"
                            >
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-cart3"
                                viewBox="0 0 16 16"
                            >
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>

                        </div>
                    </div>
                    <div className="bot-con">
                        <form className="d-flex search-con" role="search">
                            <div className="search d-flex" id='search'>
                                <input className="form-control me-2 bg-transparent " onClick={open2} type="search" placeholder="Aradığınız ürün,kategori veya markayı yazınız" aria-label="Search" />
                            </div>
                            <div id='input-on2' className="search-open">
                                <div className="populer">
                                    <p>Popüler Aramalar</p>
                                    {
                                        list_nav1?.map(nav1 => {
                                            return (
                                                <div key={nav1?.id} className="search-box">
                                                    <a href="/"> {nav1.search} </a>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className="special">
                                    <p>Sana Özel Kategoriler</p>
                                    {
                                        list_nav2?.map(nav2 => {
                                            return (
                                                <div key={nav2?.id} className="search-box">
                                                    <a href="/"> {nav2.search} </a>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </form>
                    </div>
                    <div
                        className="offcanvas offcanvas-start"
                        tabIndex={-1}
                        id="offcanvasExample"
                        aria-labelledby="offcanvasExampleLabel"
                    >
                        <div className="offcanvas-header">
                            <img src="img/trend-logo.svg" alt="" />
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            />
                        </div>
                        <div className="offcanvas-body">
                            <ul>
                                {
                                    nav_canvas?.map(canvas => {
                                        return (
                                            <>
                                                <a href={canvas.href}>
                                                    <li>
                                                        <div className="left">
                                                            <img src={canvas.svg} alt="" />
                                                            <p> {canvas.text} </p>
                                                        </div>
                                                        <div className="right">
                                                            <img src={canvas.right} alt="" />
                                                        </div>
                                                    </li>
                                                </a>
                                                <hr />
                                            </>
                                        )
                                    })
                                }

                            </ul>
                            <ul style={{ color: "#999999" }}>
                                <a href="/">
                                    <li>
                                        <div className='d-flex'>
                                            <img src="img/svg/person.svg" alt="" />
                                            <p>Üye Ol/Giriş Yap</p>
                                        </div>
                                    </li>
                                </a>
                                <a href="/">
                                    <li>
                                        <div className='d-flex'>
                                            <img src="img/svg/help.svg" alt="" />
                                            <p>Yardım</p>
                                        </div>
                                    </li>
                                </a>
                                <a href="/">
                                    <li>
                                        <div className='d-flex'>
                                            <img src="img/svg/world.svg" alt="" />
                                            <p>Ülke Değiştir</p>
                                        </div>
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </>

            </div>
        </>
    )
}

export default Navbar

