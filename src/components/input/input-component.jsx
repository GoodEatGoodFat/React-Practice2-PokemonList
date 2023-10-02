// class Input extends React.Component {
//   render() {
//     const  = this.props;
//   }
// }

const Input = ({ onChangeHandler }) => {
  return <input type="search" onChange={onChangeHandler} />;
};

export default Input