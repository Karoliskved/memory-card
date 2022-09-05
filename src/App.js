import { useEffect, useState } from 'react';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Main from './components/Main';
import './App.css';

const App = (props) => {
  const [images, setImages] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const [failStatus, setFailStatus] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const handleClick = (e) => {
    // console.log(images);
    if (!images.includes(parseInt(e.target.id))) {
      console.log('fail');
      setFailStatus(true);
      setImages([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
      setCurrentScore(0);
    } else {
      const newArray = images.filter(
        (element) => element !== parseInt(e.target.id)
      );
      setImages(newArray);
      setFailStatus(false);
      setCurrentScore(currentScore + 1);
      /* if (currentScore > bestScore) {
        setBestScore(currentScore);
      }*/
    }
  };
  useEffect(() => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
  }, [bestScore, currentScore]);
  const test = () => {
    console.log(images);
  };

  return (
    <div className="App">
      <Header />
      <Scoreboard
        isFail={failStatus}
        currentScore={currentScore}
        bestScore={bestScore}
      />
      <Main handleClick={handleClick} />
      <button onClick={test}>test</button>
    </div>
  );
};

export default App;
