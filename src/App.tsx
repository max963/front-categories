import { BrowserRouter } from "react-router-dom";
import { PublicRoutes } from "./routes";
import { ToastProvider } from "./contexts/toast";
import Menu from "./components/Menu";
import { ChakraProvider } from "@chakra-ui/react";

function App() {

  return (
    <>
    <ChakraProvider>
      <ToastProvider>
        <BrowserRouter>
          <Menu>
            <PublicRoutes />
          </Menu>
        </BrowserRouter>
      </ToastProvider>
    </ChakraProvider>
    </>
  )
}

export default App
