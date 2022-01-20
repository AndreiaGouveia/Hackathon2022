import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import React from "react";
import { Modal, Typography, Box } from "@material-ui/core";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

class Checkout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  handleClick = (id) => {
    this.props.addToCart(id);
  };

  render() {
    console.log(this.props.cartItems);

    return (
      <>
        <IconButton
          onClick={() => {
            this.setState({ isOpen: true });
          }}
          aria-label="show 11 new notifications"
          color="inherit"
        >
          <Badge badgeContent={this.props.total} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <Button
          variant="contained"
          onClick={() => {
            this.handleClick(1);
          }}
        >
          1
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            this.handleClick(2);
          }}
        >
          2
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            this.handleClick(3);
          }}
        >
          3
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            this.handleClick(4);
          }}
        >
          4
        </Button>
        <Modal
          open={this.state.isOpen}
          onClose={() => {
            this.setState({ isOpen: false });
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Your Shopping Cart
            </Typography>
            {this.props.total>0 ? (
              this.props.cartItems.map((value) => (
                <div className="product">
                  <h3>id: {value.id}</h3>
                  <h3>x{value.quantity}</h3>
                </div>
              ))
            ) : (
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                There are no items in your cart... GET TO SHOPPING BITCH
              </Typography>
            )}
          </Box>
        </Modal>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
    total: state.total_items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
