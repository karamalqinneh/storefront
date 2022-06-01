let initialState = "all";

// basically this is our reducer
const categoriesReducer = (state = initialState, action) => {
  let { type } = action;

  switch (type) {
    case "electronics":
      state = "electronics";
      return state;
    case "all":
      state = "all";
      return state;
    case "jewelery":
      state = "jewelery";
      return state;
    case "men's clothing":
      state = "men's clothing";
      return state;
    case "women's clothing":
      state = "women's clothing";
      return state;
    default:
      return state;
  }
};

export const toggleAll = () => {
  return {
    type: "all",
  };
};
export const toggleElectronics = () => {
  return {
    type: "electronics",
  };
};
export const toggleJewelery = () => {
  return {
    type: "jewelery",
  };
};
export const toggleMen = () => {
  return {
    type: "men's clothing",
  };
};
export const toggleWomen = () => {
  return {
    type: "women's clothing",
  };
};

export default categoriesReducer;
