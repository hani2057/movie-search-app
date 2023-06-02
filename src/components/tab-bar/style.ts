import { NavLink } from "react-router-dom";
import styled from "styled-components";

const TabBarWrapper = styled.div`
  width: 100%;
  height: 4rem;
  position: fixed;
  bottom: 0;
  background-color: var(--main-color);
  border-radius: 25px 25px 0 0;
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30%;
`;

const Tab = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const TabNavLink = styled(NavLink)`
  & div {
    display: none;
  }

  &.active svg {
    stroke: #000000;
    stroke-width: 3px;
    color: #000000;
  }
  &.active div {
    display: block;
  }
`;

const ActiveBar = styled.div`
  width: 3rem;
  height: 0.3rem;
  background-color: #000000;
  position: absolute;
  top: 0;
  left: calc(50% - 1.5rem);
  border-radius: 0 0 0.3rem 0.3rem;
`;

export { TabBarWrapper, Tab, TabNavLink, ActiveBar };
