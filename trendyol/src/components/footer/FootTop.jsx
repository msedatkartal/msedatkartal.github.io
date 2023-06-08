import React from 'react'

function FootTop() {
    const list = [
        {
            id:0,
            text1:"penti",
            text2:"Bluetooth Kulaklık"
        },
        {
            id:1,
            text1:"Watsons",
            text2:"Alışveriş Kredisi"
        },
        {
            id:2,
            text1:"Stradivarius",
            text2:"Laptop"
        },
        {
            id:3,
            text1:"İstikbal",
            text2:"Kulaklık"
        },
        {
            id:4,
            text1:"Puma",
            text2:"Apple Watch"
        },
        {
            id:5,
            text1:"Apple",
            text2:"Buzdolabı"
        },
        {
            id:6,
            text1:"Xiaomi",
            text2:"TV Ünitesi"
        },
        {
            id:7,
            text1:"Greyder",
            text2:"iPhone 14 Pro"
        },
        {
            id:8,
            text1:"Adidas",
            text2:"Kadın Hediye"
        },
        {
            id:9,
            text1:"Lacoste",
            text2:"Kahve Makinesi"
        },
        {
            id:10,
            text1:"Madame Coco",
            text2:"Oyuncu Koltuğu"
        },
        {
            id:11,
            text1:"Defacto",
            text2:"Saat"
        },
        {
            id:12,
            text1:"Tchibo",
            text2:"Apple Airpods"
        },
        {
            id:13,
            text1:"Network",
            text2:"Sweatshirt"
        },
        {
            id:14,
            text1:"Kiğılı",
            text2:"Hediye Rehberi"
        },
        {
            id:15,
            text1:"Mango",
            text2:"iPhone"
        },
        {
            id:16,
            text1:"English Home",
            text2:"iPhone 13"
        },
        {
            id:17,
            text1:"Bellona",
            text2:"Tam Altın"
        },
        {
            id:18,
            text1:"Samsung",
            text2:"Bluetooth Kulaklık"
        },
        {
            id:19,
            text1:"Mudo",
            text2:"Çamaşır Makinesi"
        },
        {
            id:20,
            text1:"Hummel",
            text2:"Takım Elbise"
        },
        {
            id:21,
            text1:"Oppo",
            text2:"Sırt Çantası"
        },
        {
            id:22,
            text1:"Arçelik",
            text2:"iPhone 14"
        },
        {
            id:23,
            text1:"Nike",
            text2:"22 Ayar Bilezik"
        },
        {
            id:24,
            text1:"Avva",
            text2:"Termos"
        },
        {
            id:25,
            text1:"Pull & Bear",
            text2:"Elbise"
        },
        {
            id:26,
            text1:"Mavi",
            text2:"Ayakkabı"
        },
        {
            id:27,
            text1:"Farmasi",
            text2:"Trendyol EN"
        },
        {
            id:28,
            text1:"Bosch",
            text2:"Trendyol DE"
        },
        {
            id:29,
            text1:"Migros",
            text2:"Trendyol Blog"
        },
        {
            id:30,
            text1:"Avon",
            text2:"Earthquake Campaign"
        },
        {
            id:31,
            text1:"Vivense",
            text2:"Samsung Cep Telefonu"
        },
        {
            id:32,
            text1:"Bershka",
            text2:"Robot Süpürge"
        },
        {
            id:33,
            text1:"Beymen",
            text2:"Tablet"
        },
        {
            id:34,
            text1:"Addax",
            text2:"Koltuk Takımı"
        },
        {
            id:35,
            text1:"Derimod",
            text2:"Bulaşık Makinesi"
        },
        {
            id:36,
            text1:"Huawei",
            text2:"Abiye Elbise"
        },
        {
            id:37,
            text1:"Monster Notebook",
            text2:"Çalışma Masası"
        },
        {
            id:38,
            text1:"DYSON",
            text2:"Elektrikli Scooter"
        },
        {
            id:39,
            text1:"Skechers",
            text2:"Televizyon"
        },
        {
            id:40,
            text1:"Under Armour",
            text2:"Sevgiliye Hediye"
        },
        {
            id:41,
            text1:"Koton",
            text2:"Popüler Aramalar"
        },
        {
            id:42,
            text1:"Pierre Cardin",
            text2:"Akülü Araba"
        },
        {
            id:43,
            text1:"Herbalife",
            text2:"Spor Ayakkabı"
        },
        {
            id:44,
            text1:"Karaca",
            text2:"Akıllı Saat"
        },
    ]
  return (
    <>
    <div className="foot-top-con">
        <div className="foot-top-fluit">
            <div className="left boxbot">
                <p>Popüler Marka ve Mağazalar</p>
                {
                    list.map(liste=>{
                        return(
                            <div key={liste.id} className="box-a">
                                <a href="/"> {liste.text1} </a>
                            </div>
                        )
                    })
                }
            </div>
            <div className="right boxbot">
                <p>Popüler Sayfalar</p>
                {
                    list.map(liste=>{
                        return(
                            <div key={liste.id} className="box-a">
                                <a href="/"> {liste.text2} </a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default FootTop