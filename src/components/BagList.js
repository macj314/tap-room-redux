import React from "react";
import Bag from "./Bag";
import PropTypes from "prop-types";

function BagList(props){
  return (
    <React.Fragment>
      <h2>Mocha Jay's Cafe'</h2>
      <h3>Our slogan is! We make coffee...</h3>
      {Object.values(props.bagList).map((bag) => {
        return <Bag
          whenBagClicked = { props.onBagSelection }
          name={bag.name}
          roast={bag.roast}
          price={bag.price}
          capacity={bag.capacity}
          stock={bag.stock}
          id={bag.id}
          key={bag.id}
        />
      })}
    </React.Fragment>
  );
}

BagList.propTypes = {
  bagList: PropTypes.object,
  onBagSelection: PropTypes.func
};

export default BagList;