import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Rating from "@material-ui/lab/Rating";
import Chip from "@material-ui/core/Chip";
import Link from '@mui/material/Link';
import '../CSS/VendorsPage.css'
import Button from '@mui/material/Button';


const url = "http://localhost:5000/vendors/"

const VendorsPage = () => {
    let { id } = useParams();
    const [vendorsInfo, setVendorsInfo] = useState({status: "start"})
    const [products, setProducts] = useState({status: "start"})

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
        .catch((error)=>{
        setVendorsInfo({
            status: "error",
            content: error,
        })
        })

        fetch(`${url}${id}/products`, requestOptions)
        .then((res) => res.clone().text())
        .then((res) =>
        setProducts({
            status: "success",
            content: JSON.parse(res).content,
        })
        )
        .catch((error)=>{
        setProducts({
            status: "error",
            content: error,
        })
        })
    }
    

    if(vendorsInfo.status === "start"){
        setVendorsInfo({status: "pending"})
        setProducts({status: "pending"})
        load()
    }

    if(vendorsInfo.status === "pending" || vendorsInfo.status === "start")
        return <h1>A CARREGAR...</h1>
    else if(vendorsInfo.status === "pending")
        return <h1>{vendorsInfo.content.error}</h1>
    else return (
        <div id="content">
            <Breadcrumbs id="breadcrumb" aria-label="breadcrumb">
                <Link 
                fontSize={24}
                underline="hover"
                color="inherit"
                href="/"
                >
                Comerciantes
                </Link>
                <Typography fontSize={24} color="text.primary">{vendorsInfo.content.name}</Typography>
            </Breadcrumbs>
            <div id="vendorInfo">
                <div>
                    <img src="https://picsum.photos/200" alt="display image" />
                    <div>
                        <h2>{vendorsInfo.content.name}</h2>
                        <h3 classname="details">Local: {vendorsInfo.content.district},{vendorsInfo.content.local}</h3>
                        <h3 classname="details">Inscrito desde {vendorsInfo.content.dateOfRegistry.split('T')[0]}</h3>
                        <Rating name="read-only" value={vendorsInfo.content.rating} readOnly />
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
                <h2>Produtos</h2>
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
                                    <Button variant="outlined">Adicionar ao carrinho</Button>
                                    <Button variant="outlined">Adicionar para doar</Button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default VendorsPage;