import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      players:[]
    }
  }
  async componentDidMount(){
    const url = "https://www.balldontlie.io/api/v1/players?search=lebron"
    let result = null;
    try{
      result = await axios(url, {
        headers:{
          Accept: "application/json"
        }
      })
    }catch(e){
      console.log(e)
    }
    this.setState({players: result.data.data})
  }

  render(){
    const {players} = this.state;
    console.log({players})
    let mappedArray = (players).map((players) =>{
      return(
        <li>{players.first_name} {players.last_name} {players.weight_pounds}</li>
      )
    })
  return (
    <div className="App"> 
    <ul>
      {mappedArray}
    </ul>
    </div>
  );
}
}

export default App;
