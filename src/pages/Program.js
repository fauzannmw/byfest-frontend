import { Row, Col, Card, Image, Modal } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import GlobalNavbar from "../component/GlobalNavbar";
// import GlobalFooter from "../component/GlobalFooter";
import "./Program.scss";
import Poster from "../assets/image/poster.jpg";
import Screenshot from "../assets/image/screenshot.jpg";
import { useState } from "react";
import { Helmet } from "react-helmet";
import CloseButton from "@material-ui/icons/Close";

const Program = () => {
  const posterFilmFK1 = [
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
      akhirnya keluar dari rumah, membuat mereka seperti ikan yang tidak tidur seperti ikan.`,
      screenshot: "",
    },
    {
      judul: "Kelangan Senter",
      direktor: "Adityo Hernawan",
      poster: "FK1B.png",
      sinopsis: `Dusun Kremi Kidul merupakan daerah perkampungan yang aman, nyaman, serta damai. Meski demikian, aktivitas ronda malam tetap rutin 
      dilaksanakan. Malam ini giliran Agus, Yos, dan Satria yang bertugas menjaga pos ronda. Seperti biasa, 
      di jam-jam tertentu setiap yang bertugas akan keliling Dusun untuk patroli, memastikan setiap sudut Dusun Kremi Kidul aman. 
      Masalah pun muncul ketika senter yang biasanya dipakai untuk patroli hilang. Mereka mencari ke setiap sudut pos ronda 
      namun tetap saja tidak ketemu. Dugaan demi dugaan pun muncul atas hilangnya senter tersebut. Mereka pun tak kunjung berangkat patroli, 
      mereka terus memperdebatkan siapa yang sampai hati mengambil senter Pos Ronda Dusun Kremi Kidul.`,
      screenshot: "",
    },
    {
      judul: "Nebeng",
      direktor: "M. Faisal Hibatulah",
      poster: "FK1C.jpeg",
      sinopsis: `Demi mendapatkan uang tambahan, Karyo (45) seorang sopir truk terpaksa mengantar jenazah Tazbo (23) untuk pulang ke rumah dukanya. 
      Sepanjang perjalanan untuk membunuh rasa bosan, Karyo memberanikan diri membuka percakapan tentang kematian hingga masalah hidupnya yang pelik.`,
      screenshot: "",
    },
    {
      judul: "Mata Tertutup",
      direktor: "Syahreza Fahlevi",
      poster: "FK1D.jpg",
      sinopsis: `Ridwan adalah seorang pemijat tunanetra yang tinggal di kota Jakarta di sebuah rusun padat penduduk bersama Siti Istrinya. 
      Ridwan sering menghibur dirinya dengan mendengarkan Radio. Namun pada saat itu, radio banyak menyiarkan kasus penangkapan kasus korupsi yang terjadi dari tahun ke tahun. Tanggapan Ridwan tampak acuh dan bosan atas pemberitaan tersebut dan mencari siaran lain yang dapat menghibur dirinya.  Suatu malam Ridwan mendapatkan panggilan untuk memijat. Setelah kepelungan Ridwan, terjadi perdebatan antara Ridwan dengan Siti Istrinya akan upah yang di dapat Ridwan. Ridwan mendapatkan amplop yang berisikan uang yang cukup banyak. Siti merasa senang karena dapat meneruskan uang tersebut untuk membayar sewa tempat tinggalnya, namun terbalik dengan Ridwan yang ingin mengembalikan uang tersebut untuk memastikannya. Ridwan berusaha menghubungi Agus, seseorang yang mengantarnya pulang namun tidak dapat dihubungi. Ridwan berusaha mengingat jalan-jalan yang telah dilewati sebelumnya hingga akhirnya berhasil sampai dan bertemu dengan Agus di tempat kerjanya. Ridwan diantarkan oleh Agus untuk menemui atasanya melewati sebuah ruang yang penuh dengan meja dan bangku yang tersusun rapih, berjalan jauh melewati lorong hingga akhirnya masuk kedalam sebuah ruangan yang terpasang sebuah data penghuni serta nomer kamar sebuah lapas di pintu masuknya.`,
      screenshot: "",
    },
  ];

  const posterFilmDK = [
    {
      judul: "Like Fish Living On Land",
      direktor: "Salas Anggobil Rokhira",
      poster: "DKA.jpg",
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
      akhirnya keluar dari rumah, membuat mereka seperti ikan yang tidak tidur seperti ikan.`,
      screenshot: "",
    },
    {
      judul: "Kelangan Senter",
      direktor: "Adityo Hernawan",
      poster: "DKB.png",
      sinopsis: `Dusun Kremi Kidul merupakan daerah perkampungan yang aman, nyaman, serta damai. Meski demikian, aktivitas ronda malam tetap rutin 
      dilaksanakan. Malam ini giliran Agus, Yos, dan Satria yang bertugas menjaga pos ronda. Seperti biasa, 
      di jam-jam tertentu setiap yang bertugas akan keliling Dusun untuk patroli, memastikan setiap sudut Dusun Kremi Kidul aman. 
      Masalah pun muncul ketika senter yang biasanya dipakai untuk patroli hilang. Mereka mencari ke setiap sudut pos ronda 
      namun tetap saja tidak ketemu. Dugaan demi dugaan pun muncul atas hilangnya senter tersebut. Mereka pun tak kunjung berangkat patroli, 
      mereka terus memperdebatkan siapa yang sampai hati mengambil senter Pos Ronda Dusun Kremi Kidul.`,
      screenshot: "",
    },
    {
      judul: "Nebeng",
      direktor: "M. Faisal Hibatulah",
      poster: "DKC.jpeg",
      sinopsis: `Demi mendapatkan uang tambahan, Karyo (45) seorang sopir truk terpaksa mengantar jenazah Tazbo (23) untuk pulang ke rumah dukanya. 
      Sepanjang perjalanan untuk membunuh rasa bosan, Karyo memberanikan diri membuka percakapan tentang kematian hingga masalah hidupnya yang pelik.`,
      screenshot: "",
    },
    {
      judul: "Mata Tertutup",
      direktor: "Syahreza Fahlevi",
      poster: "DKD.jpg",
      sinopsis: `Ridwan adalah seorang pemijat tunanetra yang tinggal di kota Jakarta di sebuah rusun padat penduduk bersama Siti Istrinya. 
      Ridwan sering menghibur dirinya dengan mendengarkan Radio. Namun pada saat itu, radio banyak menyiarkan kasus penangkapan kasus korupsi yang terjadi dari tahun ke tahun. Tanggapan Ridwan tampak acuh dan bosan atas pemberitaan tersebut dan mencari siaran lain yang dapat menghibur dirinya.  Suatu malam Ridwan mendapatkan panggilan untuk memijat. Setelah kepelungan Ridwan, terjadi perdebatan antara Ridwan dengan Siti Istrinya akan upah yang di dapat Ridwan. Ridwan mendapatkan amplop yang berisikan uang yang cukup banyak. Siti merasa senang karena dapat meneruskan uang tersebut untuk membayar sewa tempat tinggalnya, namun terbalik dengan Ridwan yang ingin mengembalikan uang tersebut untuk memastikannya. Ridwan berusaha menghubungi Agus, seseorang yang mengantarnya pulang namun tidak dapat dihubungi. Ridwan berusaha mengingat jalan-jalan yang telah dilewati sebelumnya hingga akhirnya berhasil sampai dan bertemu dengan Agus di tempat kerjanya. Ridwan diantarkan oleh Agus untuk menemui atasanya melewati sebuah ruang yang penuh dengan meja dan bangku yang tersusun rapih, berjalan jauh melewati lorong hingga akhirnya masuk kedalam sebuah ruangan yang terpasang sebuah data penghuni serta nomer kamar sebuah lapas di pintu masuknya.`,
      screenshot: "",
    },
  ];

  const posterFilmNK = [
    {
      judul: "FACADE",
      direktor: "Ivana Wihartono",
      poster: "NKA.jpg",
      sinopsis: `Fara merupakan seorang wanita indekos yang kurang puas dengan kondisi ekonomi dan lingkungannya yang ia tinggali saat itu. 
      Ia memiliki hasrat untuk panjat sosial agar terlihat hedonis dan glamor. Cara untuk meraih gaya hidup yang ia inginkan adalah 
      menipu berbagai pria yang tertarik pada parasnya agar mereka rela memberinya tunjangan finansial. Pada suatu hari, Fara pergi kencan 
      di suatu restoran mewah bersama 
      seorang pria paruh baya bernama Agung. Agung memberikan Fara cincin berlian yang sedang ia incar. 
      Usai makan, Fara izin pergi ke kamar kecil dan kabur melewati pintu belakang restoran.
      `,
      screenshot: "",
    },
    {
      judul: "Kelangan Senter",
      direktor: "Adityo Hernawan",
      poster: "NKB.png",
      sinopsis: `Dusun Kremi Kidul merupakan daerah perkampungan yang aman, nyaman, serta damai. Meski demikian, aktivitas ronda malam tetap rutin 
      dilaksanakan. Malam ini giliran Agus, Yos, dan Satria yang bertugas menjaga pos ronda. Seperti biasa, 
      di jam-jam tertentu setiap yang bertugas akan keliling Dusun untuk patroli, memastikan setiap sudut Dusun Kremi Kidul aman. 
      Masalah pun muncul ketika senter yang biasanya dipakai untuk patroli hilang. Mereka mencari ke setiap sudut pos ronda 
      namun tetap saja tidak ketemu. Dugaan demi dugaan pun muncul atas hilangnya senter tersebut. Mereka pun tak kunjung berangkat patroli, 
      mereka terus memperdebatkan siapa yang sampai hati mengambil senter Pos Ronda Dusun Kremi Kidul.`,
      screenshot: "",
    },
    {
      judul: "Nebeng",
      direktor: "M. Faisal Hibatulah",
      poster: "NKC.jpeg",
      sinopsis: `Demi mendapatkan uang tambahan, Karyo (45) seorang sopir truk terpaksa mengantar jenazah Tazbo (23) untuk pulang ke rumah dukanya. 
      Sepanjang perjalanan untuk membunuh rasa bosan, Karyo memberanikan diri membuka percakapan tentang kematian hingga masalah hidupnya yang pelik.`,
      screenshot: "",
    },
    {
      judul: "Mata Tertutup",
      direktor: "Syahreza Fahlevi",
      poster: "NKD.jpg",
      sinopsis: `Ridwan adalah seorang pemijat tunanetra yang tinggal di kota Jakarta di sebuah rusun padat penduduk bersama Siti Istrinya. 
      Ridwan sering menghibur dirinya dengan mendengarkan Radio. Namun pada saat itu, radio banyak menyiarkan kasus penangkapan kasus korupsi yang terjadi dari tahun ke tahun. Tanggapan Ridwan tampak acuh dan bosan atas pemberitaan tersebut dan mencari siaran lain yang dapat menghibur dirinya.  Suatu malam Ridwan mendapatkan panggilan untuk memijat. Setelah kepelungan Ridwan, terjadi perdebatan antara Ridwan dengan Siti Istrinya akan upah yang di dapat Ridwan. Ridwan mendapatkan amplop yang berisikan uang yang cukup banyak. Siti merasa senang karena dapat meneruskan uang tersebut untuk membayar sewa tempat tinggalnya, namun terbalik dengan Ridwan yang ingin mengembalikan uang tersebut untuk memastikannya. Ridwan berusaha menghubungi Agus, seseorang yang mengantarnya pulang namun tidak dapat dihubungi. Ridwan berusaha mengingat jalan-jalan yang telah dilewati sebelumnya hingga akhirnya berhasil sampai dan bertemu dengan Agus di tempat kerjanya. Ridwan diantarkan oleh Agus untuk menemui atasanya melewati sebuah ruang yang penuh dengan meja dan bangku yang tersusun rapih, berjalan jauh melewati lorong hingga akhirnya masuk kedalam sebuah ruangan yang terpasang sebuah data penghuni serta nomer kamar sebuah lapas di pintu masuknya.`,
      screenshot: "",
    },
    {
      judul: "Mata Tertutup",
      direktor: "Syahreza Fahlevi",
      poster: "NKE.jpg",
      sinopsis: `Ridwan adalah seorang pemijat tunanetra yang tinggal di kota Jakarta di sebuah rusun padat penduduk bersama Siti Istrinya. 
      Ridwan sering menghibur dirinya dengan mendengarkan Radio. Namun pada saat itu, radio banyak menyiarkan kasus penangkapan kasus korupsi yang terjadi dari tahun ke tahun. Tanggapan Ridwan tampak acuh dan bosan atas pemberitaan tersebut dan mencari siaran lain yang dapat menghibur dirinya.  Suatu malam Ridwan mendapatkan panggilan untuk memijat. Setelah kepelungan Ridwan, terjadi perdebatan antara Ridwan dengan Siti Istrinya akan upah yang di dapat Ridwan. Ridwan mendapatkan amplop yang berisikan uang yang cukup banyak. Siti merasa senang karena dapat meneruskan uang tersebut untuk membayar sewa tempat tinggalnya, namun terbalik dengan Ridwan yang ingin mengembalikan uang tersebut untuk memastikannya. Ridwan berusaha menghubungi Agus, seseorang yang mengantarnya pulang namun tidak dapat dihubungi. Ridwan berusaha mengingat jalan-jalan yang telah dilewati sebelumnya hingga akhirnya berhasil sampai dan bertemu dengan Agus di tempat kerjanya. Ridwan diantarkan oleh Agus untuk menemui atasanya melewati sebuah ruang yang penuh dengan meja dan bangku yang tersusun rapih, berjalan jauh melewati lorong hingga akhirnya masuk kedalam sebuah ruangan yang terpasang sebuah data penghuni serta nomer kamar sebuah lapas di pintu masuknya.`,
      screenshot: "",
    },
  ];
  const [postingan, setPostingan] = useState([]);
  const [show, setShow] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (id) => setShow(id);

  return (
    <div className="featured">
      <Helmet>
        <title>Featured Films</title>
      </Helmet>

      <div className="content">
        <div className="container">
          <h1>PROGRAMS</h1>

          <div className="program">
            <div className="judul">
              <h2>FIKSI KOMPETITIF 1</h2>
            </div>
            <p className="deskripsi">
              Uang: alat tukar atau standar pengukur nilai (kesatuan hitungan)
              yang sah, dikeluarkan oleh pemerintah suatu negara berupa kertas,
              emas, perak, atau logam lain yang dicetak dengan bentuk dan gambar
              tertentu; 2 n harta; kekayaan: hidupnya seolah-olah hanya mencari
              --; <br />
              Uang merupakan kebutuhan pokok yang paling utama bagi manusia,
              namun uang juga merupakan faktor paling utama dalam membuka tabir
              gelap manusia; keserakahan, kerakusan, ketamakan, dan segala sifat
              buruk yang ada dunia. Segala cara dan jalan menjadi halal jika
              uang tujuan utamanya. <br />
              “Uang” merupakan salah satu tajuk program pada BYFEST tahun ini.
              Dalam program ini kami akan menampilkan empat film yang berkaitan
              erat dengan uang dan segala keburukannya dalam pengemasan yang
              berbeda-beda. Ada komedi, eksperimental, dan juga drama.
              Diharapkan dengan kehadiran program ini dapat membuka ruang
              diskusi tentang bagaimana realitas kehidupan yang dengan mudah
              disetir oleh kebutuhan pokok manusia yang satu ini
            </p>
            <Row xs={1} md={1} className="g-4">
              {posterFilmFK1.map((posterFilm) => (
                <Col xs={12} md={6} lg={4} className="column">
                  <div className="poster-wrapper">
                    <img
                      src={`/img/programs/${posterFilm.poster}`}
                      width="250"
                      className="d-inline-block align-top"
                      alt="Brawijaya Film Festival"
                    />
                    <h3>{posterFilm.judul}</h3>
                    <p>{posterFilm.direktor}</p>
                    <button
                      className="button-poster"
                      onClick={(e) => handleShow(posterFilm.judul)}
                    >
                      view
                    </button>
                  </div>
                  <Modal
                    className="modal-poster"
                    show={show == `${posterFilm.judul}`}
                    onHide={handleClose}
                    size="lg"
                  >
                    <div className="modal-wrapper">
                      <Modal.Header>
                        <Row className="col-wrapper">
                          <Col
                            xs={12}
                            md={12}
                            lg={12}
                            className="column tombol-tutup"
                          >
                            <a onClick={handleClose}>
                              <CloseButton />
                            </a>
                          </Col>
                          <Col xs={6} md={5} lg={3} className="column kiri">
                            <img
                              src={`/img/programs/${posterFilm.poster}`}
                              className="poster-preview d-inline-block align-top"
                              alt="screenshot"
                              // height="100"
                            />
                          </Col>
                          <Col xs={6} md={7} lg={9} className="column kanan">
                            <div className="kanan-inner">
                              <h3>{posterFilm.judul}</h3>
                              <p className="director">{posterFilm.direktor}</p>
                              <p>{posterFilm.sinopsis}</p>
                            </div>
                          </Col>
                        </Row>
                      </Modal.Header>
                      <Modal.Body>
                        <h3>Screenshot</h3>
                        <Card className="screenshot-wrapper">
                          <img
                            src={Screenshot}
                            className="screenshot d-inline-block align-top"
                            alt="screenshot"
                          />
                        </Card>
                      </Modal.Body>
                    </div>
                  </Modal>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>

      {/* <GlobalFooter /> */}
    </div>
  );
};

export default Program;
