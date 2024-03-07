import React, { useState } from 'react'

function Ex1() {
  const [num,setNum] = useState(0)

  const addVal = (val => {
    setNum(num + val)
  })
  const delVal = (val => {
    setNum(num - val)
  })
  return (
    <div className="container">
    <div className="row">
        <div className="col-md-12 text-center">
            <h3 className="display-3 text-warning">Use State hook</h3>
        </div>
    </div>

    <div className="row">
      <div className="col-md-12 text-center m-2">
        <h3 className="text-success">num = { num } </h3>
        <button className="btn btn-primary m-2" onClick={() => addVal(1)}>Add+1</button>
        <button className="btn btn-primary m-2" onClick={() => delVal(1)}>sub-1</button>
      </div>
    </div>
   </div>
  )
}

export default Ex1
