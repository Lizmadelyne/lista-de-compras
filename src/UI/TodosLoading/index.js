import React from "react";
import './TodosLoading.css';

function TodosLoading(){
    return <div className="LoadingTodo-container">
<span className="LoadingTodo-CompleteIcon"></span>
   <p className="LoadingTodo-text">Cargando elementos a la lista...</p>
   <span className="LoadingTodo-deleteIcon">X</span>
    </div>
    
}

 export {TodosLoading };