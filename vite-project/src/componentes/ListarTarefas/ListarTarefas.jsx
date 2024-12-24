import { userAppContext } from '../../hooks';
import { Loading } from '../Loading';
import style from './ListarTarefas.module.css';
import { ListarTarefasItem } from "./ListarTarefasItem";

const ListarTarefas = () => {
    const { tarefas, loadingCarregar } = userAppContext();

    return (
        <ul className={style.ListarTarefas}>
            {loadingCarregar && (
                <p>Carregando... 
                    <Loading />
                    </p>
            )}

            {!loadingCarregar && !tarefas.length &&  (
                <p>Não há tarefas cadastradas...</p>
            ) }
            {tarefas.map(item => 
            <ListarTarefasItem 
            key={item.id} 
            id={item.id}
            nome={item.nome} 
            />
            )}
    
        </ul>
    )
}

export { ListarTarefas };