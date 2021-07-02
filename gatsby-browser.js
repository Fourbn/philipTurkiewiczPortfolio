import React from "react";
import Layout from "./src/Components/Layout";

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
