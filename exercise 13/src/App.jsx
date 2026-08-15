import { useReducer } from "react";

const initialState = { A: 0, B: 0 };

const reduce = (state, action) => {
  switch (action.type) {
    case "increment-A":
      return { ...state, A: state.A + 1 };

    case "decrement-A":
      return { ...state, A: state.A - 1 };

    case "increment-B":
      return { ...state, B: state.B + 1 };

    case "decrement-B":
      return { ...state, B: state.B - 1 };

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reduce, initialState);

  return (
    <>
      <h1>count A is: {state.A}</h1>
      

      <button onClick={() => dispatch({ type: "increment-A" })}>
        Increment A
      </button>
      <button onClick={() => dispatch({ type: "decrement-A" })}>
        Decrement A
      </button>
      <h1>count B is: {state.B}</h1>
      <button onClick={() => dispatch({ type: "increment-B" })}>
        Increment B
      </button>
      <button onClick={() => dispatch({ type: "decrement-B" })}>
        Decrement B
      </button>
    </>
  );
}

export default App;
