import React, { Component } from 'react';

class BairList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bair: '2-р байр'
    };
  }

  handleBairChange = (value) => {
    this.setState({ bair: value });
  };

  render() {
    return (
      <div>
        <button id="bair-button">
          <span>Хичээлийн байр</span>
          <span className="light-grey" id="bair-info">{this.state.bair}</span>
        </button>
        <ul className="bair-list" id="bair-list">
          {/* Render your single bair components here */}
          {/* <SingleBair bairId="1" /> */}
          {/* <SingleBair bairId="2" /> */}
          {/* <SingleBair bairId="4" /> */}
          {/* <SingleBair bairId="5" /> */}
          {/* <SingleBair bairId="7" /> */}
          {/* <SingleBair bairId="8" /> */}
          {/* <SingleBair bairId="9" /> */}
          {/* <SingleBair bairId="10" /> */}
        </ul>
      </div>
    );
  }
}

export default BairList;
