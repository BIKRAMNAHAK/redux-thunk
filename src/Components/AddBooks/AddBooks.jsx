import React, { useState } from 'react'
import './addbooks.css'
import { Container } from 'react-bootstrap'
import { IoBookSharp } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { AddBookAsync } from '../../Services/Actions/BooksActions';
import { useNavigate } from 'react-router';

function AddBooks() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [inputBooks, setInputBooks] = useState({
        id: '',
        title: '',
        author: '',
        genre: '',
        year: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputBooks({ ...inputBooks, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(AddBookAsync(inputBooks))
        navigate('/viewData')

    }


    return (
        <>
            <div className='librery '>
                <Container fluid className='d-flex justify-content-center'>

                    <form class="form " onSubmit={handleSubmit}>
                        <p class="title"><IoBookSharp />
                            AddBooks</p>
                        <p class="message">Fill up the form for Adding Any books  </p>

                        <label>
                            <input className="input" type="text" name='title' onChange={handleChange} value={inputBooks.title} placeholder="Enter  book title" required="" />
                            <span>Books Title</span>
                        </label>

                        <label>
                            <input className="input" type="text" name='author' onChange={handleChange} value={inputBooks.author} placeholder="Name of Authors" required="" />
                            <span>Author</span>
                        </label>


                        <label>
                            <input className="input" type="text" name='genre' onChange={handleChange} value={inputBooks.genre} placeholder="Enter genre " required="" />
                            <span>genre</span>
                        </label>

                        <label>
                            <input className="input" type="tel" name='year' onChange={handleChange} value={inputBooks.year} placeholder='enter publish year' required="" />
                            <span>publication Year</span>
                        </label>

                        <button className="submit">Submit</button>

                    </form>
                </Container>
            </div>
        </>
    )
}

export default AddBooks