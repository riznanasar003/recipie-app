import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddRecipie = () => {
    const [data,setData] = useState(
        
            {
                "recid":"",
                "recname":"",
                "description":"",
                "image":""
            }
        
    )
    const inputHandler = (event) =>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue = ()=>{
        console.log(data)
        axios.post("http://localhost:8081/add",data).then(
            (response)=>{
                console.log(data)
                if (response.data.status=="success") {
                    alert("Successfully Added")
                    
                } else {
                    alert("Error")
                    
                }
            }
        ).catch().finally()
        
    }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">RECIPIE ID</label>
                        <input type="text" className="form-control" name="recid" value={data.recid} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">RECIPIE NAME</label>
                        <input type="text" className="form-control" name='recname' value={data.recname} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <label htmlFor="" className="form-label">DESCRIPTION</label>
                        <textarea id="" className="form-control" name="description" value={data.description} onChange={inputHandler}></textarea>

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <label htmlFor="" className="form-label">IMAGE</label>
                        <input type="text" className="form-control" name='image' value={data.image} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <button className="btn btn-success" onClick={readValue}>REGISTER</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AddRecipie