import React, {Component} from 'react';
import './fourth-display.css'
import img from '../../../img/fourthD/pexelsphoto1370750.jpeg'

class FourthDisplay extends Component {
    render() {
        return (
            <div id='AboutUs' className={'fourth-main'}>
                <div className={'fourth-wrapper'}>
                    <div className={'img-wrapper'}>
                        <img src={img}/>
                    </div>
                    <div className={'fourth-black'}>
                        <div className={'black-wrapper'}>
                            <p className={'p1'}>About us</p>
                            <p className={'p2'}>THIS PLACE IS SPECIAL...</p>
                            <p className={'p3'}>
                                Due to its commanding position,
                                in the Second World War the Fort
                                House was used by the military as
                                an observation post and even had
                                the roof reinforced to protect it
                                from an aerial attack, with two feet
                                of concrete, making it bomb proof
                                from enemy aircraft. With its historic
                                harbour, rockpools and sandy beaches
                                St Mawes provides the idyllic Cornish
                                escape and The Fort House the perfect
                                property in which to stay This spacious
                                and airy single storey holiday cottage
                                sits in a private garden whose terrace
                                provides uninterrupted views of the spectacular
                                Cornish coastline.
                            </p>
                        </div>
                    </div>
                    <div className={'fourth-last'}>
                        <p className={'p4'}>01</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default FourthDisplay;
