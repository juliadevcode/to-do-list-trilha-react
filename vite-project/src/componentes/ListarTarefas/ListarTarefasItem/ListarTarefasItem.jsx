import { useState } from 'react';
import { userAppContext } from '../../../hooks';
import { Botao, TIPO_BOTAO } from '../../botao';
import style from './ListarTarefasItem.module.css';
import { CampoTexto } from '../../CampoTexto';
import { Loading } from '../../Loading';

const ListarTarefasItem = (props) => {
    const { id, nome } = props

  const [ estaEditando, setEstaEditando ] = useState(false);

    const { loadingEditar, loadingDeletar, editarTarefas, removerTarefas } = userAppContext();

    const onBlurTarefa = (event) => {
     const nomeTarefa = event.currentTarget.value

     editarTarefas(id, nomeTarefa)

     setEstaEditando(false)
    }

    const loadingEstaEditando = loadingEditar == id;
    const loadingEstDeletando = loadingDeletar == id;

    return (
        <li className={style.ListarTarefasItem}>
           {(loadingEstaEditando || estaEditando) && (
            <CampoTexto 
            defaultValue={nome}
            onBlur={onBlurTarefa} 
            autoFocus/>
           )}
           {!loadingEstaEditando && !estaEditando && (
            <span onDoubleClick={() => setEstaEditando(true)}>{nome}</span>
           )}

           {loadingEstaEditando && (
            <Loading />
           )}

                <Botao texto={loadingEstDeletando ? <Loading /> : '-'}
                 tipo={TIPO_BOTAO.SECUNDARIO}
                 onClick={()=> removerTarefas(id)}
                />
            </li>
    );
};

export { ListarTarefasItem };