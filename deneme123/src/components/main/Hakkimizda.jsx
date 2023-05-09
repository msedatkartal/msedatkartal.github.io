import React from 'react'
import CarouselSerf from '../carousel/CarouselSerf';

function Hakkimizda() {
    return (
        <div>
         
          {/* MAIN START */}
          <main>
            <div className="about-section">
              {/* <img style="width: 100%; height: 440px;" src="bilginet/hakkimizda/hakkimizda.png" alt=""> */}
              <h1 style={{paddingBottom: '15px'}} className="hak">Hakkımızda</h1>
              <div className="gradient-bottom" />
            </div>
            <div className="row justify-content-center d-flex head">
              <div className="col-xl-7 col-lg-10 col-12 text-center py-5 px-4">
                <h2 className="pb-2">Bilginet Akademi</h2>
                <p style={{fontSize: '18px', textAlign: 'center'}}>Alanında profesyonel ve yetkin kişiler tarafından kurulmuş olan, "Eğitim ve Eğitmenlerin Kalitesi" ilkesiyle yola çıkmış, sertifikasyon için geçerli olan eğitimleri, uluslararası standartlarda verilmesini sağlayan kurumlar ile işbirliği yaparak, değişen dünya koşullarında topluma liderlik yapabilecek, insani değerlere saygılı bireyler yetiştirmeyi, bilgiyi paylaşarak toplumun yaşam boyu eğitim ve gelişme sürecine katkıda bulunmayı hedef edinmiş yeni nesil bir eğitim platformudur.</p>
              </div>
            </div>
            <CarouselSerf/>
            <div className="misyon-vizyon d-flex">
              <div className="misyon">
                <h3>Misyonumuz</h3>
                <p>Eğitimlerimizi; bilimsel eğitim metotlarına uygun, kaliteli, memnuniyet odaklı olarak tasarlamak ve bu hizmetlerimizi sürdürülebilirlik ilkesi çerçevesinde bireylere sunmak</p>
              </div>
              <div className="vizyon">
                <h3>Vizyonumuz</h3>
                <p>Türkiye'de uzaktan eğitim alanında sektöre yön veren bir akademi olmak ve alanlarında en iyi eğitmenlerle en zengin içerikli eğitimleri arz etmek.</p>
              </div>
            </div>
            <div className="uni">
              <div className="inner">
                <div className="logo-1"><img src="img/bilginet/bilginet/hakkimizda/cpd.png" alt="" /></div>
                <div className="logo-2"><img src="img/bilginet/bilginet/hakkimizda/gedik-logo.png" alt="" /></div>
                <div className="logo-3"><img src="img/bilginet/bilginet/hakkimizda/itu-logo-2.png" alt="" /></div>
              </div>
            </div>
            <div style={{background: '#191C21'}} className="paragraf">
              <p className="text-center" style={{color: 'white'}}>Bilgi ve teknoloji çağında geleceğe yön verme anlayışıyla hazırlanan eğitimlerle kendilerindeki ışığı yakalamak isteyen aynı zamanda geleceğe de ışık tutmak isteyen bireyler için, ulusal ve uluslararası sertifikasyonlarla bireylerin ihtiyaç duydukları eğitimleri, üniversite onaylarıyla taçlandırmaktadır.</p>
            </div>
            <div className="bottom-con bg-black">
              <div style={{height: '100px'}} className="deger">
                <h2 style={{color: 'white', fontSize: '30px'}}>Değerlerimiz</h2>
              </div>
              <div style={{width: '100%', height: '142px'}} className="logo-area-1">
                <div className="left-top d-flex">
                  <div className="logo_1">
                    <img style={{width: '100%'}} src="img/bilginet/bilginet/hakkimizda/icon-1.png" alt="" />
                  </div>
                  <div style={{marginLeft: '30px', width: '570px'}} className="text_1">
                    <h4 style={{color: 'white'}}>Bilimsel İlkelere Bağlılık</h4>
                    <p style={{color: 'white'}}>Eğitim ve yönetim süreçlerimizi bilimsel ilkeler çerçevesinde geliştirmek</p>
                  </div>
                </div>
                <div className="right-top d-flex">
                  <div className="logo_2">
                    <img style={{width: '100%'}} src="img/bilginet/bilginet/hakkimizda/icon-2.png" alt="" />
                  </div>
                  <div className="text_2" style={{marginLeft: '30px', width: '570px'}}>
                    <h4 style={{color: 'white'}}>Bireylere Değer Katmak</h4>
                    <p style={{color: 'white'}}>Bireylerin kendilerine yeni değerler kazandırmalarını sağlamak</p>
                  </div>
                </div>
              </div>
              <div className="logo-area-2" style={{width: '100%', height: '142px'}}>
                <div className="left-bottom d-flex">
                  <div className="logo_3">
                    <img style={{width: '100%'}} src="img/bilginet/bilginet/hakkimizda/icon-3.png" alt="" />
                  </div>
                  <div className="text_3" style={{marginLeft: '30px', width: '570px'}}>
                    <h4 style={{color: 'white'}}>Yenilikçi Olmak</h4>
                    <p style={{color: 'white'}}>Eğitimlerimizle sektöre yön veren kuruluş olmak</p>
                  </div>
                </div>
                <div className="right-bottom d-flex">
                  <div className="logo_4">
                    <img style={{width: '100%'}} src="img/bilginet/bilginet/hakkimizda/icon-4.png" alt="" />
                  </div>
                  <div className="text_4" style={{marginLeft: '30px', width: '570px'}}>
                    <h4 style={{color: 'white'}}>Şeffaf Olmak</h4>
                    <p style={{color: 'white'}}>Kamuoyu ile açık, doğru ve karşılaştırılabilir bilgi paylaşımında bulunmak</p>
                  </div>
                </div>
              </div>
              <div className="top" style={{display: 'flex'}}>
                <div className="inner-left">
                  <img src="img/bilginet/bilginet/hakkimizda/kursiyer-memnuniyetinin-temel-kurali.webp" alt="" />
                </div>
                <div className="inner-right text-center">
                  <h3>Kursiyer memnuniyetinin temel kuralı, Kursiyer gözü ile bakmaktır.</h3>
                  <p>Müşterinin gözünden bakmak, tüm süreçleri müşteri odaklı hale getirmektedir. Müşterinin hizmet beklentisi ile aldığı hizmeti algılaması arasında her zaman farklılık olabilir. Bu farklılığın giderilmesi ise hizmeti sunan kuruluşun sorumluluğudur. Dolayısıyla Bilginet Akademi ; tüm bu sorumlulukların farkındalığıyla, müşteri memnuniyetine karşı olan tutumunu ISO 10002 belgesi ile tasdik 
                    etmiştir.</p>
                </div>
              </div>
              <div className="bottom">
                <div className="inner-left2 text-center">
                  <h3>Vizyonlarımızdan en önemlisi bilgilerin gizliliğidir.</h3>
                  <p>Bilginet Akademi ailesi olarak yola çıkış vizyonlarımızdan en önemlisi bilgilerin gizliliğidir. Günümüzde kuruluşlar hem kendi hem de bağlı oldukları yasal ve sözleşmelerden kaynaklı; işledikleri, sakladıkları ve yönettikleri bilgi ve bilgi varlıklarının gizliliğini, bütünlüğünü ve erişilebilirliğini korumak zorundadırlar. Bu nedenle Bilginet Akademi, müşteri bilgilerinin gizliliği ve güvenliğini ISO 27001 belgesi ile onaylatmış öncü bir kuruluştur.</p>
                </div>
                <div className="inner-right2">
                  <img src="img/bilginet/bilginet/hakkimizda/vizyonlarimizdan-en-onemlisi.webp" alt="" />
                </div>
              </div>
            </div>
            <div className="team-container">
              <div className="ekip">
                <h2>Ekibimiz</h2>
              </div>
              <div className="team d-flex">
                <div className="team-1 pb-3">
                  <h5 style={{textAlign: 'center', paddingTop: '420px', color: 'white'}}>Mustafa Yelbey</h5>
                  <p style={{textAlign: 'center', color: 'white'}}>Genel Müdür</p>
                </div>
                <div className="team-2 pb-3">
                  <h5 style={{textAlign: 'center', paddingTop: '420px', color: 'white'}}>Mustafa Candar</h5>
                  <p style={{textAlign: 'center', color: 'white'}}>İnsan Kaynakları &amp; Kurumsal Gelişim Müdürü</p>
                </div>
                <div className="team-3">
                  <h5 style={{textAlign: 'center', paddingTop: '400px', color: 'white'}}>Ramazan Başan</h5>
                  <p style={{textAlign: 'center', color: 'white'}}>Genel Müdür Yardımcısı</p>
                  <p style={{textAlign: 'center', color: 'white'}}>Projeler ve İş Geliştirme</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 justify-content-center d-flex pt-4 button">
                  <a style={{textDecoration: 'none'}} href="/ekip" target="_blank" className="default-btn py-3">
                    TÜM EKİBİMİZ
                    <img className="img-fluid ml-2" src="img/bilginet/bilginet/hakkimizda/button-icon.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="subelerimiz" style={{width: '75%', margin: 'auto', marginTop: '5%'}}>
              <h2 className="text-center" style={{color: 'white'}}>Şubelerimiz</h2>
              <div className="bursa" style={{width: '100%', display: 'flex', marginBottom: '3%', backgroundColor: '#191C21'}}>
                <div className="text-1 text-center" style={{width: '100%'}}>
                  <h5>Bursa Şube</h5>
                  <h6>ÖNDÜL ELİTE OFFICES B Blok K:8 D:98, 1600 Nilüfer/Bursa</h6>
                  <h6>444 2 202</h6>
                  <h6>info@bilginetakademi.com.tr</h6>
                </div>
                <div className="photo-1" style={{width: '100%'}}>
                  <img style={{width: '100%'}} src="img/bilginet/bilginet/hakkimizda/bursa-ofisi.webp" alt="" />
                </div>
                <div className="map-1" style={{width: '100%'}}>
                  {/* <img style="width: 100%;" src="bilginet/hakkimizda/Screenshot_4.webp" alt=""> */}
                </div>
              </div>
              <div className="balikesir" style={{width: '100%', display: 'flex', marginBottom: '3%', backgroundColor: '#191C21'}}>
                <div className="text-1 text-center" style={{width: '100%'}}>
                  <h5>Balıkesir Şube</h5>
                  <h6>Anafartalar Cad. Alanlar Sk. No:35/A Net-Acar Residans D:60 Dumlupınar Mahallesi Karesi/Balıkesir</h6>
                  <h6>444 2 202</h6>
                  <h6>info@bilginetakademi.com.tr</h6>
                </div>
                <div className="photo-1" style={{width: '100%'}}>
                  <img style={{width: '100%'}} src="img/bilginet/bilginet/hakkimizda/balikesir-ofisi.webp" alt="" />
                </div>
                <div className="map-1" style={{width: '100%'}}>
                  {/* <img style="width: 100%;" src="bilginet/hakkimizda/Screenshot_4.webp" alt=""> */}
                </div>
              </div>
              <div className="eskisehir" style={{width: '100%', display: 'flex', marginBottom: '3%', backgroundColor: '#191C21'}}>
                <div className="text-1 text-center" style={{width: '100%'}}>
                  <h5>Eskişehir Şube</h5>
                  <h6>Hoşnudiye Mah. İsmet İnönü Cad. No:13 Yalçın Kılıçoğlu Plaza K:2 D:9 Tepebaşı / Eskişehir</h6>
                  <h6>444 2 202</h6>
                  <h6>info@bilginetakademi.com.tr</h6>
                </div>
                <div className="photo-1" style={{width: '100%'}}>
                  <img style={{width: '100%'}} src="img/bilginet/bilginet/hakkimizda/eskisehir-ofisi.webp" alt="" />
                </div>
                <div className="map-1" style={{width: '100%'}}>
                  {/* <img style="width: 100%;" src="bilginet/hakkimizda/Screenshot_4.webp" alt=""> */}
                </div>
              </div>
              <div className="izmir" style={{width: '100%', display: 'flex', marginBottom: '3%', backgroundColor: '#191C21'}}>
                <div className="text-1 text-center" style={{width: '100%'}}>
                  <h5>İzmir Şube</h5>
                  <h6>Akdeniz Mah. Halit Ziya Blv. No:1 The Mercer Plaza Konak / İzmir</h6>
                  <h6>444 2 202</h6>
                  <h6>info@bilginetakademi.com.tr</h6>
                </div>
                <div className="photo-1" style={{width: '100%'}}>
                  <img style={{width: '100%'}} src="img/bilginet/bilginet/hakkimizda/izmir-ofisi.webp" alt="" />
                </div>
                <div className="map-1" style={{width: '100%'}}>
                  {/* <img style="width: 100%;" src="bilginet/hakkimizda/Screenshot_4.webp" alt=""> */}
                </div>
              </div>
            </div>
          </main>
          {/* <footer className="py-5 bg-black d-flex" style={{justifyContent: 'center', alignItems: 'center', margin: 'auto'}}>
            <hr />
            <div className="row bg-black text-center" style={{margin: 'auto'}}>
              <div className="col-6 col-md-2 mb-3">
                <h5 style={{color: 'gray'}}>Keşfet</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-light red">Eğitimlerimiz</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-light red">Kursiyerlerimiz</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-light red">Belge Doğrulama</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-light red">Makaleler</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-light red">Demo Panel</a></li>
                </ul>
              </div>
              <div className="col-6 col-md-2 mb-3">
                <h5 style={{color: 'gray'}}>Kurumsal</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-light red">Hakkımızda</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-light red">Ekibimiz</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-light red">Basında Biz</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-light red">Franchising</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-light red">İletişim</a></li>
                </ul>
              </div>
              <div className="col-6 col-md-2 mb-3">
                <h5 style={{color: 'gray'}}>Politikalarımız</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-light red">Kalite Politikamız</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-light red">Müşteri Politikamız</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-light red">Bilgi Güvenliği Pol.</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-light red">Pozitif Ayrımcılık Pol.</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-light red">KVKK Aydınlatma</a></li>
                </ul>
              </div>
              <div className="col-6 col-md-2 mb-3">
                <h5 style={{color: 'gray'}}>Sosyal Medya</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-light red">
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                      </svg> Instagram</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-light red">
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg> Facebook</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-light red">
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                      </svg> Youtube</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-light red">
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                      </svg> Twitter</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-light red">
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg> Linkedin</a></li>
                </ul>
              </div>
              <div className="d-flex flex-column flex-sm-row justify-content-between py-1 my-1 text-center" style={{margin: 'auto'}}>
                <img style={{width: '194px', height: '90px'}} src="bilginet/hakkimizda/bilginet-akademi-footer-logo-01.svg" alt="" />
                <p>© 2023 Bilginet Akademi</p>
                <div className="float-md-left  ml-sm-4 pt-2 mt-1">
                  <img style={{width: '13px', height: '13px'}} src="bilginet/hakkimizda/lock.png" alt="" />
                  <span className="mt-5">Secured with SSL</span>
                </div>
              </div>
            </div></footer> */}
        </div>
      );
    }
export default Hakkimizda