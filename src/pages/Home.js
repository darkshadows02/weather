import {Box, styled} from "@mui/material";
import Sunset from "../assets/images/bg.jpg";
import Form from "../components/Form";
import Informations from "../components/Informations";
import { useState } from "react";


const Component=styled(Box)({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    width: '65%',
    margin: '0 auto'
})

const Image=styled(Box)({
    backgroundImage: `url(${Sunset})`,
    width: '27%',
    height: '80%',
    backgroundSize: "cover",
   borderRadius:'20px 0 0 20px',
})
 
const Home=()=>{

       const [result, setResult]=useState({});


    return(
        <>
           <Component> 
           <Image></Image>
           <Box style={{width:'73%', height:'80%'}}> 
           
           <Form setResult={setResult} />
           <Informations result={result} />
           </Box>
           </Component>
        </>
    )
}

export default Home;