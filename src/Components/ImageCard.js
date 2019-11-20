import React from "react";

const ImageCard = props => {
    return(
        <div>
            <h2>{props.title}</h2>
            <img className="img"src={props.imgUrl}></img>
        </div>
    )
}
export default ImageCard