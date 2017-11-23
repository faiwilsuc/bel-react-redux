import React from 'react';
export default class SidebarItemText extends React.Component {
    render() {
        function createMarkup(content) {
            return {__html: content};
        }

        return (
            <div className="left_content_download">
                <p dangerouslySetInnerHTML={createMarkup(this.props.text)} />
                <a href={this.props.linkUrl}>{this.props.linkText}</a>
            </div>
        );
    }
}