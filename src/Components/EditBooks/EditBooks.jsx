import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

function EditBooks() {
    const { id } = useParams()
    console.log("id", id);

    let { books } = useSelector(state => state.BooksReducer);

    const [editBookS, seteditBook] = useState({
        id: '',
        title: '',
        author: '',
        genre: '',
        year: '',
    })
    useEffect(() => {
        let editBook = books.find((rec) => {
            return rec.id === id
        })
        seteditBook(editBook);
    }, [books, id])


    const handleChange = (e) => {
        const { name, value } = e.target
        setEdit({ ...editBookS, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted with:", editBookS);
    }

    return (
        <>
            <Container fluid className='d-flex justify-content-center mt-5'>
                <form className="form" onSubmit={handleSubmit}>
                    <p className="title">Edit Books Details</p>
                    <p className="message">Update the book details:</p>

                    <label>
                        <input
                            className="input"
                            type="text"
                            placeholder="Enter book title"
                            name="title"
                            value={editBookS.title}
                            onChange={handleChange}
                        />
                        <span>Books Title</span>
                    </label>

                    <label>
                        <input
                            className="input"
                            type="text"
                            placeholder="Name of Authors"
                            name="author"
                            value={editBookS.author}
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
                            value={editBookS.genre}
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
                            value={editBookS.year}
                            onChange={handleChange}
                        />
                        <span>Publication Year</span>
                    </label>

                    <button type="submit" className="submit">Submit</button>
                </form>
            </Container>
        </>
    )
}

export default EditBooks;
