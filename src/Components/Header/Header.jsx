import React from 'react'
import { Container, Row } from 'react-bootstrap'
import logo from "../../assets/images/file.png"
import './header.css'
import NavSection from './NavSection'
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router'

function Header() {
    const navigate =useNavigate()
   const handleToAdd = ()=>{
    navigate('/')
   }
    return (
        <>
            <div className="header">
                <Container >
                    <Row >
                        <div className="col-2">
                            <div>
                                <img src={logo} alt={logo} className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-7">
                            <div className='d-flex justify-content-center'>
                                <div className="d-flex">
                                    <div className="wrap">
                                        <div class="search">
                                            <input type="text" className="searchTerm" placeholder="What are you looking for?" />
                                            <button type="submit" className="searchButton">
                                                <FaSearch />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <NavSection />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className='d-flex justify-content-end'>
                                <button className="btn btn-primary px-4" onClick={handleToAdd}>Add New Book</button>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Header

