import axios from "axios";
import generateUniqueId from "generate-unique-id";

export const GetData = (data) => {
    return {
        type: 'GETDATA',
        payload: data
    };
}

export const EditBooks = (editdata) => {
    return {
        type: 'EDITBOOKS',
        payload: editdata
    };
}

const updateData = () =>{
    return {
        type: 'UPDATEBOOKS',
    }
}

export const DeleteBook = (deletedId) => {
    return {
        type: 'DELETEBOOK',
        payload: deletedId
    };
}

export const AddBookAsync = (data) => {
    return (dispatch) => {
         data.id = generateUniqueId({
            length: 3,
            useLetters: false
        });
        axios.post('http://localhost:3200/Books', data)
            .then((res) => {
                dispatch(GetDataAsync());
            })
            .catch((err) => {
                console.log("error", err);
            });
    };
};

export const GetDataAsync = () => {
    return (dispatch) => {
        axios.get('http://localhost:3200/Books')
            .then((res) => {
                console.log("get data success", res);
                dispatch(GetData(res.data));
            })
            .catch((err) => {
                console.log("error", err);
            });
    };
};

export const EditDataAsync = (editId) => {
    return (dispatch) => {
        axios.get(`http://localhost:3200/Books/${editId}`)
            .then((res) => {
                console.log("Edit data success:", res.data);
                dispatch(EditBooks(res.data));

            })
            .catch((err) => {
                console.log("Error editing data:", err);
            });
    };
};

export const updateDataAsync = (updatedata) => {
    return (dispatch) => {
        axios.patch(`http://localhost:3200/Books/${updatedata.id}`, updatedata)
            .then((res) => {
                console.log("Update data success:", res);
                dispatch(GetDataAsync());
                dispatch(updateData())
            })
            .catch((err) => {
                console.log("Error updating data:", err);
                // dispatch(updateErr(err));
            });
    };
};

export const DeleteAsync = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:3200/Books/${id}`).then((res) => {
            console.log("res", res.data);
            dispatch(GetDataAsync(res.data))
        }).catch((err) => {
            console.log("err", err);
        })
    }
}
