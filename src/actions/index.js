export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const deleteBag = id => ({
  type: 'DELETE_BAG',
  id
});

export const addBag = (bag) => {
  const {name, roast, flavor, price, capacity, stock, id} = bag
  return {
    type: 'ADD_BAG',
    name: name,
    roast: roast,
    flavor: flavor,
    price: price,
    capacity: capacity,
    stock: stock,
    id: id
  }
}

export const restockedBag = (bag) => {
  const {name, roast, flavor, price, capacity, id} = bag
  return {
    type: 'RESTOCK_BAG',
    name: name,
    roast: roast,
    flavor: flavor,
    price: price,
    capacity: capacity,
    stock: capacity,
    id: id
  }
}

export const lowerStock = (bag) => {
  const {name, roast, flavor, price, capacity, stock, id} = bag
  return {
    type: 'LOWER_STOCK',
    name: name,
    roast: roast,
    flavor: flavor,
    price: price,
    capacity: capacity,
    stock: stock - 0.36,
    id: id
  }
}