const Sonnet = (props) => {

    const content = props.content;
    const header = props.header;

    return(
        <div className="sonnet">
            <h2>{ header }</h2>
            <p style={{whiteSpace: 'pre-line'}}>{ content }</p>
        </div>
    );
}

export default Sonnet;