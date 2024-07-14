
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './Viewdata.css';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteAsync, EditDataAsync, GetDataAsync } from '../../Services/Actions/BooksActions';
import { useNavigate } from 'react-router';

function ViewData() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const { books } = useSelector(state => state.BookReducer)
    const { books, isEdit } = useSelector(state => state.BooksReducer)

    const handleEdit = (id) => {

        dispatch(EditDataAsync(id))

    }
    const handleDelet = (id) => {
        dispatch(DeleteAsync(id))
    }

    useEffect(() => {
        dispatch(GetDataAsync());
    }, [])

    useEffect(() => {
        if (isEdit) {
            navigate('/edit')
        }
    }, [isEdit])
    return (
        <>
            <Container fluid>
                <Row>
                    <table className="table table-success table-striped">
                        <thead>
                            <tr>
                                <th className='border border-dark text-center'>SR No</th>
                                <th className='border border-dark text-center'>Title</th>
                                <th className='border border-dark text-center'>Author</th>
                                <th className='border border-dark text-center'>Genre</th>
                                <th className='border border-dark text-center'>Year</th>
                                <th className='border border-dark text-center'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                books.map((data) => {

                                    return (
                                        <tr >
                                            <td className='border border-dark text-center col-2'>{data.id}</td>
                                            <td className='border border-dark text-center col-2'>{data.title}</td>
                                            <td className='border border-dark text-center col-2'> {data.author}</td>
                                            <td className='border border-dark text-center col-2'>{data.genre}</td>
                                            <td className='border border-dark text-center col-2'>{data.year}</td>
                                            <td className='d-flex justify-content-center gap-3 py-3 border-dark'>
                                                <button type='submit' className='btn btn-success' onClick={() => handleEdit(data.id)}>Edit</button>
                                                <button className='btn btn-danger' onClick={() => handleDelet(data.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </Row>
            </Container>
        </>
    );
}

export default ViewData;

