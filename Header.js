import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { UseStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{ basket, user }, dispatch] = UseStateValue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className='header'>
            <Link to='/'>
                <img className='header_logo  ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFfk5EpYhMg8UEC5DCQkuJoroVS8wMSz6NIA&usqp=CAU' alt='logo' />
            </Link>
            <div className='header_search'>
                <input className='header_searchInput' type='text' />
                <SearchIcon className='header_searchIcon' />
            </div>
            <div className='header_nav'>
                <Link to={!user && '/login'}>
                    <div className='header_option' onClick={handleAuthentication}>
                        <span className='header_optionLionOne'>Hello, {!user ? 'Geust' : user.email}</span>
                        <span className='header_optionLionTwo'>{user ? "sign Out" : 'sign In'}</span>
                    </div>
                </Link>
                <div className='header_option'>
                    <span className='header_optionLionOne'>Returns</span>
                    <span className='header_optionLionTwo'>Orders</span>
                </div>
                <div className='header_option'>
                    <span className='header_optionLionOne'>Your</span>
                    <span className='header_optionLionTwo'>Prime</span>
                </div>
                <Link to='/checkout'>
                    <div className='header_optionBasket'>
                        <ShoppingBasketIcon />
                        <span className='header_optionLionTwo header_basketCount'>{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>

    );
}

export default Header;

