import React from 'react'
// import Axios from 'axois';
import axios from 'axios'

const AddUser = (props) => {
    const [First_Name, setFirstName] = React.useState("")
    const [Last_Name, setLastName] = React.useState("")
    const [Email, setEmail] = React.useState("")
    const [role, setRole] = React.useState("")
  const addDataFun = ()=>{
      const data = {
        First_Name,Last_Name,Email,role
      }
      console.log(data,"ddddddddddd");
      return axios.post("http://localhost:6005/saved",{...data})

      .then((data) => {
          const {showuserdata} = props
          showuserdata()
          setLastName('')
          setFirstName('')
          setRole('')
          setEmail('')
      }).catch((err) => {
          console.log(err);
      })
  }
    return (
        <div>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">                                    
                Add User
            </button>


            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <input type="text" style={{ width: "90%" }} placeholder="first name"
                                value={First_Name}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <input type="text"
                                style={{ width: "90%" }}
                                className="my-4"
                                placeholder="Last Name"
                                value={Last_Name}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <input type="text"
                                style={{ width: "90%" }}
                                className="my-2"
                                placeholder="Email"
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <select
                                className="form-control"
                                className="my-1"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}

                            >
                                <option>select Role</option>
                                <option value={"User"}>user</option>
                                <option value={"admin"}>admin</option>

                            </select>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-dismiss="modal" onClick ={(e)=>addDataFun(e)}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddUser
