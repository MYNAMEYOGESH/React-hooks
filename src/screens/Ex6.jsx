import React, { useRef, useState, } from 'react'

function Ex6() {
  const x = useRef()
  const y = useRef()
  const z = useRef()
  const e = useRef()
  const l = useRef()
  const  [len,setLen] = useState(0)

  const handler = () => {
    console.log("clicked");
    console.log(x.current.value);
    console.log(y.current.value);
    console.log(z.current.value);
    console.log(e.current.value);
   
    

    // let data = {
    //   name: y.current.value,
    //   email: z.current.value,
    //   date: e.current.value
    // }
  }
  const clickHandler = () => {
    if(l.current.value.length > 50) {
      console.log("length should not exide 50 char")
    }else {
        setLen(l.current.value.length)
    }
  }
  return (
   <div className="container">
    <div className="row">
        <div className="col-md-12 text-center">
            <h3 className="display-3 text-warning">useRef hook</h3>
        </div>
    </div>

    <div className="row">
      <div className="col-md-12">
        <h1 className="display-1 text-danger">Test Title</h1>
        <div className="form-group">
          <input type='text' name='text' id='test' ref={x} className='form-control' />
        </div>
        <div className="form-group">
          <button className="btn btn-danger" >click Me</button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <div className="form-group mt-2">
                <label htmlFor="name">name</label>
                <input type="text" name='' id=''className='form-control' ref={y} />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="name">Email</label>
                <input type="email" name='' id=''className='form-control' ref={z} />
              </div>
              <div className="form-group mt-2">
               
                <input type="date" name='' id=''className='form-control' ref={e} />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="ms" className='text-center'>Text Area</label>
                <textarea name="text" id="text" cols="25" rows="5" className='form-control' ref={l} onKeyDown={clickHandler}></textarea>
                <strong className='text-strong' id='textLeg'>{len}</strong>
              </div>
              <div className="form-group mt-2">
                <button className="btn btn-primary" onClick={handler}>Submit</button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Ex6
