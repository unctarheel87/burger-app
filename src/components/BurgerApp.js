import React, {Component} from 'react';
import axios from 'axios';
import { Burgers } from './Burgers'

export default class Burger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: []
    }
    this.postData = this.postData.bind(this)
  }

  postData(e) {
    e.preventDefault()
    const newBurger = e.target.elements.burger.value
    axios.post('/api', {data: newBurger})
    .then((res) => {
      console.log(res)
    })
  }
  
  componentDidMount() {
    axios.get('/api')
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
          < Burgers burgers={this.state.apiData} />
        </h1>
        <form onSubmit={this.postData}>
          <input type="text" name="burger"/>
          <button type="submit">Create Burger</button>
        </form>
      </div>
    );
  }
}