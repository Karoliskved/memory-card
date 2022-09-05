const Card = (props) => {
  return (
    <img
      className="Card"
      id={props.index}
      onClick={props.handleClick}
      src={props.image}
    ></img>
  );
};
export default Card;
