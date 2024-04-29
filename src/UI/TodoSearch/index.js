import React from 'react';
import './TodoSearch.css';
import { useLocation, useNavigate } from 'react-router-dom';

function TodoSearch({searchValue, setSearchValue, loading}) {
    let navigate = useNavigate();
    const location = useLocation();
  //esta es la funcion  de busqueda
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);//para actualizar
    navigate('?search=' + event.target.value);
  };
  let textSearchValue = searchValue;
  if(location.search && !loading){
    textSearchValue = location.search.replace('?search=', '');
    setTimeout(()=>setSearchValue(textSearchValue),50)

  }



  return [
    <input
      className="TodoSearch"
      placeholder="Que buscas en tu lista..."
      value={searchValue} // para cambiar la url del la busqueda
      onChange={onSearchValueChange} //para conectar la funcion con el evento 
      disabled={loading} // desabilita y no se puede escribir en el buscador hasta que cargue
    />,
    <p>{searchValue}</p>
  ];
}


export { TodoSearch };