// import './App.css'
// import ToDo from './ToDo';
// import { useState } from 'react';

// const todos = [
//   {
//     title: "Learn React",
//     date: new Date(2025, 1, 27),
//     checked:true
    
//   },
//   {
//     title: "TP 1 React",
//     date: new Date(2025, 1, 27),
//     checked:false

//   },
//   {
//     title: "TP 2 React",
//     date: new Date(2025, 1, 27),
//     checked:false

//   },
//       {
//     title: "TP 3 React",
//     date: new Date(2026, 1, 27),
//     checked:false
//   },
// ];

// function App() {
//   const DATE = new Date();



//   return (
//     <>
//       <article className="ToDoList">
//         <h1>TODO List</h1>
//         <h2>{DATE.toLocaleString()}</h2>
        
//         {todos.map((todo, index) => (
//         <ToDo
//           key={index}
//           title={todo.title}
//           date={todo.date}
//           checked={todo.checked}
//           />
//       ))}    
//       </article>
    
    
//     </>


//   )
// }


// export default App


import './App.css'
import ToDo from './ToDo';
import { useState } from 'react';


function App() {
  const DATE = new Date();
  const [todos,setTodos] = useState( [
    {
      title: "Learn React",
      date: new Date(2025, 1, 27),
      checked:true
      
    },
    {
      title: "TP 1 React",
      date: new Date(2025, 1, 27),
      checked:false
  
    },
    {
      title: "TP 2 React",
      date: new Date(2025, 1, 27),
      checked:false
  
    },
        {
      title: "TP 3 React",
      date: new Date(2026, 1, 27),
      checked:false
    },
  ]);
  
  const handleCheckboxChange = (index: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };


  return (
    <>
      <article className="ToDoList">
        <h1>TODO List</h1>
        <h2>{DATE.toLocaleString()}</h2>
        
        {todos.map((todo, index) => (
        <ToDo
          key={index}
          title={todo.title}
          date={todo.date}
          checked={todo.checked}
          onChange={() => handleCheckboxChange(index)} 
          />
      ))}    
      </article>
    
    
    </>


  )
}




export default App
