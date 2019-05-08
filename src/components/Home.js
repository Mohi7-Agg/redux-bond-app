import Banner from './Banner';
import React from 'react';
import { connect } from 'react-redux';

//const Promise = global.Promise;

const mapStateToProps = state => ({
  ...state.home,
  appName: state.common.appName,
  currentPrice: state.common.currentPrice,
  totalLot: state.common.totalLot,
  token: state.common.token
});

const mapDispatchToProps = dispatch => ({  
   
});

class Home extends React.Component {
  constructor() {
    super();
   /* this.changeMinPrice = ev => this.props.onchangeMinPrice(ev.target.value);
    this.changeLotSize = ev => this.props.onchangeLotSize(ev.target.value);
    this.changeMaxPrice = ev => this.props.onchangeMaxPrice(ev.target.value);   */ 
  }

  render() {
    return (
      <div className="home-page">

        <Banner token={this.props.token} appName={this.props.appName} totalLot= {this.props.totalLot} currentPrice ={this.props.currentPrice} />

      </div>
    );
  }
}

//export default Home;
export default connect(mapStateToProps, mapDispatchToProps)(Home);
