import React from "react";
import PropTypes from "prop-types";

function Bag(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenBagClicked(props.id)}>
        <h3>Name: {props.name}</h3>
        <h4>Roast Type: {props.roast}</h4>
        <p>Flavors: <em>{props.flavor}</em></p>
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
  flavor: PropTypes.string,
  price: PropTypes.number,
  capacity: PropTypes.number,
  stock: PropTypes.number,
  id: PropTypes.number,
  whenBagClicked: PropTypes.func
};

export default Bag;