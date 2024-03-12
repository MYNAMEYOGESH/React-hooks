import React from 'react'
import { Outlet } from 'react-router-dom'

function ContextComp() {
  return (
    <div className="container">
    <div className="row">
        <div className="col-md-12 text-center">
            <h3 className="display-3 text-success">Context Component</h3>
        </div>
    </div>
    <Outlet/>
</div>
  )
}

export default ContextComp
