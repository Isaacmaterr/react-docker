import React from 'react';
import { Link } from 'react-router-dom';
function Menu() {

    return (
        <>


            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class={'nav-link'} to={'/Dashbord'}>Dashbord</Link>
                        </li>
                        <li class="nav-item">
                            <Link class={'nav-link'} to={'/Cadastro'}>Cadastro</Link>
                        </li>
                    </ul>
                </div>
            </nav>


        </>
    )

}
export default Menu