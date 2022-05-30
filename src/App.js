import styled from "styled-components";

import "./App.css";
import Header from "./components/header/header";
import SideBar from "./components/storefront/categories";
import { Provider } from "react-redux";
import store from "./store/index";
import Products from "./components/storefront/products";
const Section = styled.section`
  display: flex;
  justify-content: flex-start;
  width: 100vw;
`;

const StyledSideBar = styled(SideBar)`
  grid-area: 1 / 1 / 2 / 2;
`;

const StyledProducts = styled(Products)`
  grid-area: 1 / 2 / 2 / 3;
`;

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Section>
        <StyledSideBar />
        <StyledProducts />
      </Section>
    </Provider>
  );
}

export default App;
