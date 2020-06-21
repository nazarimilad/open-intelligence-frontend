import React from 'react'
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const props = {
    name: "file",
    multiple: false,
    accept: ".png,.jpg,.jpeg",
    showUploadList: false,
    action: "http://192.168.1.7:5000/detection/table",
    onChange(info) {
        const { status } = info.file;
        if (status !== "uploading") {
            console.log(info.file, info.fileList);
        }
        if (status === "done") {
            message.success(`${info.file.name} file uploaded successfully.`);
        } 
        else if (status === "error") {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

class SimpleReactFileUpload extends React.Component {

    render() {
        return (
            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                    Support for a single upload.
                </p>
            </Dragger>
        )
    }
}

export default SimpleReactFileUpload;
