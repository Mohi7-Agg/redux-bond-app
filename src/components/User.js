import Banner from './Banner';
import React from 'react';
import { connect } from 'react-redux';
import {
  PLACE_ORDER,
  UPDATE_FIELD_ORDER
} from '../constants/actionTypes';

//const Promise = global.Promise;

const mapStateToProps = state => ({
  ...state.home,
  appName: state.common.appName,
  currentPrice: state.common.currentPrice,
  token: state.common.token,
  totalLot: state.common.totalLot,
  lotSize: state.common.lotSize,
  minPrice: state.common.minPrice,
  maxPrice: state.common.maxPrice
});

const mapDispatchToProps = dispatch => ({
  
    onchangeMinPrice: (value) =>
    dispatch({ type: UPDATE_FIELD_ORDER, key: 'minPrice', value }),
    onchangeLotSize: (value) =>
    dispatch({ type: UPDATE_FIELD_ORDER, key: 'lotSize', value }),
    onchangeMaxPrice: (value) =>
    dispatch({ type: UPDATE_FIELD_ORDER, key: 'maxPrice', value }),
    onClickPlace: () =>
    dispatch({ type: PLACE_ORDER})
});

class Home extends React.Component {
  constructor() {
    super();
    this.changeMinPrice = ev => this.props.onchangeMinPrice(ev.target.value);
    this.changeLotSize = ev => this.props.onchangeLotSize(ev.target.value);
    this.changeMaxPrice = ev => this.props.onchangeMaxPrice(ev.target.value);    
  }
  componentWillMount() {
/*    const tab = this.props.token ? 'feed' : 'all';
    const articlesPromise = this.props.token ?
      agent.Articles.feed :
      agent.Articles.all;

    this.props.onLoad(tab, articlesPromise, Promise.all([agent.Tags.getAll(), articlesPromise()]));*/
  }

  componentWillUnmount() {
    //this.props.onUnload();
  }

  render() {
    return (
      <div className="home-page">

       <Banner token={this.props.token} appName={this.props.appName} totalLot= {this.props.totalLot} currentPrice ={this.props.currentPrice} />

        <div className="container page">
            <form>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Public Key</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="publicKey" readonly  value="09fehd9283y9823y98234984923-932828"/>
                  </div>
                </div>
                
                <div className="form-row row">
                  <div className="form-group col-md-4">
                    <label for="inputEmail4">Lot Size</label>
                    <input type="numeric" className="form-control" value ={this.props.lotSize} onChange={this.changeLotSize} placeholder="Lot size"/>
                  </div>
                  <div className="form-group col-md-4">
                    <label for="inputPassword4">Min Price</label>
                    <input type="numeric" className="form-control" value ={this.props.minPrice} onChange={this.changeMinPrice} placeholder="Min Price"/>
                  </div>
                  <div className="form-group col-md-4">
                    <label for="inputPassword4">Max Price</label>
                    <input type="numeric" className="form-control"  value ={this.props.maxPrice}onChange={this.changeMaxPrice} placeholder="Max Price"/>
                  </div>
                </div>
                
                <div className="form-group row">
                  <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary" onClick={this.props.onClickPlace}>Place Order</button>
                  </div>
                </div>
              </form>
          
        </div>

      </div>
    );
  }
}

//export default Home;
export default connect(mapStateToProps, mapDispatchToProps)(Home);
