import React from "react";
import "../stylecomponent/Infocard.css" 

function Infocard({  itemname , categories , profile_image_url , images , operation_time , address , rating}){
    return(
        <article className="infocard_container">
            <div className="info_container">
                <div className="info_logoimage">
                    <img id="logo"src={profile_image_url} alt={itemname}/>
                </div>
                <div className="info_detail">
                    <h6>{itemname}</h6>
                    <div className="timeAndReviw">
                        <div className="time">
                            <p>operation_time</p>
                        </div>
                        <div className="review">
                            <p>{rating}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="img_cotainer">
                <div className="infoimg_container">   
                    <img src={images[0]} alt={images[0]}/> 
                    <img src={images[1]} alt={images[1]}/>
                    <img src={images[2]} alt={images[2]}/>
                </div>
            </div>
        </article>
    );
};

export default Infocard;
