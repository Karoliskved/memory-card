const Card = (props) => {
  return (
    <div className="Card" id={props.image} onClick={props.handleClick}>
      {props.image}
    </div>
  );
};
export default Card;
