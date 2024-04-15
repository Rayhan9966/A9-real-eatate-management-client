import React from 'react'
import ReactDOM from 'react-dom/client'
import AuthProvider from './AuthProvider/AuthProvider'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

 <AuthProvider>
 <RouterProvider router={router}></RouterProvider>
 </AuthProvider>
  </React.StrictMode>
);
