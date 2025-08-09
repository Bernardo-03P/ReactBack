import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Depoimentos() {
    const [depoimentos, setDepoimentos] = useState([]);
    const [nome, setNome] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [idEmEdicao, setIdEmEdicao] = useState(null);

    // Função que busca os dados do backend
    const fetchDepoimentos = async () => {
        try {
            const response = await axios.get('/depoimentos');
            setDepoimentos(response.data);
        } catch (error) {
            console.error("Erro ao buscar depoimentos:", error);
        }
    };

    // Busca os dados iniciais quando o componente carrega
    useEffect(() => {
        fetchDepoimentos();
    }, []);

    // Função para CRIAR (POST) e ATUALIZAR (PATCH)
    const handleSubmit = async (event) => {
        event.preventDefault();
        const dadosDepoimento = { nome_usuario: nome, mensagem: mensagem };

        try {
            if (idEmEdicao) {
                // Atualizando um depoimento existente (PATCH)
                await axios.patch(`/depoimentos/${idEmEdicao}`, dadosDepoimento);
                alert('Depoimento atualizado com sucesso!');
            } else {
                // Criando um novo depoimento (POST)
                await axios.post('/depoimentos', dadosDepoimento);
                alert('Depoimento enviado com sucesso!');
            }

            // Limpa o formulário
            setNome('');
            setMensagem('');
            setIdEmEdicao(null);
            
            // --- ALTERAÇÃO AQUI ---
            // Após o sucesso, chama a função para buscar a lista atualizada.
            fetchDepoimentos();

        } catch (error) {
            console.error("Erro ao salvar depoimento:", error);
            alert('Ocorreu um erro ao salvar o depoimento.');
        }
    };

    // Função para DELETAR
    const handleDelete = async (id) => {
        if (window.confirm("Tem certeza que deseja apagar este depoimento?")) {
            try {
                await axios.delete(`/depoimentos/${id}`);
                alert('Depoimento apagado com sucesso!');

                // --- ALTERAÇÃO AQUI ---
                // Após o sucesso, chama a função para buscar a lista atualizada.
                fetchDepoimentos();

            } catch (error) {
                console.error("Erro ao apagar depoimento:", error);
                alert('Ocorreu um erro ao apagar o depoimento.');
            }
        }
    };
    
    // Função para preparar a edição
    const handleEditar = (depoimento) => {
        setIdEmEdicao(depoimento.id);
        setNome(depoimento.nome_usuario);
        setMensagem(depoimento.mensagem);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Depoimentos</h1>
            
            <form onSubmit={handleSubmit}>
                <h3>{idEmEdicao ? 'Editando Depoimento' : 'Deixe o seu depoimento'}</h3>
                <input 
                    type="text" 
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Seu nome" 
                    required 
                    style={{ width: '300px', marginBottom: '10px' }}
                />
                <br />
                <textarea 
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    placeholder="Sua mensagem" 
                    required
                    style={{ width: '300px', height: '80px' }}
                ></textarea>
                <br />
                <button type="submit">{idEmEdicao ? 'Atualizar' : 'Enviar'}</button>
            </form>

            <hr style={{ margin: '20px 0' }} />

            <h2>O que estão dizendo</h2>
            {depoimentos.map((depoimento) => (
                <div key={depoimento.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                    <h4>{depoimento.nome_usuario}</h4>
                    <p>"{depoimento.mensagem}"</p>
                    <button onClick={() => handleEditar(depoimento)}>Editar</button>
                    <button onClick={() => handleDelete(depoimento.id)} style={{ marginLeft: '10px' }}>Deletar</button>
                </div>
            ))}
        </div>
    );
}

export default Depoimentos;