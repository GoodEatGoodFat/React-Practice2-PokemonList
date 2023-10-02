import React from "react";
import axios from "axios";
import "./App.css";
import Pagination from "./components/Pagination";
import Posts from "./components/Posts";
import SetPerPage from "./components/SetPerPage";
import Lists from "./components/lists/list-component";
// import Input from "./components/input/input-component";

const App = () => {
  // const [filteredPokemons, setFilteredPokemons] = React.useState([]);

  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  //当前页面的数值也是一个state
  // const [currentPage, setCurrentPage] = React.useState(1);
  // const [postsPerPage, setPostsPerPage] = React.useState(10); // offset
  const [pokemonMax, setPokemonMax] = React.useState(0);
  const [pokemonLength, setPokemonLength] = React.useState(0);
  const [pokemons, setPokemons] = React.useState([]);
  const [pokemonsPerPage, setPokemonsPerPage] = React.useState(20);
  const [offSet, setOffSet] = React.useState(0); // offset

  const fetchData = async (url) => {
    const res = await axios.get(url);
    // console.log(res)
    return res.data.results;
  };

  React.useEffect(() => {
    const urlMax = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`;

    const fetchDataAndMax = async () => {
      try {
        const resMax = await fetchData(urlMax);
        // console.log("res",resMax)
        setPokemonLength(resMax.length);
        // const pokemonOnPage = resMax.slice(offSet, pokemonsPerPage)
        // console.log("pokemonOnPage",pokemonOnPage)
        setPokemonMax(resMax);
        const pokemonOnPage = resMax.slice(offSet, pokemonsPerPage)
        setPokemons(pokemonOnPage);
        setLoading(false);
      } catch (error) {
        console.error("error: ", error);
      }
    };
    fetchDataAndMax();
  }, []);

  // console.log(pokemons)
  if (loading) {
    return <div>Loading...</div>;
  }
  // console.log(pokemons);

  const paginate = async (pageNumber) => {
    // setLoading(true);
    // setCurrentPage(pageNumber);
    const newOffSet = (pageNumber - 1) * pokemonsPerPage;

    const pokemonOnPage = pokemonMax.slice(newOffSet, newOffSet+pokemonsPerPage)
    setOffSet(newOffSet);
    setPokemons(pokemonOnPage);
    console.log(pokemonOnPage[0].url);
    // setLoading(false);
  };

  const setPerPage = (pageNumber) => {
    const pokemonOnPage = pokemonMax.slice(offSet, offSet+pageNumber)
    setPokemons(pokemonOnPage);
    setPokemonsPerPage(pageNumber);
  };

  return (
    <div className="App">
      {/* <Posts posts={currentPagePosts} />*/}
      <Pagination
        pokemonsPerPage={pokemonsPerPage}
        totalPokemons={pokemonLength}
        paginate={paginate}
      />
      <SetPerPage setPerPage={setPerPage} />
      <Lists pokemons={pokemons} />
      {/* <h1>baokemeng</h1> */}
      {/* 
      <Input onChangeHandler={onChangeHandler} />
      <Lists pokemonsLists={filteredPokemons} /> */}
    </div>
  );
};

export default App;

/**
 * 1. pagination -> ... 
 *    keep +-5
 *    allow input ->
 * 
 * 2. allow search
 *    
 * 3. allow click -> see detail of a pokemon
 * 
 * 4. list toggle state for details / simple list
 *    same css, different content classname
 */