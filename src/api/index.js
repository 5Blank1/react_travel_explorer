import axios from "axios";
import {type} from "@testing-library/user-event/dist/type";






export const getPlacesData = async (type, sw, ne) => {
    try{
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,  {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'X-RapidAPI-Key': 'f7fb5d61a4msh1cf324045886477p116443jsnd9eb6690aa0b',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });

        return data;
    }
    catch (error){
        console.log(error)
    }
}