import React from "react";
import { Container, Row } from "react-bootstrap";
// import Accordion from "./Accordion";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./Faq.scss";

const Faq = () => {
  return (
    <div className="faq">
      <Container>
        <Row className="justify-content-center mt-5">
          <h1>F A Q</h1>
        </Row>
        <Row className="justify-content-center">
          <Accordion style={{ width: "90vw", wordWrap: "" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{
                backgroundColor: "#DEA450",
                outlineColor: "#354C3C",
                outlineWidth: "10px",
              }}
            >
              <h5>Apa itu Brawijaya Film Festival?</h5>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Brawijaya Film Festival atau BYFEST merupakan festival film
                tahunan yang digagas oleh Unit Kegiatan Mahasiswa (UKM) Nol
                Derajat Film Universitas Brawijaya. Acara kegiatan eksibisi ini
                dilakukan untuk mengapresiasi film yang diproduksi oleh sineas
                tanah air. Rangkaian acara Brawijaya Film Festival mencakup
                pemutaran film panjang lawas, program kompetisi film pendek,
                forum komunitas, dan talkshow. Selain itu, BYFEST 2021 juga
                mengadakan Open Submission Film Pendek. Program kompetisi film
                pendek Brawijaya Film Festival diadakan untuk memberi wadah bagi
                para pembuat film lokal. Adanya program kompetisi ini diharapkan
                dapat memberi semangat dan apresiasi bagi para kreator film agar
                terus berkarya dan berkontribusi untuk perfilman Indonesia.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ width: "90vw", wordWrap: "" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{
                backgroundColor: "#DEA450",
                outlineColor: "#354C3C",
                outlineWidth: "10px",
              }}
            >
              <h5>Apa Tema BYFEST tahun ini?</h5>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Tahun ini BYFEST mengusung tema “C’est La Vie”, yang merupakan
                ungkapan dari Bahasa Perancis yang memiliki arti ‘itulah
                kehidupan’ atau ‘inilah kehidupan’. Ungkapan tersebut mampu
                mengekspresikan perasaan, negatif maupun positif, manusia dalam
                menjalani kehidupan. Dengan memberi karakteristik “c’est la vie”
                kepada film-film yang akan ditayangkan, kami mengajak penonton
                untuk merenungkan kehidupan dan menimbulkan perasaan yang kuat
                dari penonton. Selain itu, film tersebut juga dapat memberi
                wawasan baru mengenai isu kehidupan yang jarang bahkan tidak
                dialami oleh penonton. Contoh film yang memiliki karakteristik
                “c’est la vie” adalah film yang menceritakan cinta, keluarga,
                perjuangan, pertikaian, ideologi, kebangkitan, perubahan, alam,
                masyarakat, teknologi, dan aspek-aspek kehidupan lainnya yang
                dapat terjadi di kisah penonton.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ width: "90vw", wordWrap: "" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{
                backgroundColor: "#DEA450",
                outlineColor: "#354C3C",
                outlineWidth: "10px",
              }}
            >
              <h5>Bagaimana cara jika ingin mensubmit film?</h5>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Film dapat disubmit pada link yang tertera di atas atau dapat
                mengunggahnya pada tautan berikut
                <br /> <b>LINK PENDAFTARAN </b>
                <a target="blank" href="https://bit.ly/OpenSubmissionBYFEST">
                  https://bit.ly/OpenSubmissionBYFEST
                </a>
                <br /> <b>LINK PERSYARATAN </b>
                <a
                  target="blank"
                  href="https://bit.ly/PersyaratanOpenSubmissionBYFEST2021"
                >
                  https://bit.ly/PersyaratanOpenSubmissionBYFEST2021
                </a>
                <br /> Dan jangan lupa untuk baca dengan teliti lagi
                persyaratannya
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ width: "90vw", wordWrap: "" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{
                backgroundColor: "#DEA450",
                outlineColor: "#354C3C",
                outlineWidth: "10px",
              }}
            >
              <h5>
                Apakah film yang disubmit akan ditayangkan di YouTube atau
                platform lain?
              </h5>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Nantinya film tersebut akan dimasukkan ke dalam platform OTT
                yang telah bekerjasama dengan BYFEST dan hanya akan tersedia
                selama acara BYFEST berlangsung.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ width: "90vw", wordWrap: "" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{
                backgroundColor: "#DEA450",
                outlineColor: "#354C3C",
                outlineWidth: "10px",
              }}
            >
              <h5>Apakah acara berbayar atau tidak?</h5>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Nantinya film tersebut akan dimasukkan ke dalam platform OTT
                yang telah bekerjasama dengan BYFEST dan hanya akan tersedia
                selama acara BYFEST berlangsung.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ width: "90vw", wordWrap: "" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{
                backgroundColor: "#DEA450",
                outlineColor: "#354C3C",
                outlineWidth: "10px",
              }}
            >
              <h5>Achievement apa yang akan didapatkan pemenang?</h5>
            </AccordionSummary>
            <AccordionDetails>
              <p>Uang tunai senilai</p>
            </AccordionDetails>
          </Accordion>
        </Row>
      </Container>
    </div>
  );
};

export default Faq;
