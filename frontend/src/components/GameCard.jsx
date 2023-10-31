import "./GameCard.css";

function GameCard({ name, description }) {
  return (
    <div className="gameCardGlobal">
      <h5 className="gameCardh5">{name}</h5>
      <p>{description}</p>
    </div>
  );
}

export default GameCard;
