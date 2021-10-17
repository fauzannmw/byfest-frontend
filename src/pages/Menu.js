import { Link } from 'react-router-dom';
import { OverlayTrigger, Table, Tooltip, Nav } from 'react-bootstrap';
import './Menu.scss'
import { useState } from 'react';

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
    <div className="menu">
      <div className="content">
        <div className="container">

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
                  <th>Jam</th>
                </tr>
              </thead>
              { day=='1' && <tbody>
                <tr>
                  <td>Opening</td>
                  <td>09.00 WIB</td>
                </tr>
                <tr>
                  <td>Webinar</td>
                  <td>13.00 WIB</td>
                </tr>
                <tr>
                  <td>Program Film Pendek Dokumenter Kompetitif</td>
                  <td>14.15 WIB</td>
                </tr>
                <tr>
                  <td>Program Film Panjang 1</td>
                  <td>19.15 WIB</td>
                </tr>
              </tbody> }
              { day=='2' && <tbody>
                <tr>
                  <td>Program Film Pendek Kompetitif 1</td>
                  <td>10.00 WIB</td>
                </tr>
                <tr>
                  <td>Program Film Pendek Kompetitif 2</td>
                  <td>13.00 WIB</td>
                </tr>
                <tr>
                  <td>Forkom</td>
                  <td>19.00 WIB</td>
                </tr>
              </tbody> }
              { day=='3' && <tbody>
                <tr>
                  <td>Program Film Pendek Non Kompetitif</td>
                  <td>10.00 WIB</td>
                </tr>
                <tr>
                  <td>Program Film Panjang 2</td>
                  <td>13.00 WIB</td>
                </tr>
                <tr>
                  <td>Awarding</td>
                  <td>19.05 WIB</td>
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