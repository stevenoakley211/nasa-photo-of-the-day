import React, {useEffect,useState} from "react";
import "./App.css";
import axios from "axios";
import ImageCard from "./Components/ImageCard"
function App() {

  const [images,setImage] = useState('')
  const [title,setTitle] = useState('')
  const didUpdate = () => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => {
        setImage(response.data.hdurl)
        setTitle(response.data.title)
      })
      .catch(error => console.log(error))
  }
  useEffect(didUpdate,[])
  console.log(images)
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    <ImageCard title={title} imgUrl={images}/>
    </div>
  );
}

export default App;
