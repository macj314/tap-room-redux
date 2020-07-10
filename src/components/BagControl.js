import React from 'react';
import NewBagForm from './NewBagForm';
import BagList from './BagList';
import BagDetail from './BagDetail';
import EditBagForm from './EditBagForm';

class BagControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterBagList: [],
      selectedBag: null
    };
  }

  handleClick = () => {
    if (this.state.selectedBag != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBag: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleChangingSelectedBag = (id) => {
    const selectedBag = this.state.masterBagList.filter(bag => bag.id === id)[0];
    this.setState({selectedBag: selectedBag});
  }

  handleDeletingBag = (id) => {
    const newMasterBagList = this.state.masterBagList.filter(bag => bag.id !== id);
    this.setState({
      masterBagList: newMasterBagList,
      selectedBag: null,
      editing: false
    });
  }

  handleAddingNewBagToList = (newBag) => {
    const newMasterBagList = this.state.masterBagList.concat(newBag);
    this.setState({
      masterBagList: newMasterBagList,
      formVisibleOnPage: false
    });
  }

  handleBrewCoffee = (id) => {
    const selectedBag = this.state.masterBagList.filter(bag => bag.id === id)[0];
    if (selectedBag.stock >= 0.36){
      selectedBag.stock = Math.round((selectedBag.stock - 0.36) * 100) / 100;
      const updatedList = this.state.masterBagList.filter(bag => bag.id !== this.state.selectedBag.id).concat(selectedBag);
      this.setState({
        masterBagList : updatedList
      });
    } 
  }

  handleRestockBag = (id) => {
    const selectedBag = this.state.masterBagList.filter(bag => bag.id === id)[0];
    if (selectedBag.stock < 12){
      selectedBag.stock = 12;
      const updatedList = this.state.masterBagList.filter(bag => bag.id !== this.state.selectedBag.id).concat(selectedBag);
      this.setState({
        masterBagList : updatedList
      });
    } 
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    if (this.state.editing ) {      
      currentlyVisibleState = <EditBagForm bag = {this.state.selectedBag} />
      buttonText = "Return to Bag List";
    } 
    else if (this.state.selectedBag != null) {
      currentlyVisibleState = 
      <BagDetail
        bag = {this.state.selectedBag} 

        onClickingDelete = {this.handleDeletingBag} 
        onClickingBrewCoffee = {this.handleBrewCoffee} 
        onClickingRestock = {this.handleRestockBag}/>
        buttonText = "Return to Bag List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBagForm onNewBagCreation={this.handleAddingNewBagToList}  />;
      buttonText = "Return to Bag List";
    } else {
      currentlyVisibleState = <BagList bagList={this.state.masterBagList} onBagSelection={this.handleChangingSelectedBag} />;
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

export default BagControl;