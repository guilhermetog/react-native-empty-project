//This is a reducer example

//Import Types
import {TYPE_EXAMPLE} from '../actions/types';


//Initial state of the reducer
const INITIAL_STATE = {
    //someData: someValue,
}


//Standard archtecture of a reducer
export default (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case TYPE_EXAMPLE:
            return{
                ...state,
                //state that will be changed
            }
        default:
            return state
    }
}