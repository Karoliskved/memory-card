const Card = (props) => {
  return (
    <img
      className="Card"
      id={props.index}
      onClick={props.handleClick}
      src={props.image}
      alt="album"
    ></img>
  );
};
export default Card;
