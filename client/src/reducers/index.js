import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import currentUserReducer from "./current_user_reducer";
import propertyDataReducer from "./property_data_reducer";

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  propData: propertyDataReducer,
  form: formReducer
});

export default rootReducer;