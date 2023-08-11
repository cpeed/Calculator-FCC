import React from "react";
import "./Button.css";

const Button = ({ buttonProps, setText, setExpression ,expression,isEval,setIsEval}) => {
  async function handleClick(e) {
    const keyValue = e.currentTarget.innerText;

    const keyPressed = e.currentTarget.className;

    setText((state) => {

        if(isEval&&keyValue==='=')
        {
            
            return state
        }
        if(isEval&&keyPressed==='button button-number')
        {
            setIsEval(false)
            setExpression('0')
            state='0'
        }
        if(isEval&&keyPressed==='button button-operator')
        {
            setIsEval(false)
            setExpression(state+keyValue)
            return '0'
        }
      switch (keyPressed) {
        case "button button-ac":
            setExpression('0')
          return "0";
        case "button button-number":
          if (state === "0") {
            
            return keyValue;
          }
         
          return state + keyValue;

        case "button button-decimal":
          if (state.includes(".")) {
            
            return state;
          }
          if (state === "0") {
            
            return keyValue;
          }
         
          return state + keyValue;

        case "button button-operator":
            let input1=expression.slice();
           if(state==='0'&&(keyValue==='-')&&/[-+*/]/.test(input1.slice(-1))&&/[0-9]/.test(input1.slice(-2,-1)))
           {
              
               state=''
           }
           else if(/[-+*/]/.test(input1.slice(-1))&&/[-+*/]/.test(input1.slice(-2,-1)))
           {
           
               state=''
               input1=input1.slice(0,-2)
           }
            if(input1==='0')
            {
                setExpression(state+keyValue)
            }else{
           setExpression(input1+state+keyValue)}
            return '0'
        case "button button-equal":
            if(state==='0')
            {
                state=''
            }
         
           
            let input;
          
             input=expression.slice()+state
            
            if(!(/[-+*/]/.test(input)))
            {
                setExpression(state)
                setIsEval(true)
                return state
                
            }

          
            if(/[-+*/]/.test(input.slice(-1)))
            {
                input=input.slice(0,-1)
                
            }  
        if(/[-+*/]/.test(input.slice(-1)))
            {
                input=input.slice(0,-1)
                
            }
          
            
            setExpression(input+keyValue+eval(input))
            setIsEval(true)
          return eval(input);
        default:
          return "0";
      }
    });
    
  }

  return (
    <button
      onClick={(e) => {
        
        handleClick(e);
      }}
      className={buttonProps.class}
      id={buttonProps.id}
    >
      {buttonProps.element}
    </button>
  );
};

export default Button;
