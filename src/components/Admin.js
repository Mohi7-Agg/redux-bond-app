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

      <div class="accordion" id="accordionExample">
        <div class="card">
            <div class="card-header " id="headingOne">
               
                    <button type="button" class="btn btn-link" data-toggle="collapse" data-target="#collapseOne">Generate Genesis Block</button> 
            </div>
            <div id="collapseOne" class="collapse container" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="form-group row">
                    <label className="col-form-label col-sm-3">Base Price</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control col-sm-6" id="publicKey" readonly  value="-100"/>
                    </div>                  
                </div>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary" onClick={this.props.onClickPlace}>Generate</button>
                  </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header " id="headingTwo">
               
                    <button type="button" class="btn btn-link" data-toggle="collapse" data-target="#collapseTwo">Update Base Price (UpTick\DownTick)</button> 
            </div>
            <div id="collapseTwo" class="collapse container" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div class="form-group row">
                    <label className="col-form-label col-sm-3">New Base Price</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control col-sm-6" id="publicKey" readonly  value="-100"/>
                    </div>                  
                </div>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary" onClick={this.props.onClickPlace}>Update</button>
                  </div>
                </div>
            </div>
        </div>   

         <div class="card">
            <div class="card-header " id="headingThree">
               
                    <button type="button" class="btn btn-link" data-toggle="collapse" data-target="#collapseThree">Destroy Chain</button> 
            </div>
            <div id="collapseThree" class="collapse container" aria-labelledby="headingThree" data-parent="#accordionExample">
                
                <div className="form-group row">
                  <div className="col-sm-10">
                    <button type="submit" className="btn btn-danger" onClick={this.props.onClickPlace}>Destroy</button>
                  </div>
                </div>
            </div>
        </div>        
     

        </div>
      </div>
    );
  }
}

//export default Home;
export default connect(mapStateToProps, mapDispatchToProps)(Home);
