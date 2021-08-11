import {createStore} from "redux"
import UsersReduce from "../Reducer/UsersReduce";


const Stores = createStore(UsersReduce) 
   


export default Stores;
