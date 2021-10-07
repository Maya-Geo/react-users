import { createStore, compose, applyMiddleware, combineReducers} from "redux";
import UsersReduce from '../Reducer/UsersReduce';


import {getFirebase, reactReduxFirebase,firebaseReducer} from "react-redux-firebase";
import authReducer from "../Reducer/AuthReducer";
import {getFirestore, reduxFirestore} from "redux-firestore";
import thunk from "redux-thunk";
import firebase from "../Firebase/Config"
// import firestore from "../Firebase/Config";


let reducers = combineReducers({
    user: UsersReduce,
    firebase: firebaseReducer,
    auth: authReducer,
  });
  
  var Store = createStore(
    reducers,
    compose(
      applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
      reactReduxFirebase(firebase),
      reduxFirestore(firebase)
    )
  );

 

export default Store;



