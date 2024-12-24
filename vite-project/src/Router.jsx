import { Route, Routes } from 'react-router-dom';
import { Erro404, Inicial } from './componentes/pages';
import { SobreNos } from './componentes/pages/SobreNos/SobreNos';
import { LayoutPadrao } from './layouts';


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LayoutPadrao />}>
            <Route path="/" element={<Inicial />} />
            <Route path="/SobreNos" element={<SobreNos />} />
            <Route path="*" element={<Erro404 />}/>
            </Route>
        </Routes>
    );
};

export { Router };