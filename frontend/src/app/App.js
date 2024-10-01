import React from "react";
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { ConfigProvider } from "antd";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import { createGlobalStyle } from 'styled-components';
import Root from "../pages/Root";
import { selectIsLoggedIn } from "../features/session/sessionSlice";
import { useSelector } from "react-redux";
import Home from "../pages/Home";
import { tokens } from "../styles/main";
import Events from "../pages/Events";
import Store from "../pages/Store";



const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    background-color:${tokens.bodyBg};
  }
  

  #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    
    font-family: "Nunito";
    font-size: 1em;
    overflow: auto;
    color:${tokens.colorText} !important; 
    
  }

`;



function App() {

  const loggedIn = useSelector(selectIsLoggedIn);
  const router = createBrowserRouter(createRoutesFromElements(

    <Route>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="events/" element={<Events />} />
        <Route path="store/" element={<Store />} />
      </Route>
     
      <Route path="/register/" element={<Registration />} />
      <Route path="/login/" element={ <Login />} />
     
    </Route >

  ))
  return (<>
    <GlobalStyle />
    <ConfigProvider theme={{
      token: tokens,
    }}> <RouterProvider router={router}></RouterProvider></ConfigProvider>

  </>
  );
}

export default App;