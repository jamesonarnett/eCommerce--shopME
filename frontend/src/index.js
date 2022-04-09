import React from "react";
import ReactDOM from "react-dom";
import "./bootstrap.min.css";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// function AppWithCallbackAfterRender() {
//   useEffect(() => {
//     console.log('rendered');
//   });

//   return <App tab="home" />
// }

// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(<AppWithCallbackAfterRender />);

//what the fuck is this overly verbose bullshit? react 18????
