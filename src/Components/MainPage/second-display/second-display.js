import React, {Component} from 'react';
import './second-display.css'
import img1 from '../../../img/secondD/athlete-black-and-white-boxer-boxing-290416.jpg';
import img2 from '../../../img/secondD/man-holding-barbell-1431282.jpg';

class SecondDisplay extends Component {
    render() {
        return (
            <div className={'second-block'}>
                <div className={'second-div-p'}>
                    <p>MEET YOUR</p>
                    <p>TRAINERS</p>
                </div>
                <div className={'trainer-card'}>
                    <div className={'card'}>
                        <img src={img2}/>
                        <div>
                            <p className={'card-p-bold'}>MIKE</p>
                            <p className={'card-p-bold'}>NORTON</p>
                        </div>
                        <p className={'card-p-opacity'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda corporis cupiditate, earum eum fugiat minus non quod temporibus veritatis.</p>
                        <button className={'black-btn'}>read more</button>
                    </div>
                    <div className={'card'}>
                        <img src={img1}/>
                        <div className={'float'}>
                            <p className={'card-p-bold'}>JEFF</p>
                            <p className={'card-p-bold'}>PERRY</p>
                        </div>
                        <p className={'card-p-opacity'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda corporis cupiditate, earum eum fugiat minus non quod temporibus veritatis.</p>
                        <button className={'black-btn'}>read more</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SecondDisplay;
