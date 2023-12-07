
import { Box, Typography, styled } from "@mui/material";
import {LocationOn , SettingsBrightness, Opacity, Brightness5, Brightness6, Dehaze, Cloud} from "@mui/icons-material";

const Row=styled(Typography)({
    padding:10,
    fontSize:20,
    letterSpacing:2,
    '& > svg':{
        marginRight:10
    }
});
 const Er=styled(Typography)({
    color:'red',
    margin:50,
    padding:20
 })
const  Informations =({result})=>{
    return(
         result && Object.keys(result).length > 0 ?
         <Box style={{margin: '30px 60px'}}>
           <Row>
           <LocationOn/> Location:
           {result.name} {result.sys.country }</Row>
           <Row>
            <SettingsBrightness />Temperature:
            {result.main.temp}°C 
           </Row>
           <Row>
             <Opacity /> Humidity:
             {result.main.humidity}
           </Row>
           <Row> 
           <Brightness5/>Sun rise:
           {new Date(result.sys.sunrise*1000).toLocaleTimeString()}
            </Row>
            <Row>
                <Brightness6 /> Sun set:
                {new Date(result.sys.sunset*1000).toLocaleTimeString()}
            </Row>
            <Row>
                <Dehaze/>Humidity:
                {result.weather[0].main}
            </Row>
            <Row>
                <Cloud/>
                clouds:
                {result.clouds.all}%
            </Row>
         </Box>
         : <Er>please enter the values</Er>
    )
}
 

export default Informations;