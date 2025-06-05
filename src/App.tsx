import React from 'react'
import './App.css'
import Router from "./router/Router.tsx";
import {BrowserRouter} from "react-router-dom";
import styled, {ThemeProvider} from "styled-components";
import SidebarComponent from "./component/sidebar/SidebarComponent.tsx";
import {ProSidebarProvider} from "react-pro-sidebar";
import {theme} from './styles/theme'

function App() {

  return (
      <>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Wrapper>
              <ProSidebarProvider>
                <SidebarComponent/>
              </ProSidebarProvider>
              {/*<MainContent>*/}
              <Router/>
              {/*</MainContent>*/}
            </Wrapper>
          </BrowserRouter>
        </ThemeProvider>
      </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export default App
