import React from 'react'
import { Outlet } from 'react-router-dom'

function StateComp() {
  return (
   <div className="container">
    <div className="row">
        <div className="col-md-12 text-center">
            <h3 className="display-3 text-success">State Hook</h3>
        </div>
    </div>
    {/* display the child componentes */}
    <Outlet/>
   </div>
  )
}

export default StateComp
