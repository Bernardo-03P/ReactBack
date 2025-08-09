import React from 'react';
import logoVCR from "../Images/Logo_simplesVCR.png"

const Navbar = ({ onMenuClick }) => {
    return (
        <nav>
            <img src={logoVCR} alt="Logo" />
            <ul className="redirects">
                <li><a href="#sobre">Sobre Nós</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#cases">Cases</a></li>
                <li><a href="#metodo">Método VCR</a></li>
                <li><a href="#depoimentos">Depoimentos</a></li>
            </ul>
            <button className="menu" onClick={onMenuClick}></button>
        </nav>
    );
};

export default Navbar;