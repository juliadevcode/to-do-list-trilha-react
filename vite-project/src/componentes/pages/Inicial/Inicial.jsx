import { userAppContext } from '../../../hooks';
import { FormCriarTarefa } from '../../FormCriarTarefa';
import { ListarTarefas } from '../../ListarTarefas';
import style from './Inicial.module.css';

const Inicial = () => {
    
    return ( 
        
        <div className={style.Inicial}>
           <FormCriarTarefa />
           <ListarTarefas />
           
        </div>
    )
}

export { Inicial };