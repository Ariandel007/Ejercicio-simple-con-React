import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state={
    palabra: ''
  };

  newNameHandler=(event)=>{
    const newPalabra=event.target.value;
    this.setState({
      palabra:newPalabra
    });
  }

  deleteCharacterHandler=(charIndex)=>{
    const lessCharacter=[...this.state.palabra];
    lessCharacter.splice(charIndex,1);
    const newWord=lessCharacter.join(''); 
    this.setState({palabra:newWord});
  }

  render() {

    const style={
        width: '60%',
        margin: '16px auto',
        border: '1px solid #eee',
        boxShadow: '0 2px 3px #ccc',
        padding: '16px',
        textAlign: 'center'
    };

    let advice=null;

    if(this.state.palabra.length<5)
    {
      advice=( 
         <ValidationComponent>
            La palabra es muy pequeña
         </ValidationComponent>);
    }

    if(this.state.palabra.length>10)
    {
      advice=(
         <ValidationComponent>
            La palabra es muy grande
         </ValidationComponent>);
    }

    return (
      <div style={style}>
       <input type="text" onChange={(event)=>{this.newNameHandler(event)}} value={this.state.palabra}></input>
        {advice}
        <div>
          {this.state.palabra.split("").map((character, index)=>{
            return (<CharComponent
              char={character}
              click={()=>{this.deleteCharacterHandler(index)}}
            />);
          })}
        </div>
      </div>
      
      
    );
  }
}

export default App;