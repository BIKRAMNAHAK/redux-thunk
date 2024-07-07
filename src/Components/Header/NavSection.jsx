import React from 'react'
import { Link } from 'react-router-dom';
import './header.css'

function NavSection() {
    const menu = [{
        name: "Home",
        path: '/'
    }, {
        name: "About",
        path: '/about'
    }, {
        name: "Books",
        path: '/ViewData'
    }, {
        name: "Contact",
        path: '/Contact'
    }];

    return (
        <nav>
            <ul className='d-flex'>
             
                {
                    menu.map((item) => {
                   
                        return (
                            <li className='list-unstyled ms-3'>
                                <Link to={item.path} className='key-menus'>{item.name}</Link>
                            </li>
                        );
                    })
                }
            </ul>
        </nav>
    );
}

export default NavSection;
