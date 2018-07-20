import thunkMiddleware from "redux-thunk";
import { 
    createStore, 
    applyMiddleware 
} from "redux";
import RootReducer from "../reducers/rootReducer";

const store = createStore(
    RootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunkMiddleware.withExtraArgument())
);

export default store;