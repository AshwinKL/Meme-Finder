import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <h2>{props.meme.name}</h2>
      <img src={props.meme.url} alt={props.meme.name} />
      <button onClick={() => props.removeItem(props.meme)}>Remove</button>
    </div>
  );
};
export default Card;
