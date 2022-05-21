import React , { useReducer } from 'react'

function UseReducer2() {
    const reducer = (state,action)=>{
        switch(action.type){
            case 'increment':
                return {count: state.count + 1, showModal: state.showModal}
            case 'toggleshowModal':
                return  {count: state.count, showModal: !state.showModal}
            default:
                return state;
        }

    }
    const [state, dispatch]=useReducer(reducer,{count: 1,showModal:true })




    const increment = ()=>{
        dispatch({type: 'increment'})
        dispatch({type: 'toggleshowModal'})
    }
   
   
  return (
    <div>
        {state.count}
       <button onClick={increment}>increment </button>
       {
         state.showModal && <p>This is a text</p> 
       }
       
    </div>
  )
 
}

export default UseReducer2
//use reducer is used when you fhave to complete multiple task uder 
//on triger like this example above 
//if you click tfhe button tfhere two work will triger at a time 
//one will count tfhe value and tfhe second one will take tfhe 
//decision tfhat model will be sfhowend or not 