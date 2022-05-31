import React from 'react';
import ReactDOM from 'react-dom';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      catFacts: [],
      factsLenth: 0,
    };

    this.clack = this.clack.bind(this);
    this.renderFacts = this.renderFacts.bind(this);
  }

  componentDidMount() {
    let timer = setInterval(() => {this.setState({date: new Date()})}, 1000);
  }

  clack() {
    fetch('https://cat-fact.herokuapp.com/facts/random')
    .then(res => res.json())
    .then(arr => {
      let catFacts = this.state.catFacts;
      catFacts.push(arr);
      this.setState({...this.state, catFacts: catFacts, factsLenth: this.state.factsLenth + 1});
    })
  }

  renderFacts() {
    let factsArray = this.state.catFacts;
    return factsArray.map((fact, i) => <p class="cat-fact" key={i}>{fact.text}</p>);
  }

  render() {
    return (
      <>
        <h1>Привет, {this.props.name}</h1>
        <div>{this.state.factsLenth}</div>
        <div>{this.state.date.toLocaleString()}</div>
        <button className="btn btn-primary" onClick={this.clack}>123</button>
        {this.renderFacts()}
      </>
    );
  }
}

export default Welcome;
