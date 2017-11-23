import React from 'react';

export const Stop = (props) => {
    const { name, label, type } = props

    if (type === 'event') {
        return (
            <div className="stop_highlight">
                <span className="stop_header_letter">{label}</span>
                <span>{name}</span>
            </div>   
        )
    }

    return (
       <div className="stop_name">
            <img className="stop_point" src="images/stop_point.png"/>{name}
        </div>
    )

}