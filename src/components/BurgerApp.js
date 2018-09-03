import React, {Component} from 'react';
import axios from 'axios';
import { Burgers } from './Burgers'

export default class Burger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: []
    }
    this.addBurger = this.addBurger.bind(this)
    this.updateBurger = this.updateBurger.bind(this)
  }

  addBurger(e) {
    e.preventDefault()
    const newBurger = e.target.elements.burger.value
    axios.post('/api/burgers/new', { data: newBurger })
    .then((res) => {
      console.log(res)
    })
  }

  updateBurger(e, burger_id) {
    e.preventDefault()
    axios.post('/api/burgers', { data: burger_id })
    .then((res) => {
      console.log(res)
    })
  }
  
  componentDidMount() {
    axios.get('/api/burgers')
    .then((res) => {
      this.setState({apiData: res.data});
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <h1>
          < Burgers burgers={this.state.apiData} updateBurger={this.updateBurger}/>
        </h1>
        <form onSubmit={this.addBurger}>
          <input type="text" name="burger"/>
          <button type="submit">Create Burger</button>
        </form>
      </div>
    );
  }
}