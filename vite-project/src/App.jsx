import { BrowserRouter } from 'react-router-dom';

import { AppContextsProvider } from './contexts';

import { Router } from './Router';

import './App.css'



const App = () => {
  return (
    <AppContextsProvider>
    <BrowserRouter>
    <Router />

    </BrowserRouter>
    </AppContextsProvider>
  )
   
}

export { App };
