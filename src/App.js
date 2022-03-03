import './App.css';
import { CardList } from './components/card-list/card-list.componet';
import { SearchBox } from './components/search-box/search-box.componet';
import { Component } from 'react';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchFiled: ''

    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=> this.setState({monsters: users}));
  }

  handleChange = (e) => {
     this.setState({searchFiled: e.target.value})
  }

  render(){

    const{ monsters, searchFiled} = this.state;

    const searchMonsters = monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchFiled.toLowerCase())
      );
   
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
        placeholder='Search Monsters'
        handleChange={this.handleChange}
        />
        <CardList monsters={searchMonsters} />
      </div>
    );
  }
}


export default App;
