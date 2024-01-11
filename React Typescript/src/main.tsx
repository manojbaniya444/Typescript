import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./Todo/App.tsx";
// import App from "./Accordion/App.tsx";
// import App from "./Pagination/App.tsx";
// import App from "./Quiz/App.tsx";
import App from "./ReactQuery/App.tsx";
import "./index.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Theme>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Theme>
);
