import React from "react";
import Layout from "./layouts/Layout";
import AppRoutes from "./routes/Routes";
import "./styles/index.css";
import "./i18n";

export default function App() {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
}