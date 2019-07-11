import multiplication from "../utils/multiplication";

const MIN_VALUE = 2;
const MAX_VALUE = 12;

const firstMultiplication = multiplication(MIN_VALUE, MAX_VALUE);
const stateInit = {
  inputs: [],
  operations: [firstMultiplication],
  results: [],
  maxRounds: 3,
  currentRound: 1,
  isLastRoundSuccess: null,
  score: 0
};

export const ActionTypes = {
  SendNum: "Calcul/SendNum",
  Reset: "Calcul/Reset",
  SendResult: "Calcul/SendResult",
  ResetGame: "Calcul/ResetGame"
};

export const Actions = {
  sendNum: value => ({
    type: ActionTypes.SendNum,
    payload: {
      value
    }
  }),
  reset: () => ({
    type: ActionTypes.Reset
  }),
  sendResult: () => ({
    type: ActionTypes.SendResult
  }),
  resetGame: () => ({
    type: ActionTypes.ResetGame
  })
};

export default (state = stateInit, action = {}) => {
  switch (action.type) {
    case ActionTypes.SendNum:
      return { ...state, inputs: state.inputs.concat([action.payload.value]) };

    case ActionTypes.Reset:
      return { ...state, inputs: [] };

    case ActionTypes.SendResult:
      // Récupérer la valeur entrée par l'utilisateur
      let input =
        state.inputs.length === 0 ? 0 : parseInt(state.inputs.join(""));

      // Calculer le résultat le l'opération
      let result =
        state.operations[state.currentRound - 1].left *
        state.operations[state.currentRound - 1].right;

      // Calculer du nouvel état
      return {
        ...state,
        // Réinitialisation de l'input utilisateur
        inputs: [],
        // On ajouter une nouvelle opération à afficher
        operations: state.operations.concat([
          multiplication(MIN_VALUE, MAX_VALUE)
        ]),
        // On ajoute le résultat envoyé par l'utilisateur à la liste des résultats
        results: state.results.concat([input]),
        // On incrément le "tour" courant
        currentRound: state.currentRound + 1,
        // On calcule le score, en fonction du resultat obtenu par rapport au résultat attendu
        score: input === result ? state.score + 1 : state.score,
        // Permet de savoir si l'utilisateur a répondu correctement
        isLastRoundSuccess: input === result
      };

    case ActionTypes.ResetGame:
      return {
        ...stateInit,
        operations: [multiplication(MIN_VALUE, MAX_VALUE)]
      };

    default:
      return state;
  }
};
