let initialState = { category: "all" };

// basically this is our reducer
const categoriesReducer = (state = initialState, action) => {
  let { type } = action;
  let category;

  switch (type) {
    case "electronics":
      category = "electronics";
      return category;
    case "all":
      category = "all";
      return category;
    case "jewelery":
      category = "jewelery";
      return category;
    case "men's clothing":
      category = "men%27s%20clothing";
      return category;
    case "women's clothing":
      category = "women%27s%20clothing";
      return category;

    default:
      category = "electronics";
      return category;
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
