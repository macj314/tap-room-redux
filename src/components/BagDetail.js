import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import * as a from '../actions';

function BagDetail(props){
  const { bag, onClickingDelete, onClickingLowerStock, onClickingRestock} = props;

  function handleLowerStock() {
    const { dispatch } = this.props;
    const action = a.lowerStock(props.bag);
    dispatch(action);
  }

    // handleRestockBag = (id) => {
  //   const selectedBag = this.state.masterBagList.filter(bag => bag.id === id)[0];
  //   if (selectedBag.stock < 12){
  //     selectedBag.stock = 12;
  //     const updatedList = this.state.masterBagList.filter(bag => bag.id !== this.state.selectedBag.id).concat(selectedBag);
  //     this.setState({
  //       masterBagList : updatedList
  //     });
  //   } 
  // }

  return (
    <React.Fragment>
      <h1>Coffee Bag Details</h1>
      <h3>Name: {bag.name}</h3>
      <h3>Roast: {bag.roast}</h3>
      <h3>Flavor: {bag.flavor}</h3>
      <h4>Price: ${bag.price}</h4>
      <h4>Size: {bag.capacity}oz bag</h4>
      <h4>Beans Remaining: {bag.stock}oz</h4>
      <p>Note: our brewing standard is: 0.36oz/6oz of coffee grounds/water</p>
      <button onClick={}>Brew A Cup of Coffee</button>
      {/* <button onClick={()=> onClickingRestock(bag.id) }>Restock Beans</button> */}
      <button onClick={()=> onClickingDelete(bag.id) }>Remove this bag from list</button>
      <hr/>
    </React.Fragment>
  );
}

BagDetail.propTypes = {
  bag: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingLowerStock: PropTypes.func,
  onClickingRestock: PropTypes.func
};

const mapStateToProps = state => {
  return {
    masterBagList: state.masterBagList
  }
}

BagDetail = connect(mapStateToProps)(BagDetail);
export default BagDetail;