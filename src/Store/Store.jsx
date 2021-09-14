import { createStore, compose, applyMiddleware} from "redux";
import UsersReduce from '../Reducer/UsersReduce';

import {getFirebase, reactReduxFirebase} from "react-redux-firebase";
import {getFirestore, reduxFirestore} from "redux-firestore";
import thunk from "redux-thunk";
import firebase from "../Firebase/Config"
import firestore from "../Firebase/Config";





const Store = createStore(UsersReduce, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(firebase),
    reduxFirestore(firestore)

))
 

export default Store;



