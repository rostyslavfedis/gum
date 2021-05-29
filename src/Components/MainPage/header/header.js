import React, {Component} from 'react';
import './header.css';
import logo from '../../../img/header/logo.png';


class Header extends Component {
    render() {
        return (
            <div className={'header-div'}>
                <div className={'div-left'}>
                    <img src={logo}/>
                </div>
                <div className={'div-right'}>
                    <a href='#Main'>Main</a>
                    <a href='#AboutUs'>About us</a>
                    <a href='#Contact'>Contact</a>
                </div>
            </div>
        );
    }
}

export default Header;
