import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { registerUser } from '../actions/userActions';

const Registerscreen = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');

    const dispatch = useDispatch();

    const register = () => {
        if (password != cpassword){
            alert("les mots de passe ne sont pas identiques")
        }else{
            const user = {
                name,
                email,
                password
            }
            console.log(user)
            dispatch(registerUser(user))
        }
    }

    return (
        <div className='bg-content'>
            <div className="row title-register">
                <div className="col-md-5">
                    <h2>INSCRIPTION</h2>
                    <div>
                        <input
                            type="text"
                            placeholder='nom'
                            className='form-control'
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                            required
                        />
                        <input
                            type="text"
                            placeholder='email'
                            className='form-control'
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            required
                        />
                        <input
                            type="text"
                            placeholder='mot de passe'
                            className='form-control'
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                            required
                        />
                        <input
                            type="text"
                            placeholder='confirme mot de passe'
                            className='form-control'
                            value={cpassword}
                            onChange={(e) => { setCpassword(e.target.value) }}
                            required
                        />
                        <button className='btn mt-5' onClick={register}>VALIDER</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Registerscreen;
