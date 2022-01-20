import React from "react";
import "../CSS/HomePage.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import { Link } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import Chip from "@material-ui/core/Chip";
import Spinner from "./Spinner";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      vendors: [],
    };
  }

  componentDidMount = async () => {
    const requestOptions = {
      method: "GET",
    };

    fetch("http://localhost:5000/vendors", requestOptions)
      .then((res) => res.clone().text())
      .then((res) =>
        this.setState((prevState) => ({
          isLoading: !prevState.isLoading,
          vendors: JSON.parse(res).content,
        }))
      );
  };

  render() {
    return (
      <div id="HomePage">
        <div id="Carousel">
          <Carousel
            styles={{ height: "4rem" }}
            ullHeightHover={false} // We want the nav buttons wrapper to only be as big as the button element is
            navButtonsProps={{
              // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
              style: {
                backgroundColor: "darkgrey",
                borderRadius: 0,
              },
            }}
            navButtonsWrapperProps={{
              // Move the buttons to the bottom. Unsetting top here to override default style.
              style: {
                bottom: "0",
                top: "unset",
              },
            }}
            NextIcon=">" // Change the "inside" of the next button to "next"
            PrevIcon="<" // Change the "inside of the prev button to "prev"
          >
            <div id="Banner">
              <img src="bolhao.jpg" alt="bolhao" />
              <div id="BannerText">
                <h2>Ajuda os que te são mais próximos</h2>
                <h3>sem intermediários</h3>
                <h3>
                  Compra no mercado dos agricultores às{" "}
                  <b>terças, quintas e sábados das 8h às 13h</b>.
                </h3>
              </div>
            </div>
            <div id="Banner">
              <div id="BannerText" style={{ width: "100%" }}>
                <h2 id="CotM-title">Associação do mês</h2>
                <div id="CotM">
                  <h1>APAA - Associação de Apoio aos Agricultores</h1>
                  <h2>
                    Visita <Link to={"https://apav.pt/"}>apaa.pt</Link> para
                    mais informações sobre o seu trabalho.
                  </h2>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
        <h2>Lojas na tua localidade</h2>
        <div id="Stores">
          {this.state.isLoading ? (
            <Spinner customText="Loading..."/>
          ) : (
            this.state.vendors.map((value, index) => (
              <>
                <Card className="indItem" sx={{ maxWidth: 345 }}>
                  <Link style={{ textDecoration: "none" }} to={`/vendors/${value._id}`}>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://picsum.photos/200"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        style={{ color: "rgb(21, 172, 91)" }}
                        component="div"
                      >
                        {value.name}
                      </Typography>
                      <Rating name="read-only" value={value.rating} readOnly />
                      <div className="labels">
                        {value.categories.map((value) => (
                          <Chip label={value} variant="outlined" />
                        ))}
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </>
            ))
          )}
        </div>
      </div>
    );
  }
}

export default HomePage;
