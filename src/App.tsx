import { useState, useEffect } from "react";
import styled from "styled-components";

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  h1 {
    width: 80%;
    text-align: center;
  }

  div {
    padding: 10px;

    background-color: rebeccapurple;

    width: 80%;

    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }

  button {
    width: 70%;
    height: 40px;

    font-size: 20px;
  }

  p {
    font-weight: 800;
  }
`;

function App() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => setTimer(timer - 1), 1000);
    }

    return () => clearTimeout(timer);
  }, [timer]);

  const handleAdd = () => {
    setCount((c) => c + 1);
  };
  return (
    <AppDiv>
      <h1>No of clicks until timer expires</h1>
      <div>
        <h2>{count}</h2>
        <p>Time left: {timer} seconds</p>
        {timer > 0 && <button onClick={handleAdd}>+</button>}
      </div>
    </AppDiv>
  );
}

export default App;
