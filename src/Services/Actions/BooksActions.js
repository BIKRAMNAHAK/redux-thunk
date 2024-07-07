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

export const DeleteBook = (deletedId) => {
    return {
        type: 'DELETEBOOK',
        payload: deletedId
    };
}

export const AddBookAsync = (data) => {
    return (dispatch) => {
         data.id = generateUniqueId({
            length: 2,
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

export const EditDataAsync = (editId, editData) => {
    return (dispatch) => {
        axios.patch(`http://localhost:3200/Books/${editId}`, editData)
            .then((res) => {
                dispatch(EditBooks(res.data));
            })
            .catch((err) => {
                console.log("error", err);
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
