import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import 'bootstrap-icons/font/bootstrap-icons.css'
import Route from './router/Router.jsx'
import {CartProvider}from '../src/context/context'
import  './App.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <CartProvider>
    <Route/>
    </CartProvider>
    </React.StrictMode>
)
