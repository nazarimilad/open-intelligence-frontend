import React from 'react';
import "../node_modules/antd/dist/antd.css";
import './App.scss';
import { FileUpload } from "./components/file-upload/"
import { ResultView } from "./components/result-view";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serverResult: null
    };
  }

  uploadCallback = (uploadData) => {
    this.setState({ serverResult: uploadData });
    console.log(this.state.serverResult)
    this.render()
  }

  render() {
    let result
    if (this.state.serverResult) {
      result = <ResultView serverResult={this.state.serverResult} className="result"></ResultView>
    }
    return (
      <div className="App">
        <FileUpload callbackFromParent={this.uploadCallback}></FileUpload>
        {result}
      </div>
    );
  }

}

export default App;
