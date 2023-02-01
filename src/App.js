import React from 'react'
import { useRoutes } from 'react-router-dom';
/*Pages*/ 
import Home from './pages/Home'


import Error from './pages/404'





const App = () => {
    let routes = useRoutes([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '*',
            element: <Error />,
        }
 
    ]);
    return routes;
    
}

export default App


    