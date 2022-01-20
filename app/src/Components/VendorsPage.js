import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Modal, Typography, Box } from "@material-ui/core";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Rating from "@material-ui/lab/Rating";
import Chip from "@material-ui/core/Chip";
import Link from "@mui/material/Link";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "../CSS/VendorsPage.css";
import Button from "@mui/material/Button";
import IconButton from "@material-ui/core/IconButton";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
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

const url = "http://localhost:5000/vendors/";

const VendorsPage = (props) => {
  let { id } = useParams();
  const [vendorsInfo, setVendorsInfo] = useState({ status: "start" });
  const [products, setProducts] = useState({ status: "start" });
  const [isOpen, setOpen] = useState(false);

  const load = async () => {
    const requestOptions = {
      method: "GET",
    };

    fetch(`${url}${id}`, requestOptions)
      .then((res) => res.clone().text())
      .then((res) =>
        setVendorsInfo({
          status: "success",
          content: JSON.parse(res).content,
        })
      )
      .catch((error) => {
        setVendorsInfo({
          status: "error",
          content: error,
        });
      });

    fetch(`${url}${id}/products`, requestOptions)
      .then((res) => res.clone().text())
      .then((res) =>
        setProducts({
          status: "success",
          content: JSON.parse(res).content,
        })
      )
      .catch((error) => {
        setProducts({
          status: "error",
          content: error,
        });
      });
  };

  if (vendorsInfo.status === "start") {
    setVendorsInfo({ status: "pending" });
    setProducts({ status: "pending" });
    load();
  }

  if (vendorsInfo.status === "pending" || vendorsInfo.status === "start")
    return <h1>A CARREGAR...</h1>;
  else if (vendorsInfo.status === "pending")
    return <h1>{vendorsInfo.content.error}</h1>;
  else
    return (
      <div id="content">
        <Breadcrumbs id="breadcrumb" aria-label="breadcrumb">
          <Link fontSize={24} underline="hover" color="inherit" href="/">
            Comerciantes
          </Link>
          <Typography fontSize={24} color="text.primary">
            {vendorsInfo.content.name}
          </Typography>
        </Breadcrumbs>
        <div id="vendorInfo">
          <div>
            <img src="https://picsum.photos/200" alt="display image" />
            <div>
              <h2>{vendorsInfo.content.name}</h2>
              <h3 className="details">
                Local: {vendorsInfo.content.district},
                {vendorsInfo.content.local}
              </h3>
              <h3 className="details">
                Inscrito desde{" "}
                {vendorsInfo.content.dateOfRegistry.split("T")[0]}
              </h3>
              <Rating
                name="read-only"
                value={vendorsInfo.content.rating}
                readOnly
              />
              <div className="labels">
                {vendorsInfo.content.categories.map((value) => (
                  <Chip label={value} variant="outlined" />
                ))}
              </div>
            </div>
          </div>
          <h3>{vendorsInfo.content.description}</h3>
        </div>
        <div id="productsSection">
          <div id="shoppingSection">
            <h2>Produtos</h2>
            <IconButton
              onClick={() => {
                setOpen(true);
              }}
              aria-label="show 11 new notifications"
              color="inherit"
            >
              <Badge badgeContent={props.total} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </div>
          <Modal
            open={isOpen}
            onClose={() => {
              setOpen(false);
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Your Shopping Cart
              </Typography>
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              {props.total > 0 ? (
                props.cartItems.map((value) => (
                    <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={value.id} secondary={`Qtd: x${value.quantity}`} />
      </ListItem>
                ))
              ) : (
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  There are no items in your cart... GET TO SHOPPING BITCH
                </Typography>
              )}
              </List>
            </Box>
          </Modal>
          <div id="productsList">
            {products.status === "pending" ? (
              <h1>hey</h1>
            ) : (
              products.content.map((prod, index) => (
                <div className="product">
                  <div>
                    <p>{prod.name}</p>
                    <p>{prod.description}</p>
                    <p>Quant: {prod.unit}</p>
                    <p>Preço: {prod.pricePerUnit}€</p>
                    <div className="labels">
                      {prod.productCategories.map((value) => (
                        <Chip label={value} variant="outlined" />
                      ))}
                    </div>
                  </div>
                  <div>
                    <Button
                      variant="outlined"
                      onClick={() => {
                        props.addToCart(prod.name);
                      }}
                    >
                      Adicionar ao carrinho
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => {
                        props.addToCart(prod._id);
                      }}
                    >Adicionar para doar</Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(VendorsPage);
