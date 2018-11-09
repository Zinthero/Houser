import React, { Component } from 'react'


const House = (props) =>{

    return(
        <div className="house">
        <h4>Listing Name: {props.name}</h4>
        <h4>Listing Address: {props.address}</h4>
        <h4>Listing City:{props.city}</h4>
        <h4>Listing State:{props.state}</h4>
        <h4>Listing Zipcode:{props.zipcode}</h4>
        <img className='img-tag' src={props.image_url} alt="new product"></img>
        <h4>Listing mortgage: {props.mortgage}</h4>
        <h4>Listing Rent:{props.rent}></h4>
        <button>Delete</button>
        </div>
    )
}

export default House;