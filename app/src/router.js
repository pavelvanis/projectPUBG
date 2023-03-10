import { createBrowserRouter } from "react-router-dom";

import Layout from './layouts/Layout'
import MainLayout from './layouts/MainLayout'
import PlayerLayout from './layouts/PlayerLayout'
import Error from './layouts/Error'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <MainLayout/>
            },
            {
                path: 'player',
                element: <PlayerLayout/>
            }
        ]
    },
    {
        path: '*',
        element: <Error/>
    }
])

export default router