import React from 'react'
import "./result-view.scss";
import { ResultImage } from "./result-image";
import { ResultTables } from './result-tables';

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
                    <h1>2. Processing</h1>
                    <ResultImage title="Original" url={this.props.serverResult["original"]}></ResultImage>
                    <ResultImage title="Detected tables" url={this.props.serverResult["detected tables"]}></ResultImage>
                </div>
                <div>
                    <ResultTables tables={this.props.serverResult["tables"]}></ResultTables>
                </div>
            </div>
        )
    }
}

export default ResultView;