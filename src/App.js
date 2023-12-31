// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import ComponentA from "./ComponentA";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>React-Redux Simple App</h1>
        <ComponentA />
      </div>
    </Provider>
  );
}

export default App;
