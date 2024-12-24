import { Link } from 'react-router-dom';
import style from './Cabecalho.module.css';

const Cabecalho = () => {

    return (
        <div const className={style.Cabecalho}>
            <Link to="/">
            <h1>
           <span>ToDo </span>
           List 
        </h1>
        </Link>

        <Link to="/SobreNos">Sobre Nos</Link>
            </div>

    );
};

export { Cabecalho  };