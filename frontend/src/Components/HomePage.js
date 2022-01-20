import React from "react";
import "../CSS/HomePage.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import {Link} from 'react-router-dom';
import Carousel from 'react-material-ui-carousel'
import { green } from "@material-ui/core/colors";

const HomePage = () => {
  return (
    <div id="HomePage">
        <div id="Carousel">
            <Carousel styles={{height: "4rem"}}
                ullHeightHover={false}     // We want the nav buttons wrapper to only be as big as the button element is
                navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                    style: {
                        backgroundColor: 'darkgrey',
                        borderRadius: 0
                    }
                }} 
                navButtonsWrapperProps={{   // Move the buttons to the bottom. Unsetting top here to override default style.
                    style: {
                        bottom: '0',
                        top: 'unset'
                    }
                }} 
                NextIcon='>'             // Change the "inside" of the next button to "next"
                PrevIcon='<'             // Change the "inside of the prev button to "prev"
            >
                <div id="Banner">
                    <img src="bolhao.jpg" alt="bolhao" />
                    <div id="BannerText">
                        <h2>Ajuda os que te são mais próximos</h2>
                        <h3>sem intermediários</h3>
                        <h3>Compra no mercado dos agricultores às <b>terças, quintas e sábados das 8h às 13h</b>.</h3>
                    </div>
                </div>
                <div id="Banner">
                    <div id="BannerText" style={{width:"100%"}}>
                        <h2 id="CotM-title">Associação do mês</h2>
                        <div id="CotM">
                            <h1>APAA - Associação de Apoio aos Agricultores</h1>
                            <h2>Visita <Link to={"https://apav.pt/"}>apaa.pt</Link> para mais informações sobre o seu trabalho.</h2>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
        <h2>Lojas na tua localidade</h2>
        <div id="Stores">
            <Card className='indItem' sx={{ maxWidth: 345 }}>
                <Link to='/stores'>
                <CardMedia
                    component="img"
                    height="140"
                    image="logo.png"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over
                    6,000 species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                </Link>
            </Card>

            <Card className='indItem' sx={{ maxWidth: 345 }}>
                <Link to='/stores'>
                <CardMedia
                    component="img"
                    height="140"
                    image="logo.png"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over
                    6,000 species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                </Link>
            </Card>

            <Card className='indItem' sx={{ maxWidth: 345 }}>
                <Link to='/stores'>
                <CardMedia
                    component="img"
                    height="140"
                    image="logo.png"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over
                    6,000 species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                </Link>
            </Card>

            <Card className='indItem' sx={{ maxWidth: 345 }}>
                <Link to='/stores'>
                <CardMedia
                    component="img"
                    height="140"
                    image="logo.png"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over
                    6,000 species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                </Link>
            </Card>
        </div>
    </div>
  );
};

export default HomePage;
