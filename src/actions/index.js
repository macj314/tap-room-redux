export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const deleteBag = id => ({
  type: 'DELETE_BAG',
  id
});

export const addBag = (bag) => {
  const {name, roast, flavor, price, id} = bag
  return {
    type: 'ADD_BAG',
    name: name,
    roast: roast,
    flavor: flavor,
    price: price,
    id: id
  }
}