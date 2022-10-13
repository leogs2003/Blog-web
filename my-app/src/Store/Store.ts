import { createStore } from "redux";
import { tokensReducer } from '../servece/tokens/tokenReducer';

const store = createStore(tokensReducer)

export default store