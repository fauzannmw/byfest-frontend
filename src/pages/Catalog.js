import { Tab, Tabs } from "react-bootstrap";
import Sonnet from "../component/Sonnet";

const Catalog = () => {
    const catalogs = [
        {
            key: "Roadshow",
            header: "Byfest Roadshow",
            content: "Be sure to test any solution across different Reader preferences. A site visitor may have their browser set to open the PDF in Reader/Acrobat as opposed to the browser, e.g., by disabling the Acrobat plugin in Firefox."
        },
        {
            key: "Webinar",
            header: "Byfest Roadshow",
            content: "Be sure to test any solution across different Reader preferences. A site visitor may have their browser set to open the PDF in Reader/Acrobat as opposed to the browser, e.g., by disabling the Acrobat plugin in Firefox."
        },
        {
            key: "Awarding",
            header: "Byfest Roadshow",
            content: "Be sure to test any solution across different Reader preferences. A site visitor may have their browser set to open the PDF in Reader/Acrobat as opposed to the browser, e.g., by disabling the Acrobat plugin in Firefox."
        }
    ]
    return(
        <div className="catalog">
            <div className="container">
                <Tabs defaultActiveKey="Roadshow" id="uncontrolled-tab-example">
                    {/* {catalogs.map(catalog => (
                        <TabCatalog key={ catalog.key } header={ catalog.header } content={ catalog.content }/>
                    ))} */}
                    <Tab eventKey={ catalogs[0].key } title={ catalogs[0].key }>
                        <Sonnet content={ catalogs[0].content } />
                    </Tab>
                    <Tab eventKey={ catalogs[1].key } title={ catalogs[1].key }>
                        <Sonnet content={ catalogs[1].content } />
                    </Tab>
                    <Tab eventKey={ catalogs[2].key } title={ catalogs[2].key }>
                        <Sonnet content={ catalogs[2].content } />
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default Catalog;