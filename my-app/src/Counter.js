import React, { useEffect } from "react";

function Counter(props){

  const [count, setCount] = React.useState(0);
  const [meuEstado, setMeuEstado] = React.useState("Qualquer coisa");

  useEffect(() => {
    document.title = `Você clicou ${count} vezes`;
    localStorage.setItem("count", count);
    })

  function add(){
    setCount(count + 1);
    console.log('atualizar');
    console.log(meuEstado);
    
  }

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={add}>Add</button>
    </div>
  )
}

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {count: 0};
//     this.add = this.add.bind(this);
//   }

//   add() {
//     // this.setState({count: this.state.count + 1});
//     this.setState((state) => {return {count: state.count + 1}});
//     localStorage.setItem('state', JSON.stringify(this.state));
//   }

//   // shouldComponentUpdate() {return false}
//   componentDidMount() { this.setState(JSON.parse(localStorage.getItem('state'))); }
//   render() {
//     return (
//       <div>
//         <h1>Contador: {this.state.count}</h1>
//         <button onClick={this.add}>Add</button>
//       </div>
//     );
//   }
// }

export default Counter;
