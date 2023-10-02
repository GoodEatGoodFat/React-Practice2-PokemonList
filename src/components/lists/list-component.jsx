// class Lists extends React.Component {
//   render() {
//     console.log("Lists组件渲染");
//     console.log(this.props);
//
//     const imgCSS = {
//       border: "1px solid darkorange",
//       borderRadius: "10px",
//     };

//     return (
//       //如果有通过classname设定的格式，可以直接在tag内写入className

//     );
//   }
// }
import "./list-style.css"
const Lists = ({pokemons}) => {
  // console.log(props)
  const imgCSS = {
    border: "1px solid darkorange",
    borderRadius: "10px",
  };
  return (
    <ul className="ul-container">
      {pokemons.map((pokemon) => {
        const url = pokemon.url;
        const regex = /\/(\d+)\//;
        const match = url.match(regex);
        const index = match[1];

        return (
          <div key={index}>
            <li>{pokemon.name}</li>
            <a href={`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`}>

            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
              style={imgCSS}
              />
              </a>
          </div>
        );
      })}
    </ul>
  );
};

export default Lists;
