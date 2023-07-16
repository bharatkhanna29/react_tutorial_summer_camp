import axios from 'axios';

const getAllUsers = (dispatch) => {
    axios.get("http://localhost:3050/getAllUsers")
      .then(res => dispatch({
        "type": "create",
        "data": res.data
      }))
}

const addUser = (name, college, dispatch) => {
    axios.post("http://localhost:3050/addUser", {
      name: name,
      college: college
    })
    .then(() => {
        getAllUsers(dispatch);
    })
    .catch((err) => console.log(err))
}

const deleteUser = (id, dispatch) => {
    axios.delete(`http://localhost:3050/deleteUser?id=${id}`)
        .then(res => {
            getAllUsers(dispatch)
        })
}

const updateUser = (id, updatedValues, dispatch) => {
    axios.put('http://localhost:3050/updateUser', {
        "id": id,
        "updatedVal": updatedValues
    })
    .then(res => {
        getAllUsers(dispatch)
    })
}

export {
    getAllUsers,
    addUser,
    deleteUser,
    updateUser
}