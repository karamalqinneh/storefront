import styled from "styled-components";
import { useRef, useState, useEffect } from "react";
import {
  toggleElectronics,
  toggleJewelery,
  toggleMen,
  toggleWomen,
  toggleAll,
} from "../../store/categories";
import { connect } from "react-redux";

const SideContainer = styled.div`
  width: 20vw;
  height: 100%;
  background-color: rgb(25, 118, 210);
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.2);
  color: #fefefa;
  min-height: 75vh;
`;

const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(25, 118, 210);
  height: 89.7vh;
`;

const TabName = styled.div`
  background-color: rgb(25, 118, 210);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.75rem;
  padding: 3rem 1.5rem;
  height: 25vh;
`;

const SubTabs = styled.div`
  background-color: rgb(25, 118, 210);
  width: 20vw;
  margin: 0 auto;
  font-size: 1.25rem;
  padding: 1rem 0rem;
  text-align: center;
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  &.active {
    background-color: rgb(9 75 175);
    border-left: 10px solid #fefefe;
  }
`;

const Footer = styled.footer`
  background-color: rgb(25, 118, 210);
  padding: 0.2rem;
  margin-top: auto;
`;

function SideBar(props) {
  const categories = [
    { tabName: "All", actionName: props.toggleAll },
    { tabName: "Electronics", actionName: props.toggleElectronics },
    { tabName: "Jewelery", actionName: props.toggleJewelery },
    { tabName: "Men's Clothing", actionName: props.toggleMen },
    { tabName: "Women's Clothing", actionName: props.toggleWomen },
  ];
  const navRef = useRef();
  const activeHandler = (e) => {
    const children = [].slice.call(navRef.current.children);
    children.forEach((ele) => ele.classList.remove("active"));
    e.target.classList.add("active");
  };

  let tabs = categories.map((ele, idx) => {
    if (idx == 0) {
      return (
        <SubTabs
          className={"active"}
          key={ele.tabName}
          onClick={() => {
            ele.actionName();
          }}
        >
          {ele.tabName}
        </SubTabs>
      );
    } else {
      return (
        <SubTabs
          key={ele.tabName}
          onClick={() => {
            ele.actionName();
          }}
        >
          {ele.tabName}
        </SubTabs>
      );
    }
  });
  return (
    <SideContainer className={props.className}>
      <TabsContainer ref={navRef} onClick={activeHandler}>
        {tabs}
        <TabName />
        <Footer>&copy; Karam Al-Qinneh</Footer>
      </TabsContainer>
    </SideContainer>
  );
}

const mapStateToProps = (state) => ({
  category: state.category,
});

const mapDispatchToProps = {
  toggleElectronics,
  toggleJewelery,
  toggleMen,
  toggleWomen,
  toggleAll,
};

// const mapDispatchToProps = dispatch => ({
//   increment: ()=> dispatch(increment()),
//   decrement: ()=> dispatch(decrement()),
// })

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
