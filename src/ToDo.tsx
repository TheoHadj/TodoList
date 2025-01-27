import "./ToDo.css";
import { useState } from "react";

  interface todoProps {
      title:string;
      date:Date;
      checked:boolean;

    };



function ToDo({title,date,checked}:todoProps) {

    if(checked==false){
    return (
      <>
          <li color="red">
            <input type="checkbox" checked={checked}></input>{title} - {date.toLocaleDateString()} </li> 
      </>
  
    )
    }

    else{
        return (
          <>
              <li color="green">
                <input type="checkbox" checked={checked}></input>{title} - {date.toLocaleDateString()} </li> 
          </>
      
        )
        }

  
  }
  
  export default ToDo
  


//   import "./ToDo.css";
// import { useState } from "react";

//   interface todoProps {
//       title:string;
//       date:Date;
//       checked:boolean;
//       onChange:()=>void;
//     };



// function ToDo({title,date,checked, onChange}:todoProps) {

//     if(checked==false){
//     return (
//       <>
//           <li color="red">
//             <input type="checkbox" checked={checked} onChange={onChange}></input>{title} - {date.toLocaleDateString()} </li> 
//       </>
  
//     )
//     }

//     else{
//         return (
//           <>
//               <li color="green">
//                 <input type="checkbox" checked={checked} onChange={onChange}></input>{title} - {date.toLocaleDateString()} </li> 
//           </>
      
//         )
//         }

  
//   }
  
//   export default ToDo
  