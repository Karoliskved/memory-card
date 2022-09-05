import Card from './Card';
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';
import image4 from '../assets/4.jpg';
import image5 from '../assets/5.jpg';
import image6 from '../assets/6.jpg';
import image7 from '../assets/7.jpg';
import image8 from '../assets/8.jpg';
import image9 from '../assets/9.jpg';
import image10 from '../assets/10.jpg';
import image11 from '../assets/11.jpg';
import image12 from '../assets/12.jpg';
const Main = (props) => {
  const handleClick = props.handleClick;
  const randomImage = props.shuffledArray;
  const imageArray = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
  ];
  return (
    <div className="Main">
      <Card
        index={randomImage[0]}
        image={imageArray[randomImage[0] - 1]}
        handleClick={handleClick}
      />
      <Card
        index={randomImage[1]}
        image={imageArray[randomImage[1] - 1]}
        handleClick={handleClick}
      />
      <Card
        index={randomImage[2]}
        image={imageArray[randomImage[2] - 1]}
        handleClick={handleClick}
      />
      <Card
        index={randomImage[3]}
        image={imageArray[randomImage[3] - 1]}
        handleClick={handleClick}
      />
      <Card
        index={randomImage[4]}
        image={imageArray[randomImage[4] - 1]}
        handleClick={handleClick}
      />
      <Card
        index={randomImage[5]}
        image={imageArray[randomImage[5] - 1]}
        handleClick={handleClick}
      />
      <Card
        index={randomImage[6]}
        image={imageArray[randomImage[6] - 1]}
        handleClick={handleClick}
      />
      <Card
        index={randomImage[7]}
        image={imageArray[randomImage[7] - 1]}
        handleClick={handleClick}
      />
      <Card
        index={randomImage[8]}
        image={imageArray[randomImage[8] - 1]}
        handleClick={handleClick}
      />
      <Card
        index={randomImage[9]}
        image={imageArray[randomImage[9] - 1]}
        handleClick={handleClick}
      />
      <Card
        index={randomImage[10]}
        image={imageArray[randomImage[10] - 1]}
        handleClick={handleClick}
      />
      <Card
        index={randomImage[11]}
        image={imageArray[randomImage[11] - 1]}
        handleClick={handleClick}
      />
    </div>
  );
};
export default Main;
