import { Outlet } from "react-router-dom";
import { Cabecalho, Conteudo, Rodape } from "../../componentes";

import { userAppContext } from "../../hooks";

const LayoutPadrao = () => {
   const { autora } = userAppContext();
   
    return (
        <>
        <Cabecalho nomeUsuario="Joana"/>
     <Conteudo>
        <Outlet />

     </Conteudo>
     <Rodape autora={autora}/>
     </>
    );
};

export { LayoutPadrao };