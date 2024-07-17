import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateDataAsync } from '../../Services/Actions/BooksActions';
import { useNavigate } from 'react-router';

function EditBooks() {
    const { book } = useSelector(state => state.BooksReducer);
    const [editBook, setEditBook] = useState(book || {});
    // const [isUpdate, setIsUpdate] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!book) {
            navigate('/viewData');
        }
    }, [book, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditBook({ ...editBook, [name]: value });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("update data", e);
        dispatch(updateDataAsync(editBook));
        navigate('/viewData');
        // setIsUpdate(true);
    };

 

    if (!book) return null; // or a loading spinner

    return (
        <div className="edit-body">
            <Container fluid className='d-flex justify-content-center'>
                <form className="form" onSubmit={handleUpdate}>
                    <p className="title">Edit Books Details</p>
                    <p className="message">Update the book details:</p>

                    <label>
                        <input
                            className="input"
                            type="text"
                            placeholder="Enter book title"
                            name="title"
                            value={editBook.title || ''}
                            onChange={handleChange}
                        />
                        <span>Book Title</span>
                    </label>

                    <label>
                        <input
                            className="input"
                            type="text"
                            placeholder="Name of Authors"
                            name="author"
                            value={editBook.author || ''}
                            onChange={handleChange}
                        />
                        <span>Author</span>
                    </label>

                    <label>
                        <input
                            className="input"
                            type="text"
                            placeholder="Enter genre"
                            name="genre"
                            value={editBook.genre || ''}
                            onChange={handleChange}
                        />
                        <span>Genre</span>
                    </label>

                    <label>
                        <input
                            className="input"
                            type="tel"
                            placeholder="Enter publication Year"
                            name="year"
                            value={editBook.year || ''}
                            onChange={handleChange}
                        />
                        <span>Publication Year</span>
                    </label>

                    <button type="submit" className="submit">Update</button>
                </form>
            </Container>
        </div>
    );
}

export default EditBooks;
