import React from "react";
import { connect } from "react-redux";
const StatsBoard = ({ remainingRounds, score, ...props }) => {
  return (
    <div {...props}>
      <div>Il reste {remainingRounds} multiplications !</div>
      <div>Votre score : {score}</div>
    </div>
  );
};

// lire uniquement le state
const mapStateToProps = state => {
  return {
    remainingRounds: state.maxRounds - state.currentRound + 1,
    score: state.score
  };
};

export default connect(mapStateToProps)(StatsBoard);

