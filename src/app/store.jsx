import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/Todo/todoSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// const customSerialize = (state) => {
//   const serializedState = { ...state };
//   delete serializedState.persist;
//   return serializedState;
// };

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["register", "rehydrate"],
};
const persistedReducer = persistReducer(persistConfig, todoReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
