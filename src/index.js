import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { DataProvider } from './components/DataContext'
import './index.css'
ReactDOM.render(
  <DataProvider>
    <App />
  </DataProvider>
  , document.getElementById('root'))
