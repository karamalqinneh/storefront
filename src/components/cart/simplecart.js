import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import styled from "styled-components";

import { removeItem } from "../../store/cart";

const Item = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Circle = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  font-size: 0.75rem;
  border-radius: 50%;
  background-color: grey;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
`;

const Cart = (props) => {
  let items = props.cart.items.map((ele) => {
    return (
      <Item>
        <p>{ele.title}</p>
        <Circle
          onClick={() => {
            props.remove(ele);
          }}
        >
          X
        </Circle>
      </Item>
    );
  });
  return (
    <Modal show={props.show} onHide={props.hide} centered={true} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>{items}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.hide}>
          Close
        </Button>
        <Button variant="primary">Checkout</Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapDispatchToProps = (dispatch) => ({
  remove: (item) => {
    dispatch(removeItem(item));
  },
});

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
