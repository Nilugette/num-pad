import React from "react";
import { connect } from "react-redux";
import { Actions } from "../reducers/calcul";
import Message from "./Message";
import NumPad from "./NumPad";
import Button from "./Button";
import StatsBoard from "./StatsBoard";

const Game = ({
  inputs,
  currentOperation,
  maxRounds,
  remainingRounds,
  isFirstRound,
  isLastRoundSuccess,
  sendNum,
  reset,
  sendResult
}) => {
  return (
    <div className="container p-4">
      {isFirstRound ? (
        <Message>
          Vous avez {maxRounds} multiplications à faire. Bonne chance !
        </Message>
      ) : null}
      {isLastRoundSuccess !== null ? (
        <Message type={isLastRoundSuccess ? "success" : "danger"}>
          {isLastRoundSuccess ? "Bravo !" : "Raté."}
        </Message>
      ) : null}
      <p className="row bg-light p-4">
        {currentOperation.left} &times; {currentOperation.right} ={" "}
        {inputs.join("")}
      </p>
      <div className="row">
        <div className="col col-2">
          <NumPad onNumberClick={sendNum} />
        </div>
        <div className="col col-2">
          <div className="mb-2">
            <Button
              type="primary"
              onClick={sendResult}
              disabled={inputs.length === 0}
            >
              Valider
            </Button>
          </div>
          <div>
            <Button
              type="danger"
              onClick={reset}
              disabled={inputs.length === 0}
            >
              Reset
            </Button>
          </div>
        </div>
        <div className="col">
          <StatsBoard />
        </div>
      </div>
    </div>
  );
};

// lire uniquement le state
const mapStateToProps = state => {
  return {
    inputs: state.inputs,
    currentOperation: state.operations[state.currentRound - 1],
    maxRounds: state.maxRounds,
    remainingRounds: state.maxRounds - state.currentRound,
    isFirstRound: state.currentRound === 1,
    isLastRoundSuccess: state.isLastRoundSuccess
  };
};

// lancer les actions
const mapDispatchToProps = dispatch => {
  return {
    sendNum: value => dispatch(Actions.sendNum(value)),
    reset: () => dispatch(Actions.reset()),
    sendResult: () => dispatch(Actions.sendResult())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
