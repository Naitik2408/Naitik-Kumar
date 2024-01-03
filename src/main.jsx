import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {store} from './Store/Store.js'
import { Provider } from 'react-redux'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import AllProject from './Component/AllProject/AllProject.jsx'
import MainProject from './Component/MainProject/MainProject.jsx'
import Layout from './Layout.jsx'

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <Layout />,
    children:[
      {
        path:'',
        element: <App/>
      },
      {
        path:'all-projects',
        element: <AllProject/>,
      },
      {
        path:'main-project/:postId',
        element: <MainProject/>
      }
      
    ]
     },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
  </Provider>
)
