import React from 'react'

function Accordion() {
    return (
        <>
            <div className="accordion-con w-100">
                <div className="accordion-fluid">
                    <h2 style={{textAlign:"center"}}>SIKÇA SORULAN SORULAR</h2>
                    <h5>Genel</h5>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" >
                                <button className="accordion-button sign-in-cont" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <p>Bilginet Akademi nedir?</p>
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Bilginet Akademi, alanında profesyonel kişiler tarafından kurulmuş ve profesyonel ekiple çalışan, "Eğitmen ve Eğitimin Kalitesi" ilkesiyle yola çıkmış, yeni nesil eğitim platformudur. Kaliteli eğitimin herkes için ulaşılabilir olması gerektiğine inanan Bilginet Akademi eğitimleri, zamandan ve mekandan bağımsız şekilde videolar, canlı yayınlar, dokümanlar ve süpervizyonlarla harmanlamış eğitim içeriğine sahiptir. Bilginet Akademi, geleceğe yön verme anlayışıyla kendilerindeki ışığı yakalamak isteyen aynı zamanda geleceğe ışık tutmak isteyen bireyler için, ulusal ve uluslararası akreditasyon işbirlikleriyle yaşam boyu öğrenmeyi hedef edinmiştir</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <p>Eğitimlere nasıl kayıt olabilirsiniz?</p>
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Bilginet Akademi eğitimlerine; kurumsal web sayfamız ve sosyal medya hesaplarımızdan ulaşabilir, dilerseniz 444 2 202 nolu hattımız üzerinden de bizlere arayarak eğitimlerimize kayıt olabilirsiniz.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <p>Eğitimimize neler dahildir?</p>
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Bilginet Akademi eğitimlerinize, alanında uzman eğitmenlerle 4K çekim kalitesine sahip ders videoları, eğitmeninize sorular sorabileceğiniz canlı yayınlar, ders içeriklerinin dokümanları ve eğitiminizi taçlandıracağınız 2 gün sürecek olan süpervizyonlar dahildir. Mevcut eğitimlerle ilgili web sayfamız üzerinden eğitim detay bölümlerini inceleyerek eğitiminize neler dahil olduğunu daha detaylı olarak görebilirsiniz.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    <p>Eğitimimize nereden ulaşabilirsiniz?</p>
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Bilginet Akademi eğitimlerine, dilediğiniz zaman diliminde ve istediğiniz yerden bilgisayar, tablet ve akıllı telefonlarınızdan sitemiz üzerinden erişebilirsiniz.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    <p>Eğitimde zaman problemi var mı?</p>
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Bilginet Akademi olarak; en büyük olanaklarımızdan biri eğitimlerimizde zaman problemimin olmamasıdır. Dilediğiniz zaman diliminde eğitimlerinize erişebilir; aynı zamanda ömür boyu açık eğitimlerimizle sertifikanızı aldıktan sonra da eğitimlerinize öğrenci paneliniz üzerinden erişim sağlayabilirsiniz. Eğitimlerin zaman aralıkları birbirinden farklıdır. Detaylı bilgi almak için eğitim detay sayfalarından bilgi alabilirsiniz.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    <p>Eğitim programına katılmak için yaş sınırı var mıdır?</p>
                                </button>
                            </h2>
                            <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Bilginet Akademi eğitim programlarına katılmak için 18 yaş ve üstü olmak gerekmektedir.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                    <p>Soru, sorun ve görüşlerim için destek alabilirmiyim?</p>
                                </button>
                            </h2>
                            <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Herhangi bir sorun yaşadığınızda, size özel destek veren 444 2 202 nolu hattımız üzerinden müşteri ilişkileriyle iletişime geçebilir veya sosyal medya hesaplarımız üzerinden bizlere ulaşabilirsiniz.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h5>Sertifika</h5>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="true" aria-controls="collapseEight">
                                    <p>Anlaşmalı ünivesiteler nelerdir?</p>
                                </button>
                            </h2>
                            <div id="collapseEight" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>İstanbul Ticaret Üniversitesi ve İstanbul Gedik Üniversitesi Bilginet Akademi olarak anlaşmalı olduğumuz üniversitelerdir. Üniversite onaylı sertifikaya sahip olmak eğitiminizde ve kariyerinizde sizi ön plana çıkaracaktır.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                    <p>Sertifika iş bulma noktasında kolaylık sağlar mı?</p>
                                </button>
                            </h2>
                            <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Sahip olacağınız sertifika iş bulmada tabii ki de yardımcı olacaktır. Kariyer hayatının içinde olanlar ve eğitimlerle kendini geliştirmek isteyenler dışında özellikle yeni mezun olmuş bireylerin özgeçmişlerinin yanında, aldıkları eğitimlerin sertifikasının olması son dönemde oldukça önemli görülmektedir. İşe alım sürecinde almış olduğunuz eğitimlerle dikkat çekebilirsiniz. Bilginet Akademi eğitimleri sonunda sahip olacağınız belge üniversite onaylı başarı sertifikasıdır, katılım belgesi değildir.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                    <p>CPD onaylı eğitim nedir?</p>
                                </button>
                            </h2>
                            <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Bilginet Akademi eğitimleri, İngiltere merkezli Continuous Professional Development Standards Office (CPDSO), tarafından akredite edilmiştir. Continuing Professional Development (CPD), Sürekli Mesleki Gelişim anlamına gelmektedir. Profesyonellerin yeteneklerini geliştirmek ve öğrenme etkinliklerini tanımlamak için kullanılan terimdir. Sertifikalarınızda CPD onayı bulunan eğitimlere detay sayfalarında görebilirsiniz.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                    <p>Eğitim sertifikamı e-devlette görebilir miyim?</p>
                                </button>
                            </h2>
                            <div id="collapseEleven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Bilginet Akademi olarak İstanbul Ticaret Üniversitesi ve İstanbul Gedik Üniversitesi anlaşmalı olduğumuz üniversitelerdir. Eğitiminizi tamamladıktan sonraki süreçte İstanbul Ticaret Üniversitesi veya İstanbul Gedik Üniversitesi başlığı altında e-devlet üzerinden sorgulama yaparak sertifikanızı görüntüleyebilirsiniz.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                                    <p>Eğitime kayıt olmadan önce sertifika örneklerini görebilir miyim?</p>
                                </button>
                            </h2>
                            <div id="collapseTwelve" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Alacağınız eğitimin sertifika örneklerini sitemiz üzerinden görebilir, dilerseniz eğitim danışmanlarımızla yapacağınız görüşmede isteyebilirsiniz.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h5>Ödeme & İptal</h5>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="true" aria-controls="collapseThirteen">
                                    <p>Eğitim ödemelerini nasıl yapabilirsiniz?</p>
                                </button>
                            </h2>
                            <div id="collapseThirteen" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Eğitim programları ödemelerinde; banka kartı, kredi kartı, sanal kart, EFT ve havale gibi geniş ödeme seçenekleri mevcuttur. Aynı zamanda kredi kartına 12 taksite varan taksit imkanı sunulmaktadır.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
                                    <p>Cayma ve iptal hakkı mevcut mudur?</p>
                                </button>
                            </h2>
                            <div id="collapseFourteen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Eğitimi satın almaya ilişkin talebinizin ardından eğitim danışmanlarımızca tarafınıza mesafeli satış sözleşmesi ulaştırılır. Sözleşme, cep telefonunuza kısa mesaj olarak gelen kodun girilmesi sureti ile dijital olarak imzalanmış sayılır. Bu işlem ile eş zamanlı olarak satın almış olduğunuz eğitimin tamamı öğrenci panelinize yüklenir. İlgili yasal düzenleme gereğince sözleşmenin dijital olarak imzalanmasının ardından cayma hakkı mevcut olmayıp, yapılan satışlar kural olarak kesin olmakla birlikte iadesi mümkün değildir.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifteen" aria-expanded="false" aria-controls="collapseFifteen">
                                    <p>Paylaştığım kişisel verilerime ilişkin haklarım nelerdir?</p>
                                </button>
                            </h2>
                            <div id="collapseFifteen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Kişisel verileriniz, veri sorumlumuz tarafından KVKK mevzuatına uygun olarak saklanmakta ve korunmaktadır. Kişisel verilerinizin ne şekilde saklandığı ve işlendiğiyle ilgili olarak ayrıntı bilgileri ve başvuru formunu web sitemizde bulabilirsiniz.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accordion