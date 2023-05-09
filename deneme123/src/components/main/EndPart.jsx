import React, { useState } from 'react'

function EndPart() {
  const egitmen_list = [
    {
      id: 1,
      imgurl: "img/gzd/semseddin-sayan.webp",
      title: "İş ve Spor Köpekleri Eğitmenliği Eğitimi",
      text: "Şemseddin Şayan Köpek Eğitmen Eğiticisi",
      cardtext: "İnsanlara yardımcı olmak üzere yetiştirilen köpekleri siz eğitebilirsiniz. Adım adım iş ve spor köpek eğitmeni olmak için eğitime hemen başla!",
      btnleft: "21 saat",
      btnright: "10 ders",
    },
    {
      id: 2,
      imgurl: "img/gzd/melek-ozen.webp",
      title: "Fit Nefes Koçluğu Eğitimi",
      text: "Melek Özen Nefes Eğitmeni",
      cardtext: "Yaşamın kaliteli, verimli, sağlıklı ve huzurlu olmasını belirleyen en önemli faktör, nefes alışverişlerinde sanatsal bir başarı sağlamaktır.",
      btnleft: "66 saat",
      btnright: "40 ders",
    },
    {
      id: 3,
      imgurl: "img/gzd/dilara-kizilcay.webp",
      title: "Stres Yönetimi Eğitimi",
      text: "Dilara Kızılçay Klinik Psikolog - Endüstri Psikolojisi",
      cardtext: "Stres, modern çağın insanlığa en büyük armağanıdır. Katılımcılar, yaşamın getirdiği değişikliklere ayak uydurmaya çalışırken dengeyi sağlayabilmek için; strese sebep olan faktörlerin karşısında farkındalıklarını artırabilecek..",
      btnleft: "11 saat",
      btnright: "36 ders",
    },
    {
      id: 4,
      imgurl: "img/gzd/ismail-durgun.webp",
      title: "Proje Yazımı Eğitimi",
      text: "Dr. İsmail Durgun Akademisyen-Proje Yöneticisi",
      cardtext: "Proje Yazımı eğitiminde bir proje başvurusu yaparken proje yazımında hangi ana bölümlerin olduğu ve bu ana bölümleri doldururken nelere dikkat edilmesi gerektiği ayrıntılı bir şekilde anlatılmaktadır",
      btnleft: "14 saat",
      btnright: "5 ders",
    },
    {
      id: 5,
      imgurl: "img/gzd/cocuklarla-iletisim.webp",
      title: "Çocuklarla Etkili İletişim",
      text: "Tuğçe İnkaya / Meltem Cıbır Psikolojik Danışman / Uzman Klinik Psikolog",
      cardtext: "Çocukların gelişimini nasıl etkili bir şekilde destekleyeceğinizi ve teşvik edeceğinizi bu eğitim ile öğrenebilirsiniz.",
      btnleft: "20 saat",
      btnright: "20 ders",
    },
    {
      id: 6,
      imgurl: "img/gzd/gozde-biber.webp",
      title: "Hamile Yogası Eğitimi",
      text: "Gözde Biber Yoga, Pilates ve Fitness Eğitmeni.",
      cardtext: "Hamile Yogası, doğuma hazırlanan tüm kadınlar için bedenin, zihinsel ve ruhsal olarak hazırlanmasıdır. Prenatal yoga olarak da adlandırılır.",
      btnleft: "24 saat",
      btnright: "9 ders",
    },
  ]
  const [cards, setCards] = useState(egitmen_list)
  return (
    <>
      {/* EGİTMENLER CARD START */}
      <div className="egitmen-con">
        <div className="egitmen-fluit">
          <div className="row row-cols-1 row-cols-xxl-2 row-cols-xl-1 g-4">
            {
              cards.map(card => {
                return (
                  <div className="col">
                    <div className="card mb-3 bg-transparent text-white ">
                      <div className="row g-0">
                        <div className="col-4">
                          <img src= {card.imgurl} style={{width:"100%",height:"340px",objectFit:"cover"}} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-8">
                          <div className="card-body">
                            <h5 className="card-title"> {card.title} </h5>
                            <p className="card-text text-white"> {card.text} </p>
                            <button type="button" className="btn btn-dark text-white " style={{ backgroundColor: 'rgba(16, 15, 15, 0.704)', fontSize: '9px' }}> {card.btnleft} </button> 
                            <button type="button" className="btn btn-dark text-white " style={{ backgroundColor: 'rgba(28, 25, 25, 0.673)', fontSize: '9px', marginLeft: '10px' }}> {card.btnright} </button>
                            <p className="card-text "><small className="text-white "> {card.cardtext} </small></p>
                            <button type="button" className="btn btn-outline-danger text-white" style={{ border: 'solid 1px rgba(255, 255, 255, 0.618)', fontSize: '14px', marginLeft: '20px' }}>Eğitim Detayı</button>
                            <a href="/kayit">
                            <button type="button" className="btn btn-outline-danger text-white" style={{ border: 'solid 1px rgba(255, 255, 255, 0.618)', fontSize: '14px', marginLeft: '20px' }}>Şimdi Başvur</button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                )
              })
            }
            {/* <div className="col">
              <div className="card mb-3 bg-transparent text-white " style={{ width: '540px', border: '2px solid gray', height: '344px', marginLeft: '30px' }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="img/gzd/melek-ozen.webp" className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Fit Nefes Koçluğu Eğitimi</h5>
                      <p className="card-text ">Melek Özen
                        Nefes Eğitmeni</p>
                      <button type="button" className="btn btn-dark text-white " style={{ backgroundColor: 'rgba(16, 15, 15, 0.704)', fontSize: '9px' }}>66 saat</button>
                      <button type="button" className="btn btn-dark text-white " style={{ backgroundColor: 'rgba(28, 25, 25, 0.673)', fontSize: '9px', marginLeft: '10px' }}>40 ders</button>
                      <p className="card-text"><small className="text-white">Yaşamın kaliteli, verimli, sağlıklı ve huzurlu olmasını belirleyen en önemli faktör, nefes alışverişlerinde sanatsal bir başarı sağlamaktır.</small></p>
                      <button type="button" className="btn btn-outline-danger text-white" style={{ border: 'solid 1px rgba(255, 255, 255, 0.618)', fontSize: '14px', marginLeft: '20px' }}>Eğitim Detayı</button>
                      <button type="button" className="btn btn-outline-danger text-white" style={{ border: 'solid 1px rgba(255, 255, 255, 0.618)', fontSize: '14px', marginLeft: '20px' }}>Şimdi Başvur</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-3 bg-transparent text-white" style={{ width: '540px', border: '2px solid gray', height: '344px' }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="img/gzd/dilara-kizilcay.webp" className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Stres Yönetimi Eğitimi</h5>
                      <p className="card-text">Dilara Kızılçay
                        Klinik Psikolog - Endüstri Psikolojisi</p>
                      <button type="button" className="btn btn-dark text-white " style={{ backgroundColor: 'rgba(16, 15, 15, 0.704)', fontSize: '9px' }}>11 saat</button>
                      <button type="button" className="btn btn-dark text-white " style={{ backgroundColor: 'rgba(28, 25, 25, 0.673)', fontSize: '9px', marginLeft: '10px' }}>36 ders</button>
                      <p className="card-text"><small className="text-white">Stres, modern çağın insanlığa en büyük armağanıdır. Katılımcılar, yaşamın getirdiği değişikliklere ayak uydurmaya çalışırken dengeyi sağlayabilmek için; strese sebep olan faktörlerin karşısında farkındalıklarını artırabilecek..</small></p>
                      <button type="button" className="btn btn-outline-danger text-white" style={{ border: 'solid 1px rgba(255, 255, 255, 0.618)', fontSize: '14px', marginLeft: '20px' }}>Eğitim Detayı</button>
                      <button type="button" className="btn btn-outline-danger text-white" style={{ border: 'solid 1px rgba(255, 255, 255, 0.618)', fontSize: '14px', marginLeft: '20px' }}>Şimdi Başvur</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-3 bg-transparent text-white " style={{ width: '540px', border: '2px solid gray', height: '344px', marginLeft: '30px' }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="img/gzd/ismail-durgun.webp" className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Proje Yazımı Eğitimi</h5>
                      <p className="card-text">Dr. İsmail Durgun
                        Akademisyen-Proje Yöneticisi</p>
                      <button type="button" className="btn btn-dark text-white " style={{ backgroundColor: 'rgba(16, 15, 15, 0.704)', fontSize: '9px' }}>14 saat</button>
                      <button type="button" className="btn btn-dark text-white " style={{ backgroundColor: 'rgba(28, 25, 25, 0.673)', fontSize: '9px', marginLeft: '10px' }}>5 ders</button>
                      <p className="card-text"><small className="text-white">Proje Yazımı eğitiminde bir proje başvurusu yaparken proje yazımında hangi ana bölümlerin olduğu ve bu ana bölümleri doldururken nelere dikkat edilmesi gerektiği ayrıntılı bir şekilde anlatılmaktadır</small></p>
                      <button type="button" className="btn btn-outline-danger text-white" style={{ border: 'solid 1px rgba(255, 255, 255, 0.618)', fontSize: '14px', marginLeft: '20px' }}>Eğitim Detayı</button>
                      <button type="button" className="btn btn-outline-danger text-white" style={{ border: 'solid 1px rgba(255, 255, 255, 0.618)', fontSize: '14px', marginLeft: '20px' }}>Şimdi Başvur</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-3 bg-transparent text-white" style={{ width: '540px', border: '2px solid gray', height: '344px' }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="img/gzd/cocuklarla-iletisim.webp" className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Çocuklarla Etkili İletişim</h5>
                      <p className="card-text">Tuğçe İnkaya / Meltem Cıbır
                        Psikolojik Danışman / Uzman Klinik Psikolog</p>
                      <button type="button" className="btn btn-dark text-white " style={{ backgroundColor: 'rgba(16, 15, 15, 0.704)', fontSize: '9px' }}>20 saat</button>
                      <button type="button" className="btn btn-dark text-white " style={{ backgroundColor: 'rgba(28, 25, 25, 0.673)', fontSize: '9px', marginLeft: '10px' }}>20 ders</button>
                      <p className="card-text"><small className="text-white">Çocukların gelişimini nasıl etkili bir şekilde destekleyeceğinizi ve teşvik edeceğinizi bu eğitim ile öğrenebilirsiniz.</small></p>
                      <button type="button" className="btn btn-outline-danger text-white" style={{ border: 'solid 1px rgba(255, 255, 255, 0.618)', fontSize: '14px', marginLeft: '20px' }}>Eğitim Detayı</button>
                      <button type="button" className="btn btn-outline-danger text-white" style={{ border: 'solid 1px rgba(255, 255, 255, 0.618)', fontSize: '14px', marginLeft: '20px' }}>Şimdi Başvur</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-3 bg-transparent text-white" style={{ width: '540px', border: '2px solid gray', height: '344px', marginLeft: '30px' }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="img/gzd/gozde-biber.webp" className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Hamile Yogası Eğitimi</h5>
                      <p className="card-text">Gözde Biber
                        Yoga, Pilates ve Fitness Eğitmeni.</p>
                      <button type="button" className="btn btn-dark text-white " style={{ backgroundColor: 'rgba(16, 15, 15, 0.704)', fontSize: '9px' }}>24 saat</button>
                      <button type="button" className="btn btn-dark text-white " style={{ backgroundColor: 'rgba(28, 25, 25, 0.673)', fontSize: '9px', marginLeft: '10px' }}>9 ders</button>
                      <p className="card-text"><small className="text-white">Hamile Yogası, doğuma hazırlanan tüm kadınlar için bedenin, zihinsel ve ruhsal olarak hazırlanmasıdır. Prenatal yoga olarak da adlandırılır.</small></p>
                      <button type="button" className="btn btn-outline-danger text-white" style={{ border: 'solid 1px rgba(255, 255, 255, 0.618)', fontSize: '14px', marginLeft: '20px' }}>Eğitim Detayı</button>
                      <button type="button" className="btn btn-outline-danger text-white" style={{ border: 'solid 1px rgba(255, 255, 255, 0.618)', fontSize: '14px', marginLeft: '20px' }}>Şimdi Başvur</button>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* Egitmenler card end */}
    </>
  )
}

export default EndPart