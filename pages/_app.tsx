import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import userReducer from "../components/reducers/reducers";

const store = createStore(userReducer);

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </React.Fragment>
  );
}

export default MyApp;
