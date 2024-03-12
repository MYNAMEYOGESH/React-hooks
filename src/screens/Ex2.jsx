import React,{ useReducer } from 'react'

//reduce logic
function customReducer(state,action) {
  switch(action) {
    case "inc": console.log(`inc called`)
    return { qnty: state.qnty + 1 }
    break;
    case "dec": console.log(`dec called`)
    return state.qnty <= 1 ? { qnty: 1} : { qnty: state.qnty-1}
    break;
    case "clear": console.log(`clear called`)
    return { qnty: 1 }
    break;
    default:
  }
}

function Ex2() {
  let initState =  {qnty:1}

  //const [state,dispatech] = useRenducer(reducer,initialstate)
  const[state,dispatch] = useReducer(customReducer,initState)
  return (
    <div className="container">
    <div className="row">
        <div className="col-md-12 text-center">
            <h3 className="display-3 text-warning">Use Reducer hook</h3>
        </div>
    </div>

    <div className="row">
      <div className="col-md-12">
        <p className="text-dark">
          This hook is an alternative to useState, which you have complex state logic. 
          it takes reducer function and an initial state or data , and returns the current state dispatch function to update it <br />

        </p>
        <p>const [state,dispatcher] = useReducer(reducer,initialData)</p>
      </div>
    </div>

    <div className="row">
      <div className="col-md-12">
        <h1 className="text-success text-center" >state = { state.qnty} </h1>
        <button className="btn btn-success" onClick={() => dispatch('inc')}>Inc...</button>
        <button className="btn btn-warning" onClick={() => dispatch('dec')}>dec...</button>
        <button className="btn btn-danger" onClick={() => dispatch('clear')}>clear</button>
      </div>
    </div>
   </div>
  
  )
}

export default Ex2
