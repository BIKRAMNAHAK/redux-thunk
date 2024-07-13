import { GetDataAsync } from "../Actions/BooksActions";

const initialState = {
    books: [],
    book: null,
};

function BooksReducer(state = initialState, action) {
    switch(action.type) { 
        case "GETDATA": 
            return {
                ...state,
                books: action.payload
            };
                
        case "EDITBOOKS":
            let singlebook = [...state.books]

            const updatedBooks = singlebook.filter((b) =>{
                return b.id === action.payload
            });
            return {
                ...state,
                // books: updatedBooks,
                book: updatedBooks[0],
            };
                
        default:
            return state;
    }
}

export default BooksReducer;
