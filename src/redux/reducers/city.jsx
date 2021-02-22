import { ADD_CITY } from '../constant'
import { nanoid } from 'nanoid'

const initCities = [
    {
        id:nanoid(),
        name:"Ottawa",
        temperature: -199,
        weather:"snowy"
    },
    {
        id:nanoid(),
        name:"Toronto",
        temperature: -5,
        weather:"sunny"
    }
];

export default function cityReducer( preState = initCities, action){
    const {type,data} = action;
    console.log("type", type);
    console.log("data", data);
    if( type == ADD_CITY){
        // preState.push(data);
        console.log("preState", preState);
        return [data, ...preState];
    }

    return preState;
}