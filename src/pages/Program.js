import { Row, Col, Card, Modal } from "react-bootstrap";
import "./Program.scss";
import { useState } from "react";
import { Helmet } from "react-helmet";
import CloseButton from "@material-ui/icons/Close";
import dataFilm from "../api/dataFilm";

const Program = () => {
  const [show, setShow] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (id) => setShow(id);

  const programs = [
    {
      jenis: "FK1",
      judul: "FIKSI KOMPETITIF 1",
      deskripsi: `
      Uang: alat tukar atau standar pengukur nilai (kesatuan hitungan)
      yang sah, dikeluarkan oleh pemerintah suatu negara berupa kertas,
      emas, perak, atau logam lain yang dicetak dengan bentuk dan gambar
      tertentu; 2 n harta; kekayaan: hidupnya seolah-olah hanya mencari
      --;\n
      Uang merupakan kebutuhan pokok yang paling utama bagi manusia,
      namun uang juga merupakan faktor paling utama dalam membuka tabir
      gelap manusia; keserakahan, kerakusan, ketamakan, dan segala sifat
      buruk yang ada dunia. Segala cara dan jalan menjadi halal jika
      uang tujuan utamanya.\n
      “Uang” merupakan salah satu tajuk program pada BYFEST tahun ini.
      Dalam program ini kami akan menampilkan empat film yang berkaitan
      erat dengan uang dan segala keburukannya dalam pengemasan yang
      berbeda-beda. Ada komedi, eksperimental, dan juga drama.
      Diharapkan dengan kehadiran program ini dapat membuka ruang
      diskusi tentang bagaimana realitas kehidupan yang dengan mudah
      disetir oleh kebutuhan pokok manusia yang satu ini
      `
    },
    {
      jenis: "FK2",
      judul: "FIKSI KOMPETITIF 2",
      deskripsi: `
      Anak merupakan subjek yang kerap kali dipandang sebelah mata dalam
      film. Kebanyakan para sineas cenderung memilih remaja sampai orang
      dewasa yang menjadi lakon utama di film mereka. Padahal sebenarnya
      sifat kenaifan dan dunia imajinatif seorang anak adalah hal yang
      cukup menarik ketika diangkat pada film.\n
      Anak memiliki ciri khas emosi yang cenderung sentimental. Hal ini
      berpengaruh pada penggambaran film yang mengangkat relasi mereka
      dengan orang terdekat seperti ibu ataupun seorang adik sehingga
      ketika menontonnya kita ikut terbawa oleh perasaan sang anak.
      Menonton film anak adalah bagaikan bernostalgia, kembali ke masa
      lalu dan menjelajahi mimpi-mimpi. Maka dari itu melalui program
      ini kami mengajak para penonton untuk menapak tilas kembali dunia
      anak yang telah lama hilang dan ikut serta masuk dalam pikiran
      magis mereka.
      `
    },
    {
      jenis: "DK",
      judul: "DOKUMENTER KOMPETITIF",
      deskripsi: `
      Rasa kesepian dan putus asa tidak asing kita alami dalam kehidupan
      sehari-hari. Dalam menjalani kehidupan, kita sebagai manusia pasti
      pernah atau akan menghadapi rintangan sulit yang membawa kita ke
      titik terlemah. Dari pengalaman itu, pandangan terhadap hidup
      berubah menjadi keabuan - monoton, hambar, dan membosankan.
      Ditambah lagi, berita-berita buruk yang dibawakan oleh media massa
      juga mampu memicu empati untuk merasa kasihan atau ikut pasrah.
      Apakah hidup ini masih layak dinikmati?\n
      Pada tahun ini, Brawijaya Film Festival membawa program film
      dokumenter kompetitif dengan nama Indah di Balik Keabuan. Di dalam
      program ini, penonton dapat menikmati 4 film dokumenter yang
      secara indah menggambarkan kehidupan dari berbagai pandangan
      individu berbeda. Program ini mengangkat tema yang bernuansa
      kelabu seperti kematian dan keasingan. Tetapi, di balik warna
      abu-abu, ada percikan harapan dari individu yang muncul di
      film-film ini. Mereka masih berusaha mencari keindahan di balik
      kemalangan mereka. Selain menampilkan film dokumenter yang
      berkualitas, program ini ingin memberi pandangan baru terhadap
      kehidupan kita yang penuh dengan abu-abu.
      `
    },
    {
      jenis: "NK",
      judul: "NON KOMPETITIF",
      deskripsi: `
      Film dapat dilihat sebagai media hiburan tersendiri bagi para
      pembuat film dan juga para penikmat film itu sendiri. Film dapat
      diibaratkan sebuah barang istimewa yang dicari-cari oleh pembeli
      dengan selera yang berbeda-beda. Seorang pembuat film diibaratkan
      seorang penjual dan para penonton adalah konsumennya. Tentunya
      seorang konsumen mencari-cari barang yang mereka minati untuk
      dinikmati. Film sendiri mungkin seperti itu, penonton akan
      mempunyai keterikatan istimewa dalam suatu genre.\n
      Terdapat idiom dari bahasa Perancis yang menurut kami menarik,
      yakni coup de foudre dalam padanan Bahasa Inggris dapat diartikan
      sebagai love at the first sight yang berarti cinta pada pandang
      pertama. Idiom ini cukup menggambarkan rasa kami saat pertama kali
      menonton film-film di program ini, kami merasakan rasa “jatuh
      cinta” ke dalam setiap film. Pada saat menonton film-film di dalam
      program ini, diharapkan penonton mampu merasakan jatuh cinta pada
      pandangan pertama. Mungkin ini adalah film-film yang dicari-cari
      oleh penonton selayaknya perumpamaan film adalah barang istimewa
      yang dicari-cari oleh konsumennya. Jika menilik dari film-film
      program ini, terdapat film-film yang berbasis pada genre film
      tertentu. Ada Facade dan Cipak-Cipuk dengan genre animasi yang
      tentunya memiliki keunikan tersendiri di kedua film ini, ada film
      kelas B yang dibawa oleh film Jenglot Redemption, slow burn cinema
      layaknya film-film Kubrick dan Tarkovsky di film Dia, dan juga
      tribute space western yang diangkat oleh film Anxietus Domicupus.
      Diharapkan dalam program ini penonton yang memiliki ketertarikan
      dalam film genre dapat melebur menjadi satu dan saling menghargai
      keunikan masing-masing. Semoga program ini menghibur kita semua.
      `
    }
  ]

  return (
    <div className="featured">
      <Helmet>
        <title>Featured Films</title>
      </Helmet>

      <div className="content">
        <div className="container">
          <h1>PROGRAMS</h1>
          {programs.map((program) => {
            return (
              <div className="program">
                <div className="judul">
                  <h2>{program.judul}</h2>
                </div>
                <p className="deskripsi">{program.deskripsi}</p>
                <Row xs={1} md={1} className="g-4">
                  {dataFilm.filter(filterfilm => filterfilm.jenis === program.jenis).map((posterFilm) => (
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
                                src={`/img/still-photo/${posterFilm.screenshot}`}
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
            );
          })}
        </div>
      </div>

      {/* <GlobalFooter /> */}
    </div>
  );
};

export default Program;
