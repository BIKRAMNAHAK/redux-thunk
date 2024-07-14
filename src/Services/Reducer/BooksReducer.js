import { GetDataAsync } from "../Actions/BooksActions";

const initialState = {
    books: [],
    book: null,
    isEdit : false
};

function BooksReducer(state = initialState, action) {
    switch(action.type) { 
        case "GETDATA": 
            return {
                ...state,
                books: action.payload
            };
                
            case "EDITBOOKS":
                return {
                    ...state,
                    book: action.payload,
                    isEdit: true
                };
    
            case "UPDATEBOOKS":
               
                return {
                    ...state,
                    book: null,
                    isEdit: false,
                };
    
                
        default:
            return state;
    }
}

export default BooksReducer;
