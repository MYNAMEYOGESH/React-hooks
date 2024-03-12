import React from 'react'
import { Outlet } from 'react-router-dom'

function PerfomComp() {
  return (
    <div className="container">
    <div className="row">
        <div className="col-md-12 text-center">
            <h3 className="display-3 text-success">Perfomence Component</h3>
        </div>
    </div>
    <Outlet/>
</div>
  )
}

export default PerfomComp
