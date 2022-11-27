import { useState, useEffect } from "react";
import { useReducer } from "react";

const App = () => {
  const [count, SetCount] = useState(0);
  const [data, setData] = useState({
    name: "krishna",
    id: 1
  });
  const countReducer = (state, action) => {
    switch (action.type) {
      case "add":
        return state + 1;
      case "subtract":
        return state - action.payload;
      default:
        return state;
    }
  };
  const dataReducer = (state, action) => {
    switch (action.type) {
      case "name":
        return action.payload;
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(countReducer, 0);
  const [nameState, namedispatch] = useReducer(dataReducer, "kumawat");
  function handleChange() {
    SetCount((prev) => prev + 1);
  }
  function handleChangeeId() {
    setData((prev) => {
      return {
        ...prev,
        id: prev.id + 1
      };
    });
  }
  return (
    <>
      <button onClick={handleChange} id="change">
        {" "}
        Change me{" "}
      </button>
      <button onClick={handleChangeeId}> Change id </button>
      <h1>{count} </h1>
      <h1>
        {data.name} {data.id}
      </h1>
      <p>{state}</p>
      <button onClick={() => dispatch({ type: "add" })}>+</button>
      <button onClick={() => dispatch({ type: "subtract", payload: 5 })}>
        -
      </button>
      <p>{nameState}</p>
      <button onClick={() => namedispatch({ type: "name", payload: "krishna" })}>
        changeName
      </button>
    </>
  );
};
export default App;
