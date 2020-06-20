import React from 'react';
import "../node_modules/antd/dist/antd.css";
import './App.scss';
import SimpleReactFileUpload from "./components/react-file-upload";


function App() {
  return (
    <div className="App">
      <SimpleReactFileUpload></SimpleReactFileUpload>
    </div>
  );
}

export default App;
