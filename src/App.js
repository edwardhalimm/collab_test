import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import Form from "./components/Form";
import Recipes from "./components/Recipes";

const API_KEY = "c1d6ebdfab337a5f6d26dd1abbb4ad09";
const API_ID = "512e40ea";

class App extends Component {
  
  state = {
    hits: []
  }
  getRecipe =  async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch
    (`https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?app_id=${API_ID}&app_key=${API_KEY}&q=${recipeName}&from=0&to=6`);

    const data = await api_call.json();
    this.setState({ hits: data.hits });
    console.log(this.state.hits);
  }
  componentDidMount = () =>{
    const json = localStorage.getItem("hits");
    const hits = JSON.parse(json);
    this.setState({ hits: hits });
  }
  componentDidUpdate = () => {
    const hits = JSON.stringify(this.state.hits);
    localStorage.setItem("hits", hits);
  }
  render() {
    return (
      <div className="app">
        <header className="App-header">
          <h1 className="App-title">Recipe Generator</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        <Recipes hits={this.state.hits}/>        
      </div>
      
    );
  }
}

export default App;
