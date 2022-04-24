import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import { useState } from 'react';

function App() {
  const [inputState, setInputState] = useState({ input: '' });

  const onInputChange = (event) => {
    // setInputState((prevState) => prevState.input.concat(event.target.value));
    console.log(event.target.value);
  };

  const onButtonSubmit = () => {
    console.log('submitted');
  };

  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm
        onInputChange={onInputChange}
        onButtonSubmit={onButtonSubmit}
      />
      {/*<FaceRecognition /> */}
    </div>
  );
}

export default App;
