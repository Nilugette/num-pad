import React from "react";
import { connect } from "react-redux";
import Home from "./Home";
import Game from "./Game";

const App = ({ isFinished }) => {
  return <div>{isFinished ? <Home /> : <Game />}</div>;
};

// lire uniquement le state
const mapStateToProps = state => {
  return {
    isFinished: state.currentRound > state.maxRounds
  };
};

export default connect(mapStateToProps)(App);
