//  here it is returning the output bye performing func on state

export const cartItemCount = (state) => {
  return state.cart.length
}

export const cartTotalPrice = (state) => {
  let total = 0;

  state.cart.forEach((item) => {
    total += item.product.price * item.quantity;
  })

  return total;
}