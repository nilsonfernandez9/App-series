import {useState} from 'react';

const Searchbar = () => {
    const [searchTerm, setsearchTerm] = useState ("");

    const onSearchHandler = (e) => {
        e.preventDefault();

        console.log ("Searching for term" + setsearchTerm);
    };

  return (
    <div className="searchbar">
        <form className="searchbar__form"/>
            <input type="text"
                placeholder="Barra de busqueda de series"
                value={searchTerm}
                onChange={(e)=> setsearchTerm(e.target.value)}
            />
            <button className="btn btn-block" onClick=
            {onSearchHandler}>
                Buscar
            </button>
        </form>
    </div>
  );
};

export default Searchbar