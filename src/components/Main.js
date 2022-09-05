import Card from './Card';

const Main = (props) => {
  const handleClick = props.handleClick;
  return (
    <div className="Main">
      <Card image={1} handleClick={handleClick} />
      <Card image={2} handleClick={handleClick} />
      <Card image={3} handleClick={handleClick} />
      <Card image={4} handleClick={handleClick} />
      <Card image={5} handleClick={handleClick} />
      <Card image={6} handleClick={handleClick} />
      <Card image={7} handleClick={handleClick} />
      <Card image={8} handleClick={handleClick} />
      <Card image={9} handleClick={handleClick} />
      <Card image={10} handleClick={handleClick} />
      <Card image={11} handleClick={handleClick} />
      <Card image={12} handleClick={handleClick} />
    </div>
  );
};
export default Main;
