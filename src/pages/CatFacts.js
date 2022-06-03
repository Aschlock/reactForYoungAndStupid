import React from 'react';
import ReactDOM from 'react-dom';


class CatFacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      catFacts: [],
      factsLenth: 0,
      btnText: ('Получить факт'),
    };

    this.clack = this.clack.bind(this);
    this.renderFacts = this.renderFacts.bind(this);
  }

  componentDidMount() {
    let timer = setInterval(() => {this.setState({date: new Date()})}, 1000);
  }

  clack() {
    let spinnerElement = (<div className="spinner-border spinner-border-sm mx-3" role="status"><span className="visually-hidden">Loading...</span></div>);
    this.setState({btnText: spinnerElement})
    fetch('https://cat-fact.herokuapp.com/facts/random')
    .then(res => res.json())
    .then(arr => {
      let catFacts = this.state.catFacts;
      catFacts.push(arr);
      this.setState({...this.state, catFacts: catFacts, factsLenth: this.state.factsLenth + 1});
      this.setState({btnText: 'Получить факт'});
    })
  }

  renderFacts() {
    let factsArray = this.state.catFacts;
    return factsArray.map((fact, i) => <div className="cat-fact" key={i}>{fact.text}</div>);
  }

  render() {
    return (
      <>
        <div className="container-lg">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-xs-12">
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h3>Время фактов, {this.props.name}</h3>
                    <div>{this.state.date.toLocaleString()}</div>
                  </div>
                  <div className="mb-4">
                    <span className="badge bg-secondary mx-2 align-bottom fw-normal">Количество: {this.state.factsLenth}</span>
                    <span className="badge bg-primary mx-2 align-bottom fw-normal">Факты о кошках</span>
                    <span className="badge bg-danger mx-2 align-bottom fw-normal">Сомнительные</span>
                  </div>
                  <button className="btn btn-primary mb-1 text-white" style={{width: '150px'}} onClick={this.clack}>{this.state.btnText}</button>
                  {this.renderFacts()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CatFacts;
