import { Tab, Tabs } from "react-bootstrap"

const Sonnet = (props) => {

    const content = props.content;
    return(
        <div className="sonnet">
            <p>{ content }</p>
        </div>
    );
}

export default Sonnet;