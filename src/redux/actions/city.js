import { ADD_CITY } from "../constant";

//create an action for adding a city
export const addCity = ( city ) => {
    return {
        type: ADD_CITY,
        data: city
    }
}