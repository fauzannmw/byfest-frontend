import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import './Menu.scss'
import { useState } from 'react';

const Menu = () => {
  const [day, setDay] = useState('1');
  return (
    <div className="menu">
      <div className="content">
        <div className="container">

          <div className="button-day-wrapper">
            <button
              className="button-day"
              type="submit"
              onClick={() => setDay('1')}
            >Day - 1</button>
            <button
              className="button-day"
              type="submit"
              onClick={() => setDay('2')}
            >Day - 2</button>
            <button
              className="button-day"
              type="submit"
              onClick={() => setDay('3')}
            >Day - 3</button>
          </div>

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