import {createStore} from "redux";
import UsersReduce from "../Reducer/UsersReduce";

const Store = (createStore)(UsersReduce)
 

export default Store;
