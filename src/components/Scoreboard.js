const Scoreboard = (props) => {
  return (
    <div className="Scoreboard">
      <div className="counter">
        <div>Best score:</div>
        <div className="bestScoreCounter">0</div>
      </div>
      <div className="counter">
        <div>Current scores:</div>
        <div className="currentScoreCounter">0</div>
      </div>
    </div>
  );
};

export default Scoreboard;
