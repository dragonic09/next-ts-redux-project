import createSagaMiddleware from '@redux-saga/core'
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user/user-slice'
import rootSaga from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
      user: userReducer,
    },
    middleware: [sagaMiddleware],
  }
)

sagaMiddleware.run(rootSaga);