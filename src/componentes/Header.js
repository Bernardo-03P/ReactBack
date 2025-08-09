import React, { useState } from 'react';
import logoVCR from '../Images/Logo_simplesVCR.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Função única para abrir/fechar o menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Função para fechar o menu ao clicar em um link
    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        // Usamos um Fragment <> para renderizar os dois elementos vizinhos (nav e ul)
        <>
            <nav>
                <img src={logoVCR} alt="Logo VCR" />
                {/* Usei <ul> para semântica correta, o nome da classe mantém o estilo */}
                <ul className="redirects">
                    <li><a href="#sobre">Sobre Nós</a></li>
                    <li><a href="#servicos">Serviços</a></li>
                    <li><a href="#cases">Cases</a></li>
                    <li><a href="#metodo">Método VCR</a></li>
                    <li><a href="#depoimentos">Depoimentos</a></li>
                </ul>
                {/* A lógica de display é controlada pelo estado, como no seu JS original */}
                <div
                    className="menu"
                    style={{ display: isOpen ? 'none' : 'flex' }}
                    onClick={toggleMenu}
                ></div>
                <div
                    className="esc"
                    style={{ display: isOpen ? 'flex' : 'none' }}
                    onClick={toggleMenu}
                ></div>
            </nav>
            {/* A classe 'open' é adicionada condicionalmente com base no estado */}
            <ul className={`dropdown ${isOpen ? 'open' : ''}`}>
                <li><a href="#sobre" onClick={closeMenu}>Sobre Nós</a></li>
                <li><a href="#servicos" onClick={closeMenu}>Serviços</a></li>
                <li><a href="#cases" onClick={closeMenu}>Cases</a></li>
                <li><a href="#metodo" onClick={closeMenu}>Método VCR</a></li>
                <li><a href="#depoimentos" onClick={closeMenu}>Depoimentos</a></li>
            </ul>
        </>
    );
};
export default Header