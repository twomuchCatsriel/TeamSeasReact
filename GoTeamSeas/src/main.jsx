import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import './app.css'
import './appMobile.css'

import router from './App'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<h1>loading</h1>}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  </StrictMode>
)
