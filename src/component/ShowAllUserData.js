import React from 'react'
import AddUser from './AddUser'
import axios from 'axios'
const ShowAllUserData = () => {
    const [userData, setUserData] = React.useState()

    const addDataShowFun = () => {
        return axios.get("http://localhost:6005/all_data")
            .then((data) => {
                console.log(data.data);
                setUserData(data.data)
            }).catch((err) => {
                console.log(err);
            })
    }
    React.useEffect(() => {
        return axios.get("http://localhost:6005/all_data")
            .then((data) => {
                console.log(data.data);
                setUserData(data.data)
            }).catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <>
            <AddUser showuserdata={addDataShowFun} />
            <div>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Email</th>
                            <th scope="col">action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {userData && userData.length > 0 && userData.map((item, index) => {
                            return (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.First_Name}</td>
                                    <td>{item.Last_Name}</td>
                                    <td>{item.Email}</td>
                                    <td>{item.role}</td>
                                </tr>

                            )
                        })}


                    </tbody>
                </table>

            </div>
        </>
    )
}

export default ShowAllUserData
