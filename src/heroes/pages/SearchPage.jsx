import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components/HeroCard"
import { getHeroesByName } from "../helpers/getHeroesByName";
import { ShowComponent } from "../components/ShowComponent";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q  = ''} = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const {searchText, onInputChange} = useForm({
    searchText: q
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    // if(searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`);
  }
  
  return (
    <>
      <h1>Busquedas</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Buscando</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input 
              type="text" 
              placeholder="Busca un heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button
              className="btn btn-outline-primary mt-1"
            >
              Buscar
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultados: </h4>
          <hr />

          <ShowComponent q={q} heroes={heroes}/>

          {
            heroes.map(heroe => (
              <HeroCard key={heroe.id} {...heroe}/>
            ))
          }

        </div>
      </div>
    </>
  )
}
