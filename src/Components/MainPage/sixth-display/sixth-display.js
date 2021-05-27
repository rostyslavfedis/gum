import React, {Component} from 'react';
import './sixth-display.css'
import img from '../../../img/sixthD/Untitled-5.jpg'

class SixthDisplay extends Component {
    render() {
        return (
            <div className={'sixth-main'}>
                <div className={'sixth-flex'}>
                    <div className={'six-helper'}>
                        <div className={'six-left'}>
                            <div className={'p-wrapper'}>
                                <p className={'p-wrapper-p1'}>JOIN THE MOVEMENT</p>
                                <p className={'p-wrapper-p2'}>
                                    Sample text. Click to
                                    select the text box.
                                    Click again or double click
                                    to start editing the text. Duis
                                    aute irure dolor.
                                </p>
                            </div>
                            <div className={'p-wrapper padding'}>
                                <p className={'p-wrapper-p1'}>TRANSFORM LIVES</p>
                                <p className={'p-wrapper-p2'}>
                                    Sample text. Click to select the text box. Click again or double click to start
                                    editing the text. Duis aute irure dolor.
                                </p>
                            </div>
                            <div className={'p-wrapper padding'}>
                                <p className={'p-wrapper-p1'}>TRAIN FOR A RACE</p>
                                <p className={'p-wrapper-p2'}>
                                    Sample text. Click to
                                    select the text box.
                                    Click again or double click
                                    to start editing the text. Duis
                                    aute irure dolor.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={'six-right'}>
                        <img src={img}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default SixthDisplay;
