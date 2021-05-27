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
                    <p>Main</p>
                    <p>About us</p>
                    <p>Contacts</p>
                </div>
            </div>
        );
    }
}

export default Header;
