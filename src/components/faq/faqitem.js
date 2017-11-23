import React from 'react';

export default class Faqitem extends React.Component {
    render() {
        function createMarkup(content) {

            return {__html: content};
        }

        return (
            <div className="panel panel-default faq_content_item">
                <div className="panel-heading">
                    <h4 className="panel-title">
                        <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent={this.props.parentId} href={'#collapse' + this.props.id}>
                            {this.props.headerContent}
                        </a>
                    </h4>
                </div>
                <div id={'collapse' + this.props.id} className="panel-collapse collapse">
                    <div className="panel-body faq-content-body" dangerouslySetInnerHTML={createMarkup(this.props.bodyContent)} />
                </div>
            </div>

        );
    }
}