import { useState } from "react";
import "./App.css";
import keys from "./assets/keys.json";
import Button from "./components/Button";
import Display from "./components/Display";

const buttons = (setText, setExpression, text,expression,isEval,setIsEval) => {
  return keys.map((btn) => {
    return (
      <Button
        buttonProps={btn}
        setText={setText}
        setExpression={setExpression}
        text={text}
        expression={expression}
        isEval={isEval}
        setIsEval={setIsEval}/>
    );
  });
};
function App() {
  const [text, setText] = useState("0");
  const [expression, setExpression] = useState("0");
  const [isEval, setIsEval] = useState(false);
  return (
    <div className="App">
      <div className="container">
        <div class="display-container">
          <Display nam="display-result" value={expression} />
          <Display nam="display" value={text} />
        </div>
        <div className="buttons-grid">
          {buttons(setText, setExpression, text,expression,isEval,setIsEval)}
        </div>
      </div>
    </div>
  );
}

export default App;
