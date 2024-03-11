import React, {useLayoutEffect, useState } from 'react'

function Ex4() {
  const [num,setNum] = useState(0)

  const incVal = (val) => {
    setNum(num +val)
  }

  // useLayoutEffect(callback,[deep] )
  useLayoutEffect(() => {
    console.log(`layot effect triggerd, current state= ${num}`);
  },[num])
  return (
    <div className="container">
    <div className="row">
        <div className="col-md-12 text-center">
            <h5 className="display-3 text-warning">useLayoutEffect Hook</h5>
        </div>
    </div> 
    <div className="row">
      <div className="col-md-12">
        <p className="text-secondary">
          which has same signature (structure) to useEffect <br />
          But it fires synchronousil after all DOM mutations <br />
          Use this to read layout from the DOM and synchronously re-render the component
          <br />
          Updates scheduled inside useLayoutEffect will be flushed synchronously, before
          the browser has a chance to paint (mounting of DOM) <br />
          If you are comparing with class component methods, useLayout Effect fires same as
          like componentDidMount() and ComponentDidUpdate
        </p>
      </div>
    </div>

    <div className="row">
      <div className="col-md-12">
        <h1 className="text-success">number = {num}</h1>
        <button className="btn btn-success" onClick={() => incVal(1)}>Add</button>
      </div>
    </div>
    </div> ) } export default Ex4