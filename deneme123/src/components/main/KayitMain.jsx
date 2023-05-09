import React from 'react'

function KayitMain() {
    return (
        <>
        <div className="kayitmain-con w-100">
                <div className="kayitmain-fluit">
                    <div className="kayitmain-kayt">
                        <div className="kayit-text">
                            <h4 style={{ color: "#ffffff" }}>E_Bültene Kaydolun</h4>
                            <p>Kampanyalar, yeni eğitimler ve diğer gelişmelerden haberdar olmak için e-bültene kaydolunuz.</p>
                        </div>
                        <div className="kayitmain-input-fluit">
                            <div className="kayit-input">
                                <input className='inn' type="email" name="email" placeholder='E-Posta Adresinizi Ekleyin' /><br />
                                <input type="checkbox" name="checkbox" />E-posta almayı kabul ediyorum.
                            </div>
                            <button style={{ width: "178px", height: "47px", color: "#a2a4a7", background: "transparent", border: "1px solid #a2a4a7", marginLeft: "10px" }}>ABONE OL</button>
                        </div>
                    </div>
                    <div className="kayitmain-duyuru">
                        <div className="baslik-fluit">
                            <div className="baslik">
                                <h2>Eğitim ve Eğitmen Duyuruları</h2>
                                <p>Son bilgiler,gelişmeler,makaleler</p>
                            </div>
                        </div>
                        <div className="egitimler-fluit">
                            <div className="egitimler">
                                <div className="ust box1">
                                    <img src="img/blog.png" alt="" />
                                    <h6>Bilginet Akademi</h6>
                                    <h5>Proje Yönetimi ve Hibe/Fon Kaynakları Eğitimi</h5>
                                    <p>Eğitim video içeriğine; PMBOK V7 yeni versiyonunda yapılan değişiklikler, PMBOK V7 içeriği ve PMP sınavına hazırlanan kursiyerler için örnek sorular eklenerek güncelleme yapılmıştır.</p>
                                </div>
                                <div className=" alt box1">
                                    <img src="img/blog.png" alt="" />
                                    <h6>Bilginet Akademi</h6>
                                    <h5>ISO 27001:2022 Baş Denetçi Eğitimi</h5>
                                    <p>ISO 27001:2022 Baş Denetçi eğitiminde Türkiye’de bir ilk olan hibrit eğitim modeliyle kursiyerlerimize hizmet vermenin gururunu yaşıyoruz. Ayrıntılı bilgi almak için bize ulaşın!</p>
                                </div>
                            </div>
                            <div className="egitimler-2">
                                <img style={{ marginLeft: "16px" }} src="img/blog.png" alt="" />
                                <h6>Bilginet Akademi</h6>
                                <h5>Yenilendik!</h5>
                                <img className='imgg' src="img/duyuru.webp" alt="" />
                                <p>Sizlere daha iyi hizmet sunabilmek adına tüm sistemimizi yeniledik. Siz değerli kursiyerlerimizin istek ve beklentilerine hızlı, kolay ve ulaşılabilir olmanın mutluluğunu yaşıyoruz.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default KayitMain