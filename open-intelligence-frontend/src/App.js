import React from 'react';
import "../node_modules/antd/dist/antd.css";
import './App.scss';
import SimpleReactFileUpload from "./components/react-file-upload";
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
        <SimpleReactFileUpload callbackFromParent={this.uploadCallback}></SimpleReactFileUpload>
        {result}
      </div>
    );
  }

}

export default App;
