import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import LoadingButton from '@mui/lab/LoadingButton';


const url = "http://localhost:5000/vendors/"

const StorePage = () => {
    let { id } = useParams();
    const [vendorsInfo, setVendorsInfo] = useState({})

    const loadVendorsPage = ()=>{
        fetch(url+id)
        .then(function(response){
            console.log(response)
            setVendorsInfo(response.content)
        })
        .catch(function (error){
            setVendorsInfo({error:error})
        })
    };

    loadVendorsPage()

    if(vendorsInfo == {})
        return <h1>A CARREGAR...</h1>
    else if(vendorsInfo.hasOwnProperty('error'))
        return <h1>{vendorsInfo.error}</h1>
    else return (
        <div>
            <Breadcrumbs aria-label="breadcrumb">
                <Link
                underline="hover"
                color="inherit"
                to="/"
                >
                Comerciantes
                </Link>
                <Typography color="text.primary">{vendorsInfo.name}</Typography>
            </Breadcrumbs>
            <div>
                <h3>{vendorsInfo.name}</h3>
                <h3>{vendorsInfo.typeOfEntity}</h3>
                <h3>{vendorsInfo.district},{vendorsInfo.local}</h3>
                <h3>{vendorsInfo.categories}</h3>
                <h3>Inscrito desde {vendorsInfo.dateOfRegistry}</h3>
                <h3>{vendorsInfo.description}</h3>
                <h3>{vendorsInfo.rating}</h3>
            </div>
        </div>
    )
}

export default StorePage;