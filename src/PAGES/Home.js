import React from 'react';
import backpointer from '../PAGES/imgs/backpointer.png';
const Home = ({ scrollToTop, showBackPointer }) => {
    return (
        <div id="home" className="section1">
            {showBackPointer && (
                <img onClick={scrollToTop} className="back-pointer" src={backpointer} alt="Voltar para o Menu" />
            )}
            <h1><span>Nós criamos</span> soluções criativas para a sua empresa</h1>
            <p>Transformamos sua presença online com estratégias inovadoras, maximizando resultados e conectando marcas a novos públicos. Potencialize sua marca com a gente.</p>
            <button className="button">Fale com a gente</button>
        </div>
    );
};

export default Home;