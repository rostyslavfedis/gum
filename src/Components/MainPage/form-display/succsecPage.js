import React, {Component} from 'react';
import './formComponent.css'
import {Link} from "react-router-dom";


class SuccsecPage extends Component {
    render() {
        return (
            <div className={'success-page'}>
                <div className={'success-page-div'}>
                    <p>Thank You! We contact with You!</p>
                    <Link to={'/'}>
                        <button>Come back</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default SuccsecPage;
