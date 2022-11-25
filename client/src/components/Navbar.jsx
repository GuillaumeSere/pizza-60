import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';

const Navbar = () => {

    const cartstate = useSelector(state => state.cartReducer)
    const userstate = useSelector(state => state.loginUserReducer)
    const { currentUser } = userstate

    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Pizza-60</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">

                            {currentUser ?
                                (
                                    <div className="dropdown">
                                        <a className="dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {currentUser.name}
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#">Commande</a>
                                            <a className="dropdown-item" href="#">Déconexion</a>
                                        </div>
                                    </div>
                                ) : (
                                    <li className="nav-item">
                                        <a className="nav-link" href="/login">Connexion</a>
                                    </li>
                                )}

                            <li className="nav-item">
                                <a className="nav-link" href="/cart">Commande {cartstate.cartItems.length}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
