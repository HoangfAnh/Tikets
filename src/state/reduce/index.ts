import { combineReducers, createStore } from "redux";
import { bookingReduce } from "./bookingReduce";
//store
const reducers = combineReducers({
    booking: bookingReduce,
})

export default reducers;

export type State = ReturnType<typeof reducers>;