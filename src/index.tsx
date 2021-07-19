import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react"


import App from "./app"

const darkTheme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark"
  }
});


ReactDOM.render(
    <ChakraProvider theme={darkTheme}>
        <App />
    </ChakraProvider>,
    document.getElementById("root")
);

