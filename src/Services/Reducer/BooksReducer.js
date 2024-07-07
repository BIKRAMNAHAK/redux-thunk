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
            const updatedBooks = state.books.map(book =>
                book.id === action.payload.id ? action.payload : book
            );
            return {
                ...state,
                books: updatedBooks,
                book: action.payload,
            };
                
        default:
            return state;
    }
}

export default BooksReducer;
