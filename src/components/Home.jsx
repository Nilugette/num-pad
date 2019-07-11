import React from "react";
import { connect } from "react-redux";
import { Actions } from "../reducers/calcul";
import Message from "./Message";
import Button from "./Button";

const Home = ({ score, resetGame }) => {
  return (
    <div className="container p-4">
      <Message>Vous avez terminé avec un score de : {score} !</Message>
      <div className="mt-4">
        <Button type="primary" onClick={resetGame}>
          Rejouer !
        </Button>
      </div>
    </div>
  );
};

// lire uniquement le state
const mapStateToProps = state => {
  return {
    score: state.score
  };
};

// lancer les actions
const mapDispatchToProps = dispatch => {
  return {
    resetGame: () => dispatch(Actions.resetGame())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
