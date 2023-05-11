import React, { useState } from 'react'

function LoginPage() {
    const carousel_login = [
        {
            id: 2,
            imgurl: "img/login/2.webp"
        },
        {
            id: 3,
            imgurl: "img/login/3.webp"
        },
        {
            id: 4,
            imgurl: "img/login/4.webp"
        },
        {
            id: 5,
            imgurl: "img/login/5.webp"
        },
    ]
    const [logins, setLogins] = useState(carousel_login)
    return (
        <>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="loginpage-con">
                            <div className="loginpage-fluid">
                                <div className="loginpage-head">
                                    <a href="/">
                                    <img src="img/header-logo.png" alt="" />
                                    </a>
                                </div>
                                <form className="row g-3 bg-transparent needs-validation" noValidate>
                                    <h4>Hoş Geldiniz</h4>
                                    <h6>Hesabınıza Giriş Yapabilirsiniz</h6>
                                    <div className="col-12">
                                        <div className="input-group has-validation">
                                            <span className="input-group-text" id="inputGroupPrepend">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#676676" className="bi bi-envelope" viewBox="0 0 16 16">
                                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                                </svg>
                                            </span>
                                            <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                                            <div className="invalid-feedback">
                                                Please choose a username.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group has-validation">
                                            <span className="input-group-text" id="inputGroupPrepend">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#676676" className="bi bi-lock-fill" viewBox="0 0 16 16">
                                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                                                </svg>
                                            </span>
                                            <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                                            <div className="invalid-feedback">
                                                Please choose a username.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" />
                                            <label className="form-check-label" htmlFor="defaultCheck">
                                                Beni Hatırla
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <a style={{ color: "#ffffff" }} href="">
                                            Parolanızı unuttunuzmu?
                                        </a>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-outline-danger" type="submit">Giriş Yap</button>
                                    </div>
                                </form>
                                <div className="loginpage-foot">
                                    <h6>Bizi Sosyal Medyadan Takip Edebilirsiniz</h6>
                                    <div className="hrrr"></div>
                                    <div className="svg-icon">
                                        <div className="svg">
                                            <a href="">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" className="bi bi-facebook" viewBox="0 0 16 16">
                                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="svg">
                                            <a href="">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" className="bi bi-youtube" viewBox="0 0 16 16">
                                                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="svg">
                                            <a href="">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" className="bi bi-linkedin" viewBox="0 0 16 16">
                                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="svg">
                                            <a href="">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" className="bi bi-twitter" viewBox="0 0 16 16">
                                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        logins?.map(login => {
                            return (
                                <div class="carousel-item">
                                    <div className="loginpage-con" style={{ backgroundImage: `url(${login?.imgurl})` }}>
                                        <div className="loginpage-fluid">
                                            <div className="loginpage-head">
                                                <a href="/">
                                                <img src="img/header-logo.png" alt="" />
                                                </a>
                                            </div>
                                            <form className="row g-3 needs-validation bg-transparent" noValidate>
                                                <h4>Hoş Geldiniz</h4>
                                                <h6>Hesabınıza Giriş Yapabilirsiniz</h6>
                                                <div className="col-12">
                                                    <div className="input-group has-validation">
                                                        <span className="input-group-text" id="inputGroupPrepend">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#676676" className="bi bi-envelope" viewBox="0 0 16 16">
                                                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                                            </svg>
                                                        </span>
                                                        <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                                                        <div className="invalid-feedback">
                                                            Please choose a username.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="input-group has-validation">
                                                        <span className="input-group-text" id="inputGroupPrepend">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#676676" className="bi bi-lock-fill" viewBox="0 0 16 16">
                                                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                                                            </svg>
                                                        </span>
                                                        <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                                                        <div className="invalid-feedback">
                                                            Please choose a username.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" />
                                                        <label className="form-check-label" htmlFor="defaultCheck">
                                                            Beni Hatırla
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <a style={{ color: "#ffffff" }} href="">
                                                        Parolanızı unuttunuzmu?
                                                    </a>
                                                </div>
                                                <div className="col-12">
                                                    <button className="btn btn-outline-danger" type="submit">Giriş Yap</button>
                                                </div>
                                            </form>
                                            <div className="loginpage-foot">
                                                <h6>Bizi Sosyal Medyadan Takip Edebilirsiniz</h6>
                                                <div className="hrrr"></div>
                                                <div className="svg-icon">
                                                    <div className="svg">
                                                        <a href="">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" className="bi bi-facebook" viewBox="0 0 16 16">
                                                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="svg">
                                                        <a href="">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" className="bi bi-youtube" viewBox="0 0 16 16">
                                                                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="svg">
                                                        <a href="">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" className="bi bi-linkedin" viewBox="0 0 16 16">
                                                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="svg">
                                                        <a href="">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" className="bi bi-twitter" viewBox="0 0 16 16">
                                                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
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

export default LoginPage