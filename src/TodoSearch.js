import React,  { useState} from 'react';

function TodoSearch() {


    const [search, setSearch] = useState('')
    
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearch(event.target.value);
    };



    return (
    <>    
        <input 
        className="input__counter"
        placeholder="Buscar Tareas"
        value={search}
        onChange={onSearchValueChange}
        />
        
        <p>{ search }  </p>
    
    </>
        );
}

export { TodoSearch } ;