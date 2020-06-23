
import React from 'react'
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import "./file-upload.scss"

const { Dragger } = Upload;

class FileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "file",
        multiple: false,
        accept: ".png,.jpg,.jpeg",
        showUploadList: false,
        action: "http://localhost:5000/detection/table",
        onChange(info) {
            const { status } = info.file;
            if (status !== "uploading") {
                props.callbackFromParent(info.file.response);
            }
            if (status === "done") {
                message.success(`${info.file.name} file uploaded successfully.`);
            } 
            else if (status === "error") {
                message.error(`${info.file.name} file upload failed.`);
            }
        }
    }
  }

    render() {
        return (
            <div className="upload">
                <Dragger {...this.state}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">
                        Support for a single upload.
                    </p>
                </Dragger>
            </div>
        )
    }
}

export default FileUpload;
