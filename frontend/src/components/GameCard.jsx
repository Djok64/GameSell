import "./GameCard.css";

function GameCard({
  name,
  description,
  releaseDate,
  console,
  editor,
  disponibility,
}) {
  return (
    <div className="gameCardGlobal">
      <h5 className="gameCardh5">{name}</h5>
      <p>{description}</p>
      <p>{releaseDate}</p>
      <p>{console}</p>
      <p>{editor}</p>
      <p>{disponibility}</p>
    </div>
  );
}

export default GameCard;
