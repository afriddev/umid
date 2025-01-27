import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import App from "./App.tsx";
import { Provider } from "./provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <NextThemesProvider {...{ attribute: "class", defaultTheme: "" }}>
          <App />
        </NextThemesProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
