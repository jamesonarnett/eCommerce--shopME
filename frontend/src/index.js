import React from "react";
import ReactDOM from "react-dom/client";
import "./bootstrap.min.css";
import "./index.css";
import App from "./App";

// function AppWithCallbackAfterRender() {
//   useEffect(() => {
//     console.log('rendered');
//   });

//   return <App tab="home" />
// }

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
