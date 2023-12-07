import {Box,  Button,  InputBase, styled } from "@mui/material";
import { useState } from "react";
import { getWeather } from "../services/Api";
const Container=styled(Box)({
    background:'#445A6F',
    padding:'10'
})

const Input =styled(InputBase)({
    color:'white',
    marginRight:26,
    marginLeft:10,
    fontSize: 18
})

const GetButton=styled(Button)({
    background:'#e67e22'
})
 
const Form =({setResult})=>{
    const [data, setdata]=useState({
        city:"",
        country:""
    })

    
  const hendelchange=(e)=>{
    // console.log(e.target.value);
    setdata({  ...data, [e.target.name]: e.target.value });
}

   const getweatherinfo= async ()=>{
   let response = await getWeather(data.city, data.country);
    //   return result;
    setResult(response);
   }
    return(
        <>
           <Container>
            <Input  placeholder="city"
                onChange={(e)=>{
                    hendelchange(e)
                }}
                name="city"
            /> 
            <Input placeholder="country"
                onChange={(e)=>{
                    hendelchange(e)
                }}
                name="country"
            /> 
             <GetButton    variant="contained" onClick={()=>
                  getweatherinfo()
             }> Get weather</GetButton>
           </Container>
        </>
    )
}

export default Form;