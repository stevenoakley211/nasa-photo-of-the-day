import React from "react";
import styled from "styled-components"
const ImageCard = props => {
    const StyledH1 = styled.h1 `
    text-decoration: underline overline #002366;
    
    `
    const Card = styled.div`
    background-color:white;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
    transition: 0.3s;
    border-radius: 5px;
    width:50%;
    padding:20px;
    margin: 20px;
    font-family:'Helvetica';
    `
    const Image = styled.img `
        max-width:100%;
        border-radius: 5px;
    `
    const Paragraph = styled.p `
        font-size:1.25em;
    `
    return(
        <Card>
            <StyledH1>{props.title}</StyledH1>
            <Image src={props.imgUrl}></Image>
            <h2>Description</h2>
            <Paragraph>{props.content}</Paragraph>
        </Card>
    )
}
export default ImageCard