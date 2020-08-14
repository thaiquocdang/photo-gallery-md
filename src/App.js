import React, {useState} from 'react';
import Title  from './components/Title';
import './App.css';
import UploadForm from './components/UploadForm';
import Image from './components/Image';
import { LargeImage } from './components/LargeImage';

function App() {
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <Image setSelectedImg={setSelectedImg}/>
      {selectedImg && <LargeImage selectedImg={ selectedImg } setSelectedImg={ setSelectedImg } />}
    </div>
  );
}

export default App;
