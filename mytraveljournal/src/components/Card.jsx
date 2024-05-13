import React from 'react';

export default function Card(props) {
    return (
        <div className='card'>
            <div className='card--img_container'>
                <img className='card--img' src={props.imageUrl} alt="Mount fuji" />
            </div>
            <div className='card--content_container'>
                <div className='card--location'>
                    <img className='card--icon' src="./src/images/location.png" alt="location icon" />
                    <h4 className='card--country'>{props.location}</h4>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <div className="card--info">
                    <h2>{props.title}</h2>
                    <p className='card--date'>{props.startDate} - {props.endDate}</p>
                    <p className='card--description'>{props.description}</p>
                </div>
            </div>
        </div>
    )
}
