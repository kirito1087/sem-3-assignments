import { useReducer } from "react";
const UseReducerDemo = () => {
  let data = { input: "", list: [] };
  function reducer(state, action) {
    if (action.type == "inp") {
      return { ...state, input: action.payload };
    } else if (action.type == "add") {
      return {
        ...state,
        list: [...state.list, state.input],
        input: "",
      };
    } else if (action.type == "d") {
      return {
        ...state,
        list: state.list.filter((_, id) => id !== action.payload),
      };
    }
  }
  let [state, dispatch] = useReducer(reducer, data);
  return (
    <div>
      <input
        value={state.input}
        onChange={(e) => dispatch({ type: "inp", payload: e.target.value })}
      />
      <button onClick={() => dispatch({ type: "add" })}>add</button>
      {state.list.map((a, id) => {
        return (
          <li key={id} onClick={() => dispatch({ type: "d", payload: id })}>
            {a}
          </li>
        );
      })}
    </div>
  );
};
export default UseReducerDemo;
