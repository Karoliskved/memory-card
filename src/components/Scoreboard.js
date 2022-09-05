const Scoreboard = (props) => {
  if (props.isFail) {
    console.log('test');
    return <div className="Scoreboard fail">Unlucky! try again.</div>;
  } else {
    return (
      <div className="Scoreboard">
        <div className="counter">
          <div>Best score:</div>
          <div className="bestScoreCounter">{props.bestScore}</div>
        </div>
        <div className="counter">
          <div>Current scores:</div>
          <div className="currentScoreCounter">{props.currentScore}</div>
        </div>
      </div>
    );
  }
};

export default Scoreboard;
