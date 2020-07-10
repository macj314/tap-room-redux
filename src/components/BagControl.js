import React from 'react';
import NewBagForm from './NewBagForm';
import BagList from './BagList';
import BagDetail from './BagDetail';
import EditBagForm from './EditBagForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from '../actions';

class BagControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedBag: null
    };
    const bag1 = a.addBag({ name: 'Jays Mocha', roast: 'light', flavor: 'Chocolate', price: 12.00, capacity: 12, stock: 12, id: 1 });
    const bag2 = a.addBag({       name: 'Beans in a Bag', roast: 'dark', flavor: 'fruity', price: 10, capacity: 18, stock: 18, id: 2 });
    const { dispatch } = this.props;
    dispatch(bag1);
    dispatch(bag2);
  }

  handleClick = () => {
    if (this.state.selectedBag != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBag: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleChangingSelectedBag = (id) => {
    const selectedBag = this.props.masterBagList[id];
    this.setState({ selectedBag: selectedBag });
  }

  handleDeletingBag = (id) => {
   const { dispatch } = this.props;
   const action = a.deleteBag(id);
   dispatch(action);
   this.setState({ selectedBag: null });
  }

  handleAddingNewBagToList = (newBag) => {
    const { dispatch } = this.props;
    const action = a.addBag(newBag);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  // handleBrewCoffee = (id) => {
  //   const selectedBag = this.state.masterBagList.filter(bag => bag.id === id)[0];
  //   if (selectedBag.stock >= 0.36){
  //     selectedBag.stock = Math.round((selectedBag.stock - 0.36) * 100) / 100;
  //     const updatedList = this.state.masterBagList.filter(bag => bag.id !== this.state.selectedBag.id).concat(selectedBag);
  //     this.setState({
  //       masterBagList : updatedList
  //     });
  //   } 
  // }

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

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    if (this.state.editing ) {      
      currentlyVisibleState = <EditBagForm bag = {this.state.selectedBag} />
      buttonText = "Return to Bag List";
    } else if (this.state.selectedBag != null) {
      currentlyVisibleState = 
      <BagDetail
        bag = {this.state.selectedBag} 
        onClickingDelete = {this.handleDeletingBag} 
        // onClickingBrewCoffee = {this.handleBrewCoffee} 
        // onClickingRestock = {this.handleRestockBag}
      />
      buttonText = "Return to Bag List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewBagForm onNewBagCreation={this.handleAddingNewBagToList}  />;
      buttonText = "Return to Bag List";
    } else {
      currentlyVisibleState = <BagList bagList={this.props.masterBagList} onBagSelection={this.handleChangingSelectedBag} />;
      buttonText = "Add Bag";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

BagControl.propTypes = {
  masterBagList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterBagList: state.masterBagList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

BagControl = connect(mapStateToProps)(BagControl);
export default BagControl;