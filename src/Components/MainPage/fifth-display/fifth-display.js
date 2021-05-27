import React, {Component} from 'react';
import './fifth-display.css'

class FifthDisplay extends Component {
    render() {
        return (
            <div className={'fifth-div'}>
                <div className={'fifth-left'}>
                    <div className={'fifth-wrapper'}>
                        <p className={'fifth-p1'}>WHAT PEOPLE SAY</p>
                        <p className={'fifth-p2'}>Due to its commanding position, in the Second World War the Fort House was used by the military as an observation post and even had the roof reinforced to protect it from an aerial attack, with two feet of concrete, making it bomb proof from enemy aircraft. </p>
                        <p className={'fifth-p3'}>Nick Cave</p>
                        <button className={'fifth-btn'}>Read More</button>
                    </div>
                </div>
                <div className={'fifth-right'}></div>
            </div>
        );
    }
}

export default FifthDisplay;
