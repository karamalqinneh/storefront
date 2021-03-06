import { useState, useEffect } from "react";

import { connect } from "react-redux";
import { CircularProgress } from "@chakra-ui/react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

import { addItem } from "../../store/cart";
import {
  removeFromStock,
  getRemoteData,
  getAction,
} from "../../store/products";

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    props.get();
  }, []);
  useEffect(() => {
    setIsLoading(true);
    if (props.category == "all") {
      let response = props.products;
      setProducts(response.slice(0, 6));
    } else {
      let response = props.products.filter((ele) => {
        return ele.category === props.category;
      });
      setProducts(response);
    }
    setIsLoading(false);
  }, [props.products, props.category]);
  let showProducts = products.map((ele) => {
    return (
      <Card sx={{ width: 200, maxHeight: 250, marginLeft: 2 }} key={ele.id}>
        <CardMedia component="img" height="90" image={ele.image} />
        <CardContent sx={{ padding: 0.2 }}>
          <h4>{ele.title.slice(0, 20)}</h4>
        </CardContent>
        <CardActions>
          {ele.stock == 0 ? (
            <p>Out of Stock</p>
          ) : (
            <Button
              size="small"
              onClick={() => {
                props.add(ele);
                props.removeStock(ele);
              }}
            >
              Add to Cart
            </Button>
          )}
          <Button size="small">{ele.stock}</Button>
        </CardActions>
      </Card>
    );
  });
  return (
    <div
      style={{
        width: "80vw",
        height: "89vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {isLoading ? (
        <CircularProgress isIndeterminate={true} color="red" />
      ) : (
        showProducts
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  add: (item) => {
    dispatch(addItem(item));
  },
  removeStock: (item) => {
    dispatch(removeFromStock(item));
  },
  get: () => {
    dispatch(getRemoteData());
  },
  getAction: () => {
    dispatch(getAction());
  },
});

const mapStateToProps = (state) => ({
  category: state.category,
  products: state.products,
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
