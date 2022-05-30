import { useState, useEffect } from "react";

import { connect } from "react-redux";
import axios from "axios";
import { CircularProgress } from "@chakra-ui/react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

const mapStateToProps = (state) => ({
  category: state.category,
});

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      if (props.category == "all") {
        let response = await axios.get(
          `https://fakestoreapi.com/products?limit=5`
        );
        setProducts(response.data);
      } else {
        let response = await axios.get(
          `https://fakestoreapi.com/products/category/${props.category}`
        );
        setProducts(response.data);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [props.category]);
  let showProducts = products.map((ele) => {
    return (
      <Card sx={{ width: 200, maxHeight: 250, marginLeft: 2 }}>
        <CardMedia component="img" height="90" image={ele.image} />
        <CardContent sx={{ padding: 0.2 }}>
          <h4>{ele.title.slice(0, 20)}</h4>
        </CardContent>
        <CardActions>
          <Button size="small">Add to Cart</Button>
          <Button size="small">Learn More</Button>
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
export default connect(mapStateToProps)(Products);
