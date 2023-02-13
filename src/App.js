import styled from "styled-components";
import "./App.css";
import Counter from "./components/Counter";
import Input from "./components/Input";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="App">
      <Box>
        <Counter />
        <Input />
        <Timer />
      </Box>
    </div>
  );
}

export default App;

const Box=styled.div`
display: flex;
`