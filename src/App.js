import React, { Component } from 'react';
import Userform from './components/Userform'
import './App.css';
import axios from 'axios';



class App extends Component {
  state ={
    users: [],
    isLoading: true,
  }

  
  getUser = (e) =>{
  e.preventDefault();
  const user = e.target.elements.username.value;
  axios.get(`https://api.github.com/search/users?q=${user}+in:login`)
    .then((res) => {
        const repos = res.data.items;
        console.log(repos);
        this.setState ({
        repos
        })
    })
  .catch((error)=>{
    console.log(error)
      });
}



  render() {
    return (
      <div className="App">
      <Userform getUser = {this.getUser}/>
                {this.stateisLoading ? <div> Loading</div> : this.state.repos.map((users)=>{
                        return (
                          <div key={users.login}>
                          <ul>
                            <li>{users.login}</li>
                          </ul>
                          </div>
                          )
                    })}
      </div>
    );
  }
}

export default App;
