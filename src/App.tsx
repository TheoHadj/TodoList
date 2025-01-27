import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const DATE = new Date();

  return (
    <>
      <article className="ToDoList">
        <h1>TODO List</h1>
        <h2>{DATE.toLocaleString()}</h2>
        <ToDo/>
      </article>
    
    
    </>


  )
}


function ToDo() {

  return (
    <>
      <ul>
        <li>Faire le TP Todo List</li> 
        <li>Faire le TP Card User</li>
        <li>Une fois qu'un TP est terminé, le push sur un dépôt Github</li>
        <li>Pour chaque TP, m'envoyer le lien du dépôt Github par MP</li>
      </ul>
    </>

  )


}

export default App
