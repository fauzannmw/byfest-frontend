import { Link } from 'react-router-dom';
import { OverlayTrigger, Table, Tooltip, Nav } from 'react-bootstrap';
import './Schedule.scss'
import { useState } from 'react';
import { Helmet } from 'react-helmet';

const Menu = () => {
  const buttonDay = [
    {
      day: "1",
      toolTip: "Jumat, 29 Oktober 2021",
    },
    {
      day: "2",
      toolTip: "Sabtu, 30 Oktober 2021",
    },
    {
      day: "3",
      toolTip: "Minggu, 31 Oktober 2021",
    }
  ]
  const [day, setDay] = useState('1');
  return (
    <div className="schedule">
      <Helmet>
          <title>Schedule</title>
      </Helmet>

      <div className="content">
        <div className="container">

        <h1 className="schedule-h1">SCHEDULE</h1>

          <Nav justify variant="pills" defaultActiveKey="1">
            {buttonDay.map((btn) => {
              return (
                <OverlayTrigger
                  key={btn.day}
                  placement="top"
                  overlay={
                    <Tooltip id="button-tooltip">
                      {btn.toolTip}
                    </Tooltip>
                  }
                  delay={{ show: 50, hide: 50 }}
                >
                  <Nav.Item>
                    <Nav.Link eventKey={btn.day} onClick={() => setDay(btn.day)}>Day - {btn.day}</Nav.Link>
                  </Nav.Item>
                </OverlayTrigger>
              );
            })}
          </Nav>

          <div className="table-wrapper">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Time</th>
                </tr>
              </thead>
              { day=='1' && <tbody>
                <tr>
                  <td>Opening</td>
                  <td>10.00 WIB</td>
                </tr>
                <tr>
                  <td>Webinar</td>
                  <td>13.00 WIB</td>
                </tr>
                <tr>
                  <td>Program Dokumenter Kompetitif: Indah di Balik Keabuan</td>
                  <td>14.15 WIB</td>
                </tr>
                <tr>
                  <td>Program Film Panjang 1: Senyum di Pagi Bulan Desember (1974)</td>
                  <td>18.45 WIB</td>
                </tr>
              </tbody> }
              { day=='2' && <tbody>
                <tr>
                  <td>Program Fiksi Kompetitif 1: Uang</td>
                  <td>10.00 WIB</td>
                </tr>
                <tr>
                  <td>Program Fiksi Kompetitif 2: Harapan-Harapan Kecil</td>
                  <td>13.00 WIB</td>
                </tr>
                <tr>
                  <td>Forum Komunitas Se-Jawa Timur</td>
                  <td>19.00 WIB</td>
                </tr>
              </tbody> }
              { day=='3' && <tbody>
                <tr>
                  <td>Program Fiksi Non-Kompetitif: Sebuah Cinta pada Pandang Pertama</td>
                  <td>10.00 WIB</td>
                </tr>
                <tr>
                  <td>Program Film Panjang 2: Violetta (1965)</td>
                  <td>13.00 WIB</td>
                </tr>
                <tr>
                  <td>Awarding</td>
                  <td>18.50 WIB</td>
                </tr>
              </tbody> }
            </Table>
          </div>

          <div className="button-visit-wrapper">
            <Link to={`/streaming/${day}`} >
              <button
                className="button-visit"
                type="submit"
              >Visit Page</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Menu;