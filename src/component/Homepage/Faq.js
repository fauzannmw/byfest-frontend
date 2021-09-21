import React from "react";
import { Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
// import Accordion from "./Accordion";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./Faq.scss";

const Faq = () => {
  const faqs = [
    {
      summary: "Apa itu Brawijaya Film Festival?",
      details:
        "Brawijaya Film Festival atau BYFEST merupakan festival film tahunan yang digagas oleh Unit Kegiatan Mahasiswa (UKM) Nol Derajat Film Universitas Brawijaya. Acara kegiatan eksibisi ini dilakukan untuk mengapresiasi film yang diproduksi oleh sineas tanah air. Rangkaian acara Brawijaya Film Festival mencakup pemutaran film panjang lawas, program kompetisi film pendek, forum komunitas, dan talkshow. Selain itu, BYFEST 2021 juga mengadakan Open Submission Film Pendek. Program kompetisi film pendek Brawijaya Film Festival diadakan untuk memberi wadah bagi para pembuat film lokal. Adanya program kompetisi ini diharapkan dapat memberi semangat dan apresiasi bagi para kreator film agar terus berkarya dan berkontribusi untuk perfilman Indonesia.",
    },
    {
      summary: "Apa Tema BYFEST tahun ini?",
      details:
        "Tahun ini BYFEST mengusung tema “C’est La Vie”, yang merupakan ungkapan dari Bahasa Perancis yang memiliki arti ‘itulah kehidupan’ atau ‘inilah kehidupan’.  Ungkapan tersebut mampu mengekspresikan perasaan, negatif maupun positif, manusia dalam menjalani kehidupan. Dengan memberi karakteristik “c’est la vie” kepada film-film yang akan ditayangkan, kami mengajak penonton untuk merenungkan kehidupan dan menimbulkan perasaan yang kuat dari penonton. Selain itu, film tersebut juga dapat memberi wawasan baru mengenai isu kehidupan yang jarang bahkan tidak dialami oleh penonton. Contoh film yang memiliki karakteristik “c’est la vie” adalah film yang menceritakan cinta, keluarga, perjuangan, pertikaian, ideologi, kebangkitan, perubahan, alam, masyarakat, teknologi, dan aspek-aspek kehidupan lainnya  yang dapat terjadi di kisah penonton.",
    },
    {
      summary:
        "Apakah film yang disubmit akan ditayangkan di YouTube atau platform lain?",
      details:
        "Nantinya film tersebut akan dimasukkan ke dalam platform OTT yang telah bekerjasama dengan BYFEST secara live streaming dan hanya akan tersedia selama acara BYFEST berlangsung.",
    },
    {
      summary: "Apakah acara berbayar atau tidak?",
      details:
        "Acara yang kami selenggarakan adalah GRATIS tetapi terdapat donasi minimal Rp10.000,00 untuk perkembangan film Indonesia",
    },
    {
      summary: "Achievement apa yang akan didapatkan pemenang?",
      details:
        "Achievement yang akan didapat oleh pemenang adalah uang tunai dengan total Rp2.500.000,00, plakat, dan sertifikat.",
    },
  ];
  return (
    <div className="faq">
      <Container>
        <Row className="justify-content-center mt-5">
          <h1>F A Q</h1>
        </Row>
        <Fade>
          <Row className="justify-content-center">
            {faqs.map((faq) => {
              return (
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
                    <h5>{faq.summary}</h5>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>{faq.details}</p>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Row>
        </Fade>
      </Container>
    </div>
  );
};

export default Faq;
