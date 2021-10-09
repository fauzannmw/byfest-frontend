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
      screenshot: "FK1A.png",
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
      screenshot: "FK1B.jpg",
    },
    {
      judul: "Nebeng",
      direktor: "M. Faisal Hibatulah",
      poster: "FK1C.jpeg",
      sinopsis: `Demi mendapatkan uang tambahan, Karyo (45) seorang sopir truk terpaksa mengantar jenazah Tazbo (23) untuk pulang ke rumah dukanya. 
      Sepanjang perjalanan untuk membunuh rasa bosan, Karyo memberanikan diri membuka percakapan tentang kematian hingga masalah hidupnya yang pelik.`,
      screenshot: "FK1C.png",
    },
    {
      judul: "Mata Tertutup",
      direktor: "Syahreza Fahlevi",
      poster: "FK1D.jpg",
      sinopsis: `Ridwan adalah seorang pemijat tunanetra yang tinggal di kota Jakarta di sebuah rusun padat penduduk bersama Siti Istrinya. 
      Ridwan sering menghibur dirinya dengan mendengarkan Radio. Namun pada saat itu, radio banyak menyiarkan kasus penangkapan kasus korupsi 
      yang terjadi dari tahun ke tahun. Tanggapan Ridwan tampak acuh dan bosan atas pemberitaan tersebut dan mencari siaran lain yang dapat 
      menghibur dirinya.  Suatu malam Ridwan mendapatkan panggilan untuk memijat. Setelah kepelungan Ridwan, terjadi perdebatan antara Ridwan 
      dengan Siti Istrinya akan upah yang di dapat Ridwan. Ridwan mendapatkan amplop yang berisikan uang yang cukup banyak. Siti merasa senang 
      karena dapat meneruskan uang tersebut untuk membayar sewa tempat tinggalnya, namun terbalik dengan Ridwan yang ingin mengembalikan uang 
      tersebut untuk memastikannya. Ridwan berusaha menghubungi Agus, seseorang yang mengantarnya pulang namun tidak dapat dihubungi. Ridwan 
      berusaha mengingat jalan-jalan yang telah dilewati sebelumnya hingga akhirnya berhasil sampai dan bertemu dengan Agus di tempat kerjanya. 
      Ridwan diantarkan oleh Agus untuk menemui atasanya melewati sebuah ruang yang penuh dengan meja dan bangku yang tersusun rapih, berjalan 
      jauh melewati lorong hingga akhirnya masuk kedalam sebuah ruangan yang terpasang sebuah data penghuni serta nomer kamar sebuah lapas di 
      pintu masuknya.`,
      screenshot: "FK1D.jpg",
    },
  ];

  const posterFilmFK2 = [
    {
      judul: "Try Again",
      direktor: "Ainul Fikri",
      poster: "FK2A.jpg",
      sinopsis: `Ezra (12) diberi tanggung jawab oleh ayahnya untuk mengantar Sawa (8) bermain. Namun, Ezra malah mampir ke atas bukit 
      untuk mencari sinyal dan bermain game online di HP ayahnya. Ezra yang terlalu fokus pada HP menyebabkan ia tidak sadar jika Sawa 
      sudah tidak ada di sekitarnya. Ezra mengalami kejadian yang akan terjadi padanya berulang-ulang, saat ia berusaha mencari adiknya 
      yang tiba-tiba menghilang, sampai membawanya pada kemungkinan yang berakhir baik padanya dan orang-orang sekitarnya.`,
      screenshot: "FK2A.png",
    },
    {
      judul: "Masih Kecil",
      direktor: "Faishal Amri",
      poster: "FK2B.jpg",
      sinopsis: `Bunga dan Setyo mengira Bunga hamil setelah mereka tidak sengaja berpelukan.
      Bunga sangat ketakutan akan kehamilannya kondisi tersebut membuat mereka tertekan
      dan mencoba mencari solusi. Namun, semua perjalanan mencari jawaban atas
      kegelisahan Bunga dan Setyo mendapat pertentangan dari orang yang mereka temui.`,
      screenshot: "FK2B.jpg",
    },
    {
      judul: "Harapan Harapan yang Sempit",
      direktor: "M. Rizal Hanun",
      poster: "FK2C.jpg",
      sinopsis: `Jakarta, 2019. Bagas - anak yatim yang jahil - tinggal bersama ibunya,
      Marni. Suatu malam Bagas bertanya tentang tempat kelahirannya, Marni
      harus berbohong dengan mengatakan bahwa tempat kelahiran Bagas
      berasal dari ketiak. Alih-alih mematuhi perintah ibunya untuk tidur, Bagas
      malah mencoba menemukan tempat kelahiran yang dimaksud oleh ibunya.
      Akibat kelakuan Bagas yang berlebihan, Marni pun kesal sehingga
      melakukan sesuatu yang tidak bijaksana untuk anaknya.`,
      screenshot: "FK2C.png",
    },
    {
      judul: "Teman Beda Alam",
      direktor: "Augie Ahmad Ariyanto ",
      poster: "FK2D.jpg",
      sinopsis: `Hampir seharian diguyur oleh hujan, mengakibatkan seorang anak SD tidak bisa beraktivitas keluar rumah. 
      Doni (7) mulai beranjak menuju ke halaman belakang rumah untuk melihat-lihat keadaan yang dimana hujan sudah mulai reda. 
      Mata Doni tertuju kepada sebuah percikan air dari sebuah genangan air lalu Doni mulai menuju ke genangan itu. 
      Doni mendapati sebuah ikan dengan bentuk yang menurtnya aneh. Karena penasaran, tanpa pikir panjang Doni langsung mengambil ikan itu 
      untuk dipelihara namun tindakan Doni malah menimbulkan masalah baru bagi keluarga Doni.`,
      screenshot: "FK2D.jpg",
    },
  ];

  const posterFilmDK = [
    {
      judul: "Fardhu Kifayah",
      direktor: "Pawadi",
      poster: "DKA.jpg",
      sinopsis: ``,
      screenshot: "DKA.jpg",
    },
    {
      judul: "Siena",
      direktor: "Daphne",
      poster: "DKB.jpg",
      sinopsis: `Dokumenter ini mengikuti kehidupan Siena melewati hari-hari masa tuanya. Siena hidup dalam
      keluarga besar, dekat dengan anak dan cucunya. Sekali dalam seminggu, rumahnya akan penuh
      dengan keramaian karena anak dan cucunya yang datang berkunjung. Siana memilih tetap
      tinggal di rumah tuanya, kendati ia harus tinggal seorang diri. Alasannya sederhana, ia nyaman
      ada di rumah itu, rumah yang menyimpan banyak kenangan, setiap sudut bahkan benda
      memiliki ceritanya sendiri.`,
      screenshot: "DKB.jpg",
    },
    {
      judul: "Positive",
      direktor: "Daffa Amrullah",
      poster: "DKC.png",
      sinopsis: `Seorang pria dinyatakan positif Covid-19 dan harus mengalami karantina di Wisma Atlet Pademangan, Jakarta, 
      sampai diperbolehkan pulang ke rumah. Selama 7 hari di sana, ia merekam kegiatan para penghuni yang berstatus sebagai pasien 
      yang sedang berjuang untuk sembuh di tengah buruknya angka kasus covid-19 di Indonesia pada Januari 2021.`,
      screenshot: "DKC.png",
    },
    {
      judul: "End of the Tunnel",
      direktor: "Garry Christian",
      poster: "DKD.jpeg",
      sinopsis: `Dody Iskandar, Abdul Karim, dan Taufik Zulfikri adalah tiga individu tunanetra dengan kadar keterbatasan penglihatan 
      yang berbeda-beda. Ketiganya memiliki kegemaran untuk menonton dan memproduksi film, dan mengekspresikan kegemaran tersebut dengan 
      menonton film, memproduksi film secara mandiri, serta berperan aktif sebagai partisipan dalam Inklusi Film Indonesia (INFI), 
      sebuah komunitas bagi individu-individu disabilitas untuk memproduksi dan menikmati film.`,
      screenshot: "DKD.png",
    },
  ];

  const posterFilmNK = [
    {
      judul: "Facade",
      direktor: "Ivana Wihartono",
      poster: "NKA.png",
      sinopsis: `Fara merupakan seorang wanita indekos yang kurang puas dengan kondisi ekonomi dan lingkungannya yang ia tinggali saat itu. 
      Ia memiliki hasrat untuk panjat sosial agar terlihat hedonis dan glamor. Cara untuk meraih gaya hidup yang ia inginkan adalah 
      menipu berbagai pria yang tertarik pada parasnya agar mereka rela memberinya tunjangan finansial. Pada suatu hari, Fara pergi kencan 
      di suatu restoran mewah bersama 
      seorang pria paruh baya bernama Agung. Agung memberikan Fara cincin berlian yang sedang ia incar. 
      Usai makan, Fara izin pergi ke kamar kecil dan kabur melewati pintu belakang restoran.`,
      screenshot: "NKA.png",
    },
    {
      judul: "Dia",
      direktor: "Dika Zahran",
      poster: "NKB.png",
      sinopsis: `Seorang wanita, terbangun di tengah hutan dengan pisau di genggamannya. Di dalam hutan
      dia melihat wanita lain di kejauhan. Ketika dia memanggil suaranya tidak keluar. Dia mendekat
      dan melihat wanita itu dikejar oleh wanita lain. Semakin mendekat dia melihat wanita tersebut
      dibunuh oleh wanita yang mengejarnya. Dan kini dia lah yang dikejar. Untuk mempertahankan
      dirinya dia membunuh wanita yang mengejar. Namun ternyata wajah wanita tersebut adalah
      wajah dirinya sendiri. Dari balik pohon dia melihat wanita lain. Dia berusaha mendekat namun
      wanita itu lari, dia pun lari mendekat namun malah ditusuk. Dan yang menusuknya berwajah
      sama persis dengan dirinya.`,
      screenshot: "NKB.jpg",
    },
    {
      judul: "Jenglot Redemption",
      direktor: "Paundra Wibatsu",
      poster: "NKC.png",
      sinopsis: `Nana, Yato, Farida, Susan, Bokir dan Sisworo hendak bikin film di hutan angker. Ndilalah mereka
      ketemu Jenglot yang nggak cuma haus darah tapi haus hiburan juga.`,
      screenshot: "NKC.png",
    },
    {
      judul: "Cipak Cipuk",
      direktor: "Bernardin Andara Fembriarto",
      poster: "NKD.jpg",
      sinopsis: `Timia dan Galeo tinggal di sebuah rumah usang di tengah segara. Mereka perlu memperbaiki atap
      rumah sebelum upacara suci ibu mereka. Tapi, Timia malah bermain-main dengan kalung Mutiara
      Mentari milik sang ibu yang mereka butuhkan untuk upacara tersebut. Lalu, karena dimarahi
      kakaknya, Timia pergi ke tengah laut di mana ia kena masalah dengan sepasang bajak laut yang
      mengincar kalung ibunya. Galeo kemudian berusaha menyelamatkan Timia dan mencari tahu
      kenapa adiknya begitu bandel. Pada akhirnya, kedua kakak-adik itu bersatu dan bekerja sama
      sehingga Galeo pun tahu apa yang sesungguhnya mengusik hati Timia.`,
      screenshot: "NKD.png",
    },
    {
      judul: "Anxietus Domicupus",
      direktor: "Gugun Arief",
      poster: "NKE.jpeg",
      sinopsis: `Dopaminus, seorang gadis pengidap kecemasan yang tinggal di sarkofagus terbang mendapat job
      mengantar barang ke Endorfinus, alien yang tinggal di planet mini. Di sana Dopaminus dibayang-
      bayangi oleh Rampokanus, anggota sekte berhaluan garis keras. Dopaminus menghajar mereka dalam
      pertarungan pedang. Sementara itu Dopaminus mencari jalan untuk meredakan kecemasannya.`,
      screenshot: "NKE.jpg",
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
        </div>
      </div>

      <div className="content">
        <div className="container">
          <h1>PROGRAMS</h1>

          <div className="program">
            <div className="judul">
              <h2>FIKSI KOMPETITIF 2</h2>
            </div>
            <p className="deskripsi">
              Anak merupakan subjek yang kerap kali dipandang sebelah mata dalam
              film. Kebanyakan para sineas cenderung memilih remaja sampai orang
              dewasa yang menjadi lakon utama di film mereka. Padahal sebenarnya
              sifat kenaifan dan dunia imajinatif seorang anak adalah hal yang
              cukup menarik ketika diangkat pada film. <br />
              Anak memiliki ciri khas emosi yang cenderung sentimental. Hal ini
              berpengaruh pada penggambaran film yang mengangkat relasi mereka
              dengan orang terdekat seperti ibu ataupun seorang adik sehingga
              ketika menontonnya kita ikut terbawa oleh perasaan sang anak.
              Menonton film anak adalah bagaikan bernostalgia, kembali ke masa
              lalu dan menjelajahi mimpi-mimpi. Maka dari itu melalui program
              ini kami mengajak para penonton untuk menapak tilas kembali dunia
              anak yang telah lama hilang dan ikut serta masuk dalam pikiran
              magis mereka.
            </p>
            <Row xs={1} md={1} className="g-4">
              {posterFilmFK2.map((posterFilm) => (
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
        </div>
      </div>

      <div className="content">
        <div className="container">
          <h1>PROGRAMS</h1>

          <div className="program">
            <div className="judul">
              <h2>DOKUMENTER KOMPETITIF</h2>
            </div>
            <p className="deskripsi">
              Rasa kesepian dan putus asa tidak asing kita alami dalam kehidupan
              sehari-hari. Dalam menjalani kehidupan, kita sebagai manusia pasti
              pernah atau akan menghadapi rintangan sulit yang membawa kita ke
              titik terlemah. Dari pengalaman itu, pandangan terhadap hidup
              berubah menjadi keabuan - monoton, hambar, dan membosankan.
              Ditambah lagi, berita-berita buruk yang dibawakan oleh media massa
              juga mampu memicu empati untuk merasa kasihan atau ikut pasrah.
              Apakah hidup ini masih layak dinikmati? <br />
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
            </p>
            <Row xs={1} md={1} className="g-4">
              {posterFilmDK.map((posterFilm) => (
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
        </div>
      </div>

      <div className="content">
        <div className="container">
          <h1>PROGRAMS</h1>

          <div className="program">
            <div className="judul">
              <h2>NON KOMPETITIF</h2>
            </div>
            <p className="deskripsi">
              Film dapat dilihat sebagai media hiburan tersendiri bagi para
              pembuat film dan juga para penikmat film itu sendiri. Film dapat
              diibaratkan sebuah barang istimewa yang dicari-cari oleh pembeli
              dengan selera yang berbeda-beda. Seorang pembuat film diibaratkan
              seorang penjual dan para penonton adalah konsumennya. Tentunya
              seorang konsumen mencari-cari barang yang mereka minati untuk
              dinikmati. Film sendiri mungkin seperti itu, penonton akan
              mempunyai keterikatan istimewa dalam suatu genre. <br />
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
            </p>
            <Row xs={1} md={1} className="g-4">
              {posterFilmNK.map((posterFilm) => (
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
        </div>
      </div>

      {/* <GlobalFooter /> */}
    </div>
  );
};

export default Program;
