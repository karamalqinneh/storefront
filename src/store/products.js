import axios from "axios";

let initialState = [];

// basically this is our reducer
const productsReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "GET":
      return payload;
    case "add":
      let addState = state.map((ele) => {
        if (payload.id === ele.id) {
          ele.stock -= 1;
        }
        return ele;
      });
      return addState;
    case "remove":
      let removeState = state.map((ele) => {
        if (payload.id == ele.id) {
          ele.stock += 1;
        }
        return ele;
      });

      return removeState;
    // case "edit":
    //   let editState = data.map((ele) => {
    //     if (payload.id == ele.id) {
    //       ele.stock += 1;
    //     }
    //     return ele;
    //   });
    //   return editState;
    default:
      return state;
  }
};

export const removeFromStockAction = (payload) => {
  return {
    type: "add",
    payload: payload,
  };
};

export const removeFromStock = (item) => (dispatch, state) => {
  let body = {
    action: "ADD",
  };

  return axios
    .put(
      `https://storefront-api-server.herokuapp.com/update-item/${item.id}`,
      body
    )
    .then((result) => {
      dispatch(removeFromStockAction(result.data));
    });
};

export const removeFromCartAction = (payload) => {
  return {
    type: "remove",
    payload: payload,
  };
};

export const removeFromCart = (item) => (dispatch, state) => {
  let body = {
    action: "REM",
  };

  return axios
    .put(
      `https://storefront-api-server.herokuapp.com/update-item/${item.id}`,
      body
    )
    .then((result) => {
      dispatch(removeFromCartAction(result.data));
    });
};

export const addToStock = (item) => {
  return {
    type: "remove",
    payload: item,
  };
};

export const getAction = (payload) => {
  return {
    type: "GET",
    payload: payload,
  };
};

export const getRemoteData = () => (dispatch, state) => {
  return axios
    .get("https://storefront-api-server.herokuapp.com/items")
    .then((result) => {
      dispatch(getAction(result.data));
    });
};

export default productsReducer;
