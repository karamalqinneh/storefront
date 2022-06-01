import { useState, useEffect } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";

import styledC from "styled-components";
import { connect } from "react-redux";

import cartImage from "../../assets/cart.jpg";
import Cart from "../cart/simplecart";

const Img = styledC.img`
  width: 2rem;
  height: 2rem;
`;
const Circle = styledC.div`
  width: 1.5rem;
  height: 1.5rem;
  font-size:0.75rem;
  border-radius: 50%;
  background-color: #d11e1e;
  color: #fefefe;
  display:flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
`;

function Header(props) {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(props.cart.count);
  }, [props.cart.count]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Storefront
            </Typography>
            <div onClick={handleShow}>
              <Img src={cartImage} />
              <Circle>{count}</Circle>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <Cart show={show} hide={handleClose} />
    </>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Header);
