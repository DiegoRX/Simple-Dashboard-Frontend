import React, { Component } from 'react';
import RequestService from '../../../config';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

//   this.setState({
//     [name]: value
//   });
// }

  handleSubmit(event) {
    alert(`An essay was submitted: ${this.state.value}`);
    event.preventDefault();
  }

//   const body = {

//   }

  const newRegime = async () => {
    const { data } = await RequestService.put('/regime', body);
    console.log({ data });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          nombre:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default Form;
