import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import App from "./App.tsx";
import { Provider } from "./provider.tsx";
import MainLayout from "./layouts/MainLayout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <NextThemesProvider {...{ attribute: "class", defaultTheme: "" }}>
          <MainLayout>
            <App />
          </MainLayout>
        </NextThemesProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
