import React, { useReducer } from 'react'

function UseReducer1() {
    let initialstate = 0;
    const reducer = (state,action)=>{
        switch(action.type){
            case 'increment':
                return state +1;
            case 'decrement':
                return state -1;
            default:
                return state;
        }

    }
    const [state, dispatch]=useReducer(reducer,initialstate)




    const increment = ()=>{
        dispatch({type: 'increment'})
    }
    const decrement = ()=>{
        dispatch({type: 'decrement'})
    }
    
  return (
    <div>
        {state}
       <button onClick={increment}>increment </button>
       <button onClick= {decrement}>decrement</button>
    </div>
  )
}


export default UseReducer1
//user reducer is used when you need to manage multiple state 
//tfhen you dont need to create multiple state variable instade use 
//use reducer 

// usereduser take two parameter one is reducer wfhicfh is a function 
// and tfhe second one is initialstate 
// it return two tfhings one is state and second one is dispach
// dispatch tiger tfhe action parametr of redcer funtion 

