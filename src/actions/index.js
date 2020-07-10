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

export const restockBag = (bagToRestock) => {
  const {name, roast, flavor, price, capacity, id} = bagToRestock
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

export const lowerStock = (bagToLowerStock) => {
  const {name, roast, flavor, price, capacity, stock, id} = bagToLowerStock
  console.log(bagToLowerStock.stock);
  return {
    type: 'LOWER_STOCK',
    name: name,
    roast: roast,
    flavor: flavor,
    price: price,
    capacity: capacity,
    stock: Math.round((stock - 0.36) * 100) / 100,
    id: id
  }
}