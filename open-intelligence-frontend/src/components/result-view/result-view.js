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
        console.log("props.serverResult: ")
        console.log(this.props.serverResult)
        return (
            <div className="result">
                <div>
                    <ResultImage title="Original" url={this.props.serverResult["original"]}></ResultImage>
                    <ResultImage title="Detected tables" url={this.props.serverResult["detected tables"]}></ResultImage>
                </div>
            </div>
        )
    }
}

export default ResultView;