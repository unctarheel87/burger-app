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
    this.deleteBurger = this.deleteBurger.bind(this)
  }

  componentDidMount() {
    this.getApiData()
  }

  getApiData() {
    axios.get('/api/burgers')
    .then((res) => {
      this.setState({apiData: res.data});
    })
    .catch((error) => {
      console.log(error);
    });
  }  

  addBurger(e) {
    e.preventDefault()
    const newBurger = e.target.elements.burger.value
    axios.post('/api/burgers', { data: newBurger })
    .then((res) => {
      console.log(res)
      this.getApiData()
    })
  }

  updateBurger(e, burger_id) {
    e.preventDefault()
    axios.put(`/api/burgers/${burger_id}`)
    .then((res) => {
      console.log(res)
      this.getApiData()
    })
  }

  deleteBurger(e, burger_id) {
    e.preventDefault()
    axios.delete(`/api/burgers/${burger_id}`)
    .then((res) => {
      console.log(res)
      this.getApiData()
    })
  }

  render() {
    return (
      <div>
        <Burgers burgers={this.state.apiData} 
                 updateBurger={this.updateBurger}
                 deleteBurger={this.deleteBurger}
        />
        <form className="new-burger" onSubmit={this.addBurger}>
          <input type="text" name="burger"/>
          <button className="waves-effect waves-light btn red lighten-2 burger-submit-btn" 
                  type="submit"
          >Create Burger</button>
        </form>
      </div>
    );
  }
}