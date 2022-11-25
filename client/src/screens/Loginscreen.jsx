import React, { useEffect, useState }  from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions/userActions';

const Loginscreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.getItem('currentUser')){
            window.location.href= '/'
        }
    }, [])

    const login = () => {
        const user = {email, password}
        dispatch(loginUser(user))
    }

    return (
        <div className='bg-content'>
            <div className="row title-register">
                <div className="col-md-5">
                    <h2>Connexion</h2>
                    <div>
                        <input
                            type="text"
                            placeholder='email'
                            className='form-control'
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}}
                            required
                        />
                        <input
                            type="text"
                            placeholder='mot de passe'
                            className='form-control'
                            value={password}
                            onChange={(e) => {setPassword(e.target.value)}}
                            required
                        />
                        <button className='btn mt-5' onClick={login}>VALIDER</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Loginscreen;
