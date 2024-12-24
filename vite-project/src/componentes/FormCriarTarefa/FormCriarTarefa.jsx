import style from './FormCriarTarefa.module.css';
import { CampoTexto, Botao, Loading } from "../../componentes";
import { useState } from 'react';
import { userAppContext } from '../../hooks';

const FormCriarTarefa = () => {
    const { adicionarTarefa, loadingCriar } = userAppContext();

    const [ nomeTarefa, setNomeTarefa ]  = useState('');

    const onChangeNomeTarefa = (event) => {
        setNomeTarefa(event.currentTarget.value)
    }

    const submeterFormulario = (event) => {
        event.preventDefault();

        if(!nomeTarefa) {
            return;
        }

        adicionarTarefa(nomeTarefa);

        setNomeTarefa('');
    } 
    

    return (
        <form  className={style.FormCriarTarefa} onSubmit={submeterFormulario}>
            <CampoTexto 
            value={nomeTarefa} 
            onChange={onChangeNomeTarefa}
            />
            <Botao texto={loadingCriar ? <Loading /> : '+'}/>
        </form>
    )
} 

export { FormCriarTarefa }