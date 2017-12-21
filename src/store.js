import { compose, applyMiddleware, createStore } from "redux"
import { AsyncStorage } from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist'
import { createLogger } from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducers"

const middleware = applyMiddleware(promise(), thunk)

// export default createStore(reducer, middleware)

const store = createStore(
  reducer,
  compose(
    applyMiddleware(
      thunk
    ),
    autoRehydrate()
  )
);

persistStore(store, { storage: AsyncStorage });

export default store;
