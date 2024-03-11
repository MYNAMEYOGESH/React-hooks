import React, {useEffect, useState } from 'react'

function Ex5() {
    const [num,setNum] = useState(0)
    const addVal = (val) => {
      setNum(num +val)
    }

    useEffect(() => {
        console.log(`layot effect triggerd, current state= ${num}`)

        return () => {
            console.log(`count terminated... bye..`);
        }
      },[num])
  return (
    <div className='container'>
      <div className="row">
        <div col-md-12 className="display-3 text-success">UseEffect</div>
      </div>

      <div className="row">
        <div className="col-md-12">
            <h1 className="text-success">num = { num }</h1>
            <butten className="btn btn-success" onClick={() => addVal(1)} >Add</butten>
        </div>
      </div>
    </div>
  )
}

export default Ex5
