import style from './Rodape.module.css';

const Rodape = (props) => {
    const { autora } = props

    const anoAtual = new Date().getFullYear(); 
    return (
        <div className={style.Rodape}>
            React Básico - {anoAtual} - {autora}
        </div>
    )
};


export { Rodape };