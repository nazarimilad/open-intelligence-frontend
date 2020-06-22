import React from 'react'
import { Card } from 'antd';
import "./result-image.scss";

const { Meta } = Card;

class ResultImage extends React.Component {
    render() {
        return (
            <div className="resultImage">
                <Card
                    hoverable
                    style={{ width: 540 }}
                    cover={<img alt={this.props.title} src={this.props.url} />}
                >
                    <Meta title={this.props.title}></Meta>
                </Card>
            </div>
        )
    }
}

export default ResultImage;