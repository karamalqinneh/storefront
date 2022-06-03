import data from "../data";

let initialState = data;

// basically this is our reducer
const productsReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "add":
      let newState = data.map((ele) => {
        if (payload.id == ele.id) {
          ele.stock -= 1;
        }
        return ele;
      });

      return newState;
    case "remove":
      let removeState = data.map((ele) => {
        if (payload.id == ele.id) {
          ele.stock += 1;
        }
        return ele;
      });

      return removeState;
    case "edit":
      let editState = data.map((ele) => {
        if (payload.id == ele.id) {
          ele.stock += 1;
        }
        return ele;
      });
      return editState;
    default:
      return state;
  }
};

export const removeFromStock = (item) => {
  return {
    type: "add",
    payload: item,
  };
};
export const addToStock = (item) => {
  return {
    type: "remove",
    payload: item,
  };
};

export const increaseStock = (item) => {
  return {
    type: "edit",
    payload: item,
  };
};

export default productsReducer;
