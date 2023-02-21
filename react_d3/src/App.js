import logo from './logo.svg';
import './App.css';
function Header(props){
  return <header>
    <h1><a href="/">{props.title}</a> </h1>
  </header>
}
function Nav(props){
  const lis = []
  for(let i=0; i<props.topics.length;i++){
    let t = props.topics[i]
    lis.push(<li>{t.title}</li>)
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}
function App() {
  const topics = [
    {id:1, title:"html", body:"html is ..."},
    {id:2, title:"css", body:"css is ..."},
    {id:3, title:"javasctip", body:"javasctip is ..."},

  ]
  return (
    <div className="App">
      <Header title="REACT"></Header>
      <Nav topics={topics}></Nav>
      Hello React!
    </div>
  );
}

export default App;
