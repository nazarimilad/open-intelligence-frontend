import React from 'react'
import "./result-view.scss";
import { ResultImage } from "./result-image";

class ResultView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            serverResult: props.serverResult
        }
    }

    render() {
        const images = this.props.serverResult.processing.map(image => 
            <ResultImage title={Object.keys(image)[0]} url={image[Object.keys(image)[0]]}></ResultImage>
        )
        return (
            <div className="result">
                {images}
            </div>
        )
    }
}

export default ResultView;