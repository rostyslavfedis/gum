import React, {Component} from 'react';
import './third-display.css'
import ok from '../../../img/thirdD/ok.png'

class ThirdDisplay extends Component {
    render() {
        return (
            <div className={'third-main'}>
                <div className={'third-flex'}>
                    <p className={'third-p-big'}>BEST GYM MEMBERSHIP</p>
                    <div className={'third-info'}>
                        <img src={ok}/>
                        <div className={'info-p'}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Architecto cum, deleniti doloremque eaque facilis harum,
                                illum in ipsa, ipsam neque nihil odit pariatur quia quisquam
                                reprehenderit sequi totam vero voluptas.
                            </p>
                        </div>
                    </div>
                    <div className={'third-info'}>
                        <img src={ok}/>
                        <div className={'info-p'}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Architecto cum, deleniti doloremque eaque facilis harum,
                                illum in ipsa, ipsam neque nihil odit pariatur quia quisquam
                                reprehenderit sequi totam vero voluptas.
                            </p>
                        </div>
                    </div>
                    <div className={'third-info'}>
                        <img src={ok}/>
                        <div className={'info-p'}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Architecto cum, deleniti doloremque eaque facilis harum,
                                illum in ipsa, ipsam neque nihil odit pariatur quia quisquam
                                reprehenderit sequi totam vero voluptas.
                            </p>
                        </div>
                    </div>
                    <button className={'third-button'}>LEARN MORE ABOUT US</button>
                </div>
            </div>
        );
    }
}

export default ThirdDisplay;
