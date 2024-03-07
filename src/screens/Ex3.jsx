import React, { useEffect, useState } from 'react'
import ChratRoom from '../doc/ChratRoom'

function Ex3() {

    /* 
     useEffect(callback,[dependancy list])

     1.Mount
     useEffect(function(){},{})

     2.update
     useEffect(function(){},{dep})

     3.unMount
     useEffect(function(){
        return () => {

        }
     },[])
    */

     
        const [roomId,setRoomId] = useState('general')
        const [show,setShow] = useState(false)
     

     useEffect(() => {
        
     },[])
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h5 className="display-3 text-warning">useEffect Hook</h5>
            </div>
        </div>

        <div className="row">
            <div className="col-md-12">
                <div className="form-group">
                    <label htmlFor="">Choose the chat room;</label>
                    <div className="input-group">
                        <select className="form-select" value={roomId} onChange={e => setRoomId(e.target.value)}>
                            <option value="null">Choose room ID</option>
                            <option value="gender">gender</option>
                            <option value="travel">travel</option>
                            <option value="Music">Music</option>
                        </select>
                        {
                            show ? <button onClick={() => setShow(!show) } className="btn btn-danger">Close chart</button>:
                            <button onClick={() => setShow(!show) } className="btn btn-success">Open Chart</button>
                        }
                    </div>
                </div>
            </div>
        </div>

        {
            show && <hr/> 
        }
        {
            show && <ChratRoom roomId={roomId} />
        }
    </div>
  )
}

export default Ex3
