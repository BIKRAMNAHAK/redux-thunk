import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

function EditBooks() {
    const {id} = useParams()
    const { books } = useSelector(state => state.bookReducer)
    const [edit, setEdit] = useState(books)
    console.log("edit",edit);

    useEffect(() => {
        if (books) {
            const bookEdit = books.find(book => book.id === id)
            if (bookEdit) {
                setEdit(bookEdit)
            }
        }
    }, [id, books])


    const handleChange = (e) => {
        const { name, value } = e.target
        setEdit({ ...edit, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted with:", edit);
    }
   
    return (
        <Container fluid className='d-flex justify-content-center mt-5'>
            <form className="form" onSubmit={handleSubmit}>
                <p className="title">Edit Books Details</p>
                <p className="message">Update the book details:</p>

                <label>
                    <input className="input" type="text" placeholder="Enter book title" name='title' value={edit.title} onChange={handleChange} />
                    <span>Books Title</span>
                </label>

                <label>
                    <input className="input" type="text" placeholder="Name of Authors" name="author" value={edit.author} onChange={handleChange} />
                    <span>Author</span>
                </label>

                <label>
                    <input className="input" type="text" placeholder="Enter genre" name="genre" value={edit.genre} onChange={handleChange} />
                    <span>Genre</span>
                </label>

                <label>
                    <input className="input" type="tel" placeholder="Enter publication Year" name="year" value={edit.year} onChange={handleChange} />
                    <span>Publication Year</span>
                </label>

                <button type="submit" className="submit">Submit</button>
            </form>
        </Container>
    )
}

export default EditBooks;
