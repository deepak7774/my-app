// import {createStore} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './rootReducer';
import productSaga from './productSaga'
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/lib/persistStore';
import persistReducer from 'redux-persist/lib/persistReducer';

const persistConfig ={
    key: 'persist-store',
    storage
}
const persistedReducer = persistReducer(persistConfig,rootReducer)
// const store = createStore(rootReducer);
const sagaMiddleware = createSagaMiddleware();
const store  = configureStore({
    reducer:persistedReducer,
    middleware:()=>[sagaMiddleware]
});

sagaMiddleware.run(productSaga);
export  const persistor = persistStore(store)
export default store;