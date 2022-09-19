import React from 'react'
import { Formulario } from './components/Formulario'
import { TodoList } from './components/TodoList'

export const App = () => {
  return (
      <div className='container'>
          <h1>App</h1>
          <TodoList/>
          

      </div>
  )
}
