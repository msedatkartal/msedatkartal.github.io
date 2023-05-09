import React, { useState } from 'react'
import Education from './Education';

function Educations() {
    const education_list = [
        {
            id: 1,
            title: "Uluslararası ISO 9001:2015 Baş Denetçi Eğitimi",
            text1: "Hamdi Dikmen",
            text2: "İTÜ Metalurji Müh. - Uluslararası Baş Tetkikçi",
            text3: "100 Ders (117 Saat)",
            text4: "Kaçırılan fırsatlar, size keşke ile başlayan cümleler kurdurabilir.Keşke dememek için tüm dünyada geçerliliği olan yeni bir meslek edinme fırsatını kaçırmayın! Uluslararası ISO 9001:2015 Baş Denetçi eğitim programıyla yeni ve saygın bir mesleğe giriş yapın!",
            imgurl:"img/egitimler/1.webp"
        },
        {
            id: 2,
            title: "Uluslararası ISO 22000:2018 Baş Denetçi Eğitimi",
            text1: "Tülin Ay",
            text2: "Gıda Mühendisi-Baş Denetçi",
            text3: "99 Ders (123 Saat)",
            text4: "Daha güvenli gıda, daha sağlıklı yaşam demektir. Uluslararası ISO 22000:2018 Gıda Güvenliği Yönetim Sistemleri standardını öğrenerek herkes için parlak bir geleceğe adım atın!",
            imgurl:"img/egitimler/2.webp"
        },
        {
            id: 3,
            title: "Uluslararası ISO 45001:2018 Baş Denetçi Eğitimi",
            text1: "Hamdi Dikmen",
            text2: "İTÜ Metalurji Müh. - Uluslararası Baş Tetkikçi",
            text3: "56 Ders (87 Saat)",
            text4: "Kuruluşların güvenli bir iş sağlığı politikası oluşturması ve ilgili standardın baş denetçisi olmanız amacıyla hazırlanmış uluslararası ISO 45001:2018 İş Sağlığı ve Güvenliği Baş Denetçi eğitimine katılarak, kariyer basamaklarını hızla tırmanın!",
            imgurl:"img/egitimler/3.webp"
        },
        {
            id: 4,
            title: "Uluslararası ISO 14001:2015 Baş Denetçi Eğitimi",
            text1: "Oğuz Hakan Aksu",
            text2: "Eğitmen - Uluslararası Baş Tetkikçi",
            text3: "38 Ders (56 Saat)",
            text4: "Uluslararası ISO 14001:2015 Çevre Yönetim Sistemi Baş Denetçi eğitimi ile siz de küresel ısınma, iklim değişikliği, biyoçeşitliliğin bozulması gibi birçok çevresel problemleri doğru bir şekilde anlayabilir ve sürdürülebilir çözümler üretebilirsiniz!",
            imgurl:"img/egitimler/4.webp"
        },
        {
            id: 5,
            title: "Kalite Mühendisliği ve Yöneticiliği Eğitimi",
            text1: "Hülya Yalçın / Dr. İsmail Durgun",
            text2: "Endüstri Müh. - Kalite Danışmanı / Akademisyen - Proje Yöneticisi",
            text3: "65 Ders (82 Saat)",
            text4: "Entegre Kalite Mühendisliği ve Yöneticiliği eğitim programı sayesinde; bir kuruluşun, stratejik planlama, pazarlama, ürün ve üretim süreci tasarımı, üretim gibi süreçlerini etkin bir şekilde planlanması, uygulanması, performansının izlemesi ve sürekli iyileştirilmesi için, birçok yönetimsel ve istatistiksel araç sunma becerisine sahip olabilirsiniz.",
            imgurl:"img/egitimler/5.webp"
        },
        {
            id: 6,
            title: "Proje Yönetimi ve Hibe/Fon Kaynakları Eğitimi",
            text1: "Doç. Dr. Oğuz Demir / Dr. İsmail Durgun",
            text2: "Akademisyen-Ekonomist / Akademisyen, Proje Yöneticisi",
            text3: "129 Ders (136 Saat)",
            text4: "Dünyaca kabul görmüş Project Management Institute (PMI®) uyumlu proje yönetimi konusunda derinlemesine bilgi sahibi olmak, sektörde proje yönetimi alanında profesyonelleşmek isteyen  bireyler için hazırlanmış  Proje Yönetimi ve Hibe/Fon Kaynakları Eğitimiyle kariyer basamaklarını hızla çıkabilirsiniz.",
            imgurl:"img/egitimler/6.webp"
        }, {
            id: 7,
            title: "Oyun Terapisi Eğitimi",
            text1: "Fundem Ece",
            text2: "Psikoterapist-Klinik Psikolog",
            text3: "38 Ders (85 Saat)",
            text4: "Oyun oynamanın üç işlevi bulunmaktadır; çocuğun bilişsel gelişimini desteklemek, motor kabiliyetlerini geliştirmek ve duygusal dışavurumu sağlamak. Çocuk, oyun oynarken yaşadığı dış dünyanın bir kopyasını oluşturur ve kendi iç dünyasındaki yansımalarını ortaya koyar.",
            imgurl:"img/egitimler/7.webp"
        },
        {
            id: 8,
            title: "Masal Terapisi Eğitimi",
            text1: "Tuğçe İnkaya / Meltem Cıbır",
            text2: "Psikolojik Danışman / Uzman Klinik Psikolog",
            text3: "26 Ders (91 Saat)",
            text4: "Çocuklar masallar ile sınırların olmadığı bir evren yaratır. Masal Terapisi Eğitimi ile çocukların yarattığı evrene misafir olurken, yaşadıkları zorlukları masal ile aşmasına yardımcı olur. İstanbul Ticaret Üniversitesi ve CPD onaylı Masal Terapisi Eğitimi video derslerine ve özel materyallere ömür boyu erişmek için bugün kaydolun. Mobil veya masaüstünde kendi hızınızda öğrenin",
            imgurl:"img/egitimler/8.webp"
        },
    ]
    const [educations, setEducations] = useState(education_list);
    // console.log(setEducations);
    return (
        <>
        <Education educations={educations} />
        </>
    )
}

export default Educations