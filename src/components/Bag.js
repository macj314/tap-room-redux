import React from "react";
import PropTypes from "prop-types";

function Bag(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenBagClicked(props.id)}>
        <h3>{props.name}</h3>
        <h4>{props.roast}</h4>
        <p><em>{props.flavors}</em></p>
        <h5>{props.price}</h5>
        <h5>{props.capacity}</h5>
        <h5>{props.stock}</h5>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Bag.propTypes = {
  name: PropTypes.string,
  roast: PropTypes.string,
  flavors: PropTypes.string,
  price: PropTypes.number,
  capacity: PropTypes.number,
  stock: PropTypes.number,
  id: PropTypes.number,
  whenBagClicked: PropTypes.func
};

export default Bag;