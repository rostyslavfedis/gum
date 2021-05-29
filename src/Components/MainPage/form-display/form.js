import React, {useState} from 'react';
import './form.css'
import sendService from "../../../Services/sendService";

const Form = () => {
    const [values, setValues] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setValues({...values, [e.target.name]: value})
    }

    const saveChanges = async () => {
        await sendService.postUsers(values);
    }
    return (
        <div className={'form-div'}>
            <div className={'form-wrapper'}>
                <div className={'top-p'}>
                    <p className={'p-style'}>MAKE A RESERVATION</p>
                    <p className={'p-style1'}>Our clients are important to us, so we continually train our therapists to
                        ensure that all treatments are of the highest standard and that each client receives the best
                        care’</p>
                </div>

                <div className={'form-flex'}>
                    <form className={'form'} onSubmit={(e) => handleSubmit(e)}>
                        <div className={'form-inside-div'}>
                            <div className={'div-flex'}>
                                <label className={'text'}>Email</label>
                                <input type='text'
                                       required={true}
                                       name={'email'}
                                       onChange={(e) => handleChange(e)}/>
                            </div>

                            <div className={'div-flex'}>
                                <label className={'text'}>Name</label>
                                <input required={true}
                                       type='text'
                                       name={'name'}
                                       onChange={(e) => handleChange(e)}/>
                            </div>
                        </div>

                        <div className={'form-inside-div'}>
                            <div className={'div-flex'}>
                                <label className={'text'}>Date</label>
                                <input type='date'
                                       required={true}
                                       name={'date'}
                                       onChange={(e) => handleChange(e)}/>
                            </div>
                            <div className={'div-flex'}>
                                <label className={'text'}>Phone</label>
                                <input type='text'
                                       required={true}
                                       name={'phone'}
                                       onChange={(e) => handleChange(e)}/>
                            </div>
                        </div>
                        <div className={'form-inside-div'}>
                            <div className={'div-flex'}>
                                <label className={'text'}>Message</label>
                                <textarea required={true}
                                       name={'message'}
                                       onChange={(e) => handleChange(e)}/>
                            </div>
                        </div>
                        <div className={'form-inside-div'}>
                            <button className={'btn-send'} onClick={(e) => saveChanges(e)}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;
