import React from "react";
import Youtube from "../component/Youtube";
import filmImg from "../assets/image/film.png";
import "./Streaming.scss";
import { useParams } from "react-router";

const Streaming = () => {
  let { slug } = useParams();

  const day1 = [
    {
      judul: "Like Fish Living On Land",
      direktor: "Salas Anggobil Rokhira",
      poster: "FK1A.jpg",
      sinopsis: `Joko (45) seorang petani tambak yang mengalami kerugian dengan kehilangan ikan yang cukup banyak
      akibat ROB/banjir dari air laut yang setiap tahun meningkat tajam. Suatu hari Joko meminta bantun
      kepada Mbah Wito(60) seorang dukun untuk mengatasi masalahnya tersebut. Mbah Wito menyuruh
      Joko untuk memindah semua sisa-sisa ikan tersebut dalam rumahnya. Karena Mbah Wito
      beranggapan bukan hanya air Rob saja yang membuat ikan Joko hilang, namun juga ada salah satu
      makhluk gaib yang suka dengan Joko tinggal di pohon dekat tambak tersebut. Mbah Wito kemudian
      memberikan sekantong dupa untuk dibakar pada malah hari kepada Joko. Dupa tersebut sebagai
      penangkal untuk makhluk tersebut tidak menganggu ikan-ikan yang dipindah kedalam rumah Joko.
      Joko menerima baik arahan dari Mbah Wito, dengan sesegara memindahkan semua sisa ikan itu
      kesetiap ruangan rumah dengan ember. Hal tersebut justru membawa mala petaka bagi Fatimah (40)
      dan Udin (10) didalam rumahnya. Aktivitas Fatimah seperti mencuci, masak dan tidur pun terganggu
      dengan adanya bau amis ikan-ikan tersebut. Udin juga mengalami gatal-gatal dibadannya dan juga
      kesulitan tidur dimalam hari. Suasana malam semakin mencekam saat Joko melakukan ritual yang
      diperintahkan oleh mbah wito. Asap dari dupa tersebut menyebar memenuhi semua ruangan menjadi
      satu dengan bau ikan yang semakin amis. Menjadikan Fatimah dan Udin tidak betah didalam dan
      akhirnya keluar dari rumah, membuat mereka seperti ikan yang tidak tidur seperti ikan.`
    },{
        judul: "Kelangan Senter",
        direktor: "Adityo Hernawan",
        poster: "FK1B.png",
        sinopsis: `Dusun Kremi Kidul merupakan daerah perkampungan yang aman, nyaman, serta damai. Meski demikian, aktivitas ronda malam tetap rutin dilaksanakan. Malam ini giliran Agus, Yos, dan Satria yang bertugas menjaga pos ronda. Seperti biasa, di jam-jam tertentu setiap yang bertugas akan keliling Dusun untuk patroli, memastikan setiap sudut Dusun Kremi Kidul aman. 
        Masalah pun muncul ketika senter yang biasanya dipakai untuk patroli hilang. Mereka mencari ke setiap sudut pos ronda namun tetap saja tidak ketemu. Dugaan demi dugaan pun muncul atas hilangnya senter tersebut. Mereka pun tak kunjung berangkat patroli, mereka terus memperdebatkan siapa yang sampai hati mengambil senter Pos Ronda Dusun Kremi Kidul.`
    },{
        judul: "Nebeng",
        direktor: "M. Faisal Hibatulah",
        poster: "FK1C.jpeg",
        sinopsis: `Demi mendapatkan uang tambahan, Karyo (45) seorang sopir truk terpaksa mengantar jenazah Tazbo (23) untuk pulang ke rumah dukanya. Sepanjang perjalanan untuk membunuh rasa bosan, Karyo memberanikan diri membuka percakapan tentang kematian hingga masalah hidupnya yang pelik.`
    },{
        judul: "Mata Tertutup",
        direktor: "Syahreza Fahlevi",
        poster: "FK1D.jpg",
        sinopsis: `Ridwan adalah seorang pemijat tunanetra yang tinggal di kota Jakarta di sebuah rusun padat penduduk bersama Siti Istrinya. Ridwan sering menghibur dirinya dengan mendengarkan Radio. Namun pada saat itu, radio banyak menyiarkan kasus penangkapan kasus korupsi yang terjadi dari tahun ke tahun. Tanggapan Ridwan tampak acuh dan bosan atas pemberitaan tersebut dan mencari siaran lain yang dapat menghibur dirinya.  Suatu malam Ridwan mendapatkan panggilan untuk memijat. Setelah kepelungan Ridwan, terjadi perdebatan antara Ridwan dengan Siti Istrinya akan upah yang di dapat Ridwan. Ridwan mendapatkan amplop yang berisikan uang yang cukup banyak. Siti merasa senang karena dapat meneruskan uang tersebut untuk membayar sewa tempat tinggalnya, namun terbalik dengan Ridwan yang ingin mengembalikan uang tersebut untuk memastikannya. Ridwan berusaha menghubungi Agus, seseorang yang mengantarnya pulang namun tidak dapat dihubungi. Ridwan berusaha mengingat jalan-jalan yang telah dilewati sebelumnya hingga akhirnya berhasil sampai dan bertemu dengan Agus di tempat kerjanya. Ridwan diantarkan oleh Agus untuk menemui atasanya melewati sebuah ruang yang penuh dengan meja dan bangku yang tersusun rapih, berjalan jauh melewati lorong hingga akhirnya masuk kedalam sebuah ruangan yang terpasang sebuah data penghuni serta nomer kamar sebuah lapas di pintu masuknya.`
    }
  ]

  return (
    <div className="container">
      <h1 className="header">DAY - {slug} BRAWIJAYA FILM FESTIVAL</h1>
      <Youtube />
      <div className="row mb-5">
        <div className="col-2" style={{ padding: "0" }}>
          <img src={filmImg} alt="" />
        </div>
        <div className="col-10">
          <h1>Judul Film</h1>
          <h6>Direktor, Tahun</h6>
          <h6>Durasi</h6>
          <h6>Genre</h6>
        </div>
      </div>
      <div className="row mb-5">
        <h4>Sinopsis</h4>
        <h6>
          Be sure to test any solution across different Reader preferences. A
          site visitor may have their browser set to open the PDF in
          Reader/Acrobat as opposed to the browser, e.g., by disabling the
          Acrobat plugin in Firefox..
        </h6>
        <h6>
          I can't be sure of my results, because I have two different Acrobat
          plugins that Firefox recognizes due to my having different versions of
          Adobe Acrobat and Adobe Reader, but it does appear that you at least
          need to test what happens if a website visitor has their browser set
          to not open the PDF in the browser. It could be quite annoying when
          they look at what appears to be an otherwise usable web page and their
          browser is nagging them to open a PDF file that they think they didn't
          request. In some cases, the PDF file spontaneously opened in Adobe
          Reader, not the browser, and in other cases the browser threw up a
          dialog saying the file didn't exist.
        </h6>
      </div>
    </div>
  );
};

export default Streaming;
