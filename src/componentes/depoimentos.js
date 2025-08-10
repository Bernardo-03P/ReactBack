import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrashIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"></path></svg>;
const EditIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 19h1.4l8.625-8.625l-1.4-1.4L5 17.6zM19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387zM17.85 10.4L7.25 21H3v-4.25l10.6-10.6z"></path></svg>;
const EyeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"></path></svg>;

function Depoimentos() {
    const [depoimentos, setDepoimentos] = useState([]);
    const [novoNome, setNovoNome] = useState('');
    const [novaMensagem, setNovaMensagem] = useState('');
    const [idEmEdicao, setIdEmEdicao] = useState(null);
    const [textoNomeEditado, setTextoNomeEditado] = useState('');
    const [textoMensagemEditada, setTextoMensagemEditada] = useState('');

    const fetchDepoimentos = async () => {
        try {
            const response = await axios.get('/depoimentos');
            setDepoimentos(response.data);
        } catch (error) {
            console.error("Erro ao buscar depoimentos:", error);
        }
    };

    useEffect(() => {
        fetchDepoimentos();
    }, []);
    
    const formatarData = (dataString) => {
        if (!dataString) return '';
        const data = new Date(dataString);
        return data.toLocaleDateString('pt-BR');
    };

    const handleCriarDepoimento = async (event) => {
        event.preventDefault();
        try {
            const dadosDepoimento = { nome_usuario: novoNome, mensagem: novaMensagem };
            await axios.post('/depoimentos', dadosDepoimento);
            setNovoNome('');
            setNovaMensagem('');
            fetchDepoimentos();
            alert('Depoimento criado com sucesso!');
        } catch (error) {
            console.error("Erro ao criar depoimento:", error);
            alert('Falha ao criar depoimento.');
        }
    };

    const handleSalvarEdicao = async (id) => {
        try {
            const dadosAtualizados = { nome_usuario: textoNomeEditado, mensagem: textoMensagemEditada };
            await axios.patch(`/depoimentos/${id}`, dadosAtualizados);
            setIdEmEdicao(null);
            fetchDepoimentos();
        } catch (error) {
            console.error("Erro ao atualizar depoimento:", error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Tem certeza que deseja apagar este depoimento?")) {
            try {
                await axios.delete(`/depoimentos/${id}`);
                fetchDepoimentos();
            } catch (error) {
                console.error("Erro ao apagar depoimento:", error);
            }
        }
    };

    const handleAtivarEdicao = (depoimento) => {
        setIdEmEdicao(depoimento.id);
        setTextoNomeEditado(depoimento.nome_usuario);
        setTextoMensagemEditada(depoimento.mensagem);
    };
    
    const handleCancelarEdicao = () => {
        setIdEmEdicao(null);
    };

    return (
        <div className="admin-container">

            {/* --- SEÇÃO DE CRIAÇÃO --- */}
            <div className="create-section">
                <h2>Escreva seu comentário</h2>
                <form onSubmit={handleCriarDepoimento} className="create-form">
                    <div className="form-fields-container">
                        <div className="form-group">
                            <label htmlFor="novoNome">Nome do Depoente e Empresa (Respectivamente):</label>
                            <input 
                                id="novoNome"
                                type="text" 
                                value={novoNome}
                                onChange={(e) => setNovoNome(e.target.value)}
                                placeholder='Ex: "Depoente, Empresa"'
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="novaMensagem">Comentário:</label>
                            <textarea 
                                id="novaMensagem"
                                value={novaMensagem}
                                onChange={(e) => setNovaMensagem(e.target.value)}
                                placeholder="Escreva seu comentário" 
                                required
                                rows="4"
                            ></textarea>
                        </div>
                    </div>
                    <button type="submit">Adicionar Depoimento</button>
                </form>
            </div>
            
            {/* --- SEÇÃO DE GERENCIAMENTO  --- */}
            <div className="management-section">
                <h2>Gerenciar Depoimentos</h2>
                {depoimentos.map((depoimento) => (
                    <div key={depoimento.id} className="depoimento-item">
                        {idEmEdicao === depoimento.id ? (
                            <div className="depoimento-content edit-form-container">
                                <div className="edit-form">
                                    <input type="text" value={textoNomeEditado} onChange={(e) => setTextoNomeEditado(e.target.value)} />
                                    <textarea value={textoMensagemEditada} onChange={(e) => setTextoMensagemEditada(e.target.value)} rows="3" />
                                    <div className="edit-form-actions">
                                        <button onClick={() => handleSalvarEdicao(depoimento.id)}>Salvar</button>
                                        <button onClick={handleCancelarEdicao} className="btn-cancel">Cancelar</button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="depoimento-icon"><TrashIcon /></div>
                                <div className="depoimento-content">
                                    <strong>{depoimento.nome_usuario}</strong>
                                    <p>{formatarData(depoimento.data_criacao)}</p>
                                    <p>{depoimento.mensagem}</p>
                                </div>
                                <div className="depoimento-actions">
                                    <button onClick={() => handleAtivarEdicao(depoimento)} title="Editar"><EditIcon /></button>
                                    <button onClick={() => handleDelete(depoimento.id)} title="Deletar" className="btn-delete"><TrashIcon /></button>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
            
            <div className="preview-separator"><EyeIcon /></div>

            {/* --- SEÇÃO DE PRÉ-VISUALIZAÇÃO  --- */}
            <div className="preview-section">
                <h2>Visualização</h2>
                {depoimentos.map((depoimento) => (
                    <div key={depoimento.id} className="depoimento-card-preview">
                        <p className="mensagem">{depoimento.mensagem}</p>
                        <p className="autor">- {depoimento.nome_usuario}</p>
                        <p className="data">{formatarData(depoimento.data_criacao)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Depoimentos;