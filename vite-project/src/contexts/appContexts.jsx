import { createContext, useEffect, useState } from "react";
import { api } from "../services";

api

export const AppContexts = createContext({});

export const AppContextsProvider = (props) => {
    const { children } = props;

    const [autora, setAutora] = useState('Júlia');
    
    const [tarefas, setTarefas] = useState([]);

    const [loadingCriar, setLoadingCriar] = useState(false);
    const [loadingEditar, setLoadingEditar] = useState(false);
    const [loadingCarregar, setLoadingCarregar] = useState(null);
    const [loadingDeletar, setLoadingDeletar] = useState(null);

    const carregarTarefas = async () => {
        setLoadingCarregar(true);

       const { data = [] } = await api.get('/tarefas')

       setTarefas([
        ...data,
       ])

       setLoadingCarregar(false);
    }

    const adicionarTarefa = async (nomeTarefa) => {
        setLoadingCriar(true);

        const { data: tarefa } = await api.post('/tarefas', {
            nome: nomeTarefa,
        });
        
        setTarefas(estadoAtual => {
            return [
                ...estadoAtual,
                tarefa,
            ]
        });

        setLoadingCriar(false);
    };
    
    const removerTarefas = async (idTarefa) => {
        setLoadingDeletar(idTarefa)

        await api.delete(`/tarefas/${idTarefa}`)
        setTarefas(estadoAtual => {
            const tarefasAtualizadas = estadoAtual.filter(tarefas => tarefas.id != idTarefa);

            return [
                ...tarefasAtualizadas,
            ];
        });

        setLoadingDeletar(null);
    };

    useEffect(() => {
           carregarTarefas()
    }, [])

    const editarTarefas = async (idTarefa, nomeTarefa) => {
        setLoadingEditar(idTarefa);

        const { data: tarefaAtualizada } = await api.put(`/tarefas/${idTarefa}`, {
            nome: nomeTarefa,
        })

        setTarefas(estadoAtual => {
            const tarefasAtualizadas = estadoAtual.map(tarefa => {
                return tarefa.id == idTarefa ?  {
                    ...tarefa,
                    nome: tarefaAtualizada.nome,
                } : tarefa;
                
        });
    

        return [
            ...tarefasAtualizadas,
        ];
        });
        
        setLoadingEditar(null);
    };

    return (
        <AppContexts.Provider value={{
            autora, 
            tarefas, 
            adicionarTarefa,
            removerTarefas,
            editarTarefas,
            loadingCarregar,
            loadingCriar,
            loadingDeletar,
            loadingEditar,
             }}>
            { children }
        </AppContexts.Provider>
    )
}