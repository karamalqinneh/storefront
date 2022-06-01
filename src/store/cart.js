let initialState = { items: [], count: 0 };

// basically this is our reducer
const addReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "add":
      state.items.push(payload);
      state.count += 1;
      return state;
    case "remove":
      let filtered = state.items.filter((ele) => ele.id !== payload.id);
      let count = (state.count -= 1);
      return {
        items: filtered,
        count,
      };
    default:
      return state;
  }
};

export const addItem = (item) => {
  return {
    type: "add",
    payload: item,
  };
};
export const removeItem = (item) => {
  return {
    type: "remove",
    payload: item,
  };
};

export default addReducer;
