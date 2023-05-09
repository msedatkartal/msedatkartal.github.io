import React, { useState } from 'react'

function KayitPage() {
    const egitim_list = [
        {
            id:1,
            value:"1",
            title:"Uluslararası ISO 9001:2015 Baş Denetçi Eğitimi",
            ülke:"Türkiye"
        },
        {
            id:2,
            value:"2",
            title:"Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi",
            ülke:"Almanya"
        },
        {
            id:3,
            value:"3",
            title:"Uluslararası ISO 27001:2022 Baş Denetçi Eğitimi" ,
            ülke:"İtalya"
        },
        {
            id:4,
            value:"4",
            title:"Uluslararası ISO 22000:2018 Baş Denetçi Eğitimi" ,
            ülke:"ABD"
        },
        {
            id:5,
            value:"5",
            title:"Uluslararası ISO 9001:2015 Baş Denetçi Eğitimi" ,
            ülke:"İngiltere"
        },
        {
            id:6,
            value:"6",
            title:"Köpek Eğitmenliği Eğitimi" ,
            ülke:"Almanya"
        },
        {
            id:7,
            value:"7",
            title:"Köpek Eğitimi" ,
            ülke:"İsviçre"
        },
        {
            id:8,
            value:"8",
            title:"Bebek Spa ve Masajı Eğitimi" ,
            ülke:"Yunanistan"
        },
        {
            id:9,
            value:"9",
            title:"Proje Yönetimi ve Hibe/Fon Kaynakları Eğitimi" ,
            ülke:"Bulgaristan"
        },
        {
            id:10,
            value:"10",
            title:"Bebek Bakımı Eğitimi" ,
            ülke:"Makedonya"
        },
        {
            id:11,
            value:"11",
            title:"Uluslararası ISO 9001:2015 Baş Denetçi Eğitimi" ,
            ülke:"Gürcistan"
        },
        {
            id:12,
            value:"12",
            title:"Oyun Terapisi Eğitimi " ,
            ülke:"Rusya"
        },
        {
            id:13,
            value:"13",
            title:"Masal Terapisi Eğitimi" ,
            ülke:"İran"
        },
        {
            id:14,
            value:"14",
            title:"Öğrenci Koçluğu Eğitimi" ,
            ülke:"Romanya"
        },
        {
            id:15,
            value:"15",
            title:"Yaşam Koçluğu Eğitimi" ,
            ülke:"Sırbistan"
        },
        {
            id:16,
            value:"16",
            title:"Robotik ve Kodlama Eğitimi" ,
            ülke:"Avusturya"
        },
    ]
    const [egitims,setEgitims] = useState(egitim_list)
    return (
        <>
            <main>
                <div id='kayit' className="kayitpage-con">
                    <div className="kayitpage-fluit">
                        <form>
                            <div className="head-con">
                                <img src="img/header-logo.png" alt="" />
                                <a href="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                                </a>
                            </div>
                            <p className='pp'>Eğitimlerimize sadece bir adım uzaklıktasın. Aşağıdaki formu doldurduğunuzda detaylı bilgi için sizi arayacağız.</p>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Eğitim</label>
                                <select class="form-select bg-black" aria-label="Default select example">
                                    <option selected>Seçiniz</option>
                                    {
                                        egitims.map(egitim=>{
                                            return(
                                                <option value={egitim.value} > {egitim.title} </option>
                                            )

                                        })
                                    }
                                </select>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Adınız Soyadınız</label>
                                <input type="text" className="form-control" id="autoSizingInput" />
                            </div>
                            <div className="mb-3">
                                <div class="row g-2">
                                    <div class="col-md">
                                        <label for="exampleInputPassword1" className="form-label">Ülkeler</label>                                       
                                        <select class="form-select bg-black" id="autoSizingSelect">
                                            <option selected>Seçiniz</option>
                                            {
                                                egitims.map(egitim =>{
                                                    return(
                                                        <option value= {egitim.value} > {egitim.ülke} </option>

                                                    )
                                                })
                                            }

                                        </select>
                                    </div>
                                    <div class="col-md">
                                        <label for="exampleInputPassword1" className="form-label">GSM</label>
                                        <label class="visually-hidden" for="autoSizingInput">Name</label>
                                        <input type="text" class="form-control" id="autoSizingInput" />
                                    </div>
                                </div>
                            </div>
                            <button style={{ width: "100%" }} type="submit" className="btn btn-danger">GÖNDER</button>
                            <small>Bize telefon numaranızı vererek Hizmet Şartları ve Gizlilik Politikasını kabul etmiş olursunuz.</small>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}

export default KayitPage