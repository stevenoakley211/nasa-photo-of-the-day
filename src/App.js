import React, {useEffect,useState} from "react";
import "./App.css";
import axios from "axios";
import ImageCard from "./Components/ImageCard"
import styled from "styled-components"
function App() {

  const [images,setImage] = useState('')
  const [title,setTitle] = useState('')
  const [description,setDescription]= useState('')

  const FlexDiv = styled.div `
    display:flex;
    justify-content:center;
    background-color:#002366 ;
  `
  const didUpdate = () => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => {
        setImage(response.data.hdurl)
        setTitle(response.data.title)
        setDescription(response.data.explanation)
      })
      .catch(error => console.log(error))
  }
  useEffect(didUpdate,[])
  console.log(images)
  return (
    <FlexDiv className="App">
    <ImageCard title={title} imgUrl={images} content ={description}/>
    </FlexDiv>
  );
}

export default App;
