import React from 'react';

export default class SidebarItemText extends React.Component {
    render() {
        function createMarkup(content) {
            return {__html: content};
        }

        return (
            <div className="left_content_doe_niet">
                <h4>{this.props.title}</h4>
                <div className="left_content_img">
                    <img src={this.props.imagePath} alt={this.props.imageAlt}/>
                </div>
                <p dangerouslySetInnerHTML={createMarkup(this.props.text)} />
                <a href={this.props.linkUrl} target="_blank" rel="noopener noreferrer">{this.props.linkText}</a>
            </div>

        );
    }
}