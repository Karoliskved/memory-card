import Card from './Card';

const Main = (props) => {
  const handleClick = props.handleClick;
  const randomImage = props.shuffledArray;
  return (
    <div className="Main">
      <Card image={randomImage[0]} handleClick={handleClick} />
      <Card image={randomImage[1]} handleClick={handleClick} />
      <Card image={randomImage[2]} handleClick={handleClick} />
      <Card image={randomImage[3]} handleClick={handleClick} />
      <Card image={randomImage[4]} handleClick={handleClick} />
      <Card image={randomImage[5]} handleClick={handleClick} />
      <Card image={randomImage[6]} handleClick={handleClick} />
      <Card image={randomImage[7]} handleClick={handleClick} />
      <Card image={randomImage[8]} handleClick={handleClick} />
      <Card image={randomImage[9]} handleClick={handleClick} />
      <Card image={randomImage[10]} handleClick={handleClick} />
      <Card image={randomImage[11]} handleClick={handleClick} />
    </div>
  );
};
export default Main;
