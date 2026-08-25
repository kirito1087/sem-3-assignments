import { useReducer } from "react";
function reducer(state, action) {
  if (action.type == "inc") {
    return state + 1;
  } else if (action.type == "d") {
    return state - 1;
  } else if (action.type == "reset") {
    return 0;
  } else {
    return state;
  }
}
const CounterDemo = () => {
  let [state, dispatch] = useReducer(reducer, 0); // start at 0
  return (
    <div>
      <h2>{state}</h2>
      <button onClick={() => dispatch({ type: "inc" })}>add</button>
      <button onClick={() => dispatch({ type: "d" })}>--</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};
export default CounterDemo;
