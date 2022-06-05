import { createStore, combineReducers, applyMiddleware } from "redux";

// This dependency enables the Redux Dev Tools in your Chrome Console.
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import categoriesReducer from "./categories";
import cartReducer from "./cart";
import productsReducer from "./products";

// Combine reducers isn't really necessary when you only have one reducer
// But ... it's nice to create these with a name (counter in this case) so that your
// components have easy access to them.
// And ... 99.99% of all Redux apps will have more than one reducer to 'combine'
let reducers = combineReducers({
  category: categoriesReducer,
  cart: cartReducer,
  products: productsReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();
