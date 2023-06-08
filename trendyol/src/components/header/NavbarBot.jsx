import React, { useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import NavFluit from './NavFluit'
function NavbarBot() {
  const [index, SetIndex] = useState()
  window.onscroll = function () { myFunction() };
  function myFunction() {
    if (document.documentElement.scrollTop > 600) {
      document.getElementById("box1234").style.display = "block"
    } else {
      document.getElementById("box1234").style.display = "none"
    }
  }
  const state = {
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 2,
      },
      800: {
        items: 4,
      },
      1000: {
        items: 5,
      },
      1200: {
        items: 7,
      },
      1400: {
        items: 7,
      },
    },
  }
  return (
    <>
      <div className="navbarbot-con " onMouseOut={() => SetIndex("")}>
        <div className="navbarbot-fluit">
          <a onMouseOver={() => SetIndex("kadın")} href="/">KADIN</a>
          <a onMouseOver={() => SetIndex("erkek")} href="/">ERKEK</a>
          <a onMouseOver={() => SetIndex("anne")} href="/">ANNE & ÇOCUK</a>
          <a onMouseOver={() => SetIndex("ev")} href="/">EV & MOBİLYA</a>
          <a onMouseOver={() => SetIndex("super")} href="/">SÜPERMARKET</a>
          <a onMouseOver={() => SetIndex("ayak")} href="/">AYAKKABI & ÇANTA</a>
          <a onMouseOver={() => SetIndex("elektronik")} href="/laptop">ELEKTRONİK</a>
          <a onMouseOver={() => SetIndex("spor")} href="/">SPOR&OUTDOOR</a>
          <a href="/">ÇOK SATANLAR</a>
          <a href="/">FLAŞ ÜRÜNLER</a>
        </div>
        <a href="/">
          <div id="box1234">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-arrow-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                />
              </svg>

              yukarı çık</p>
          </div>
        </a>
      </div>
      {index && <NavFluit index={index} />}
      <div className="owl-nav-bot-con">
        <OwlCarousel
          items={7}
          className="owl-theme"
          margin={18}
          responsive={state.responsive}
        >
          <a href="/">KADIN</a>
          <a href="/">ERKEK</a>
          <a href="/">ANNE & ÇOCUK</a>
          <a href="/">EV & MOBİLYA</a>
          <a href="/">SÜPERMARKET</a>
          <a href="/">AYAKKABI & ÇANTA</a>
          <a href="/laptop">ELEKTRONİK</a>
          <a href="/">SPOR&OUTDOOR</a>
          <a href="/">ÇOK SATANLAR</a>
          <a href="/">FLAŞ ÜRÜNLER</a>
        </OwlCarousel>
      </div>
    </>
  )
}

export default NavbarBot