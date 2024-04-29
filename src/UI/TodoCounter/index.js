import React from 'react';
import './TodoCounter.css';

function TodoCounter ({ totalTodos, completedTodos, loading }) {
    
    return (
        <div className='container'>
        <h1 className='title'>Lista de compras</h1>
        <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>Haz comprado {completedTodos} de  {totalTodos} elementos</h2>

        </div>
        
    );
      

    
}

export { TodoCounter };