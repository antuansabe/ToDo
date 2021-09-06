import React  from 'react';

function TodoSearch({ search, setSearch }) {


    
    
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearch(event.target.value);
    };



    return (
       
        <input 
        className="input__counter"
        placeholder="Buscar Tareas"
        value={search}
        onChange={onSearchValueChange}
        />
        
    
    );
}

export { TodoSearch } ;