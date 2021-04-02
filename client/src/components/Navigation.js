import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const activeClassName = 'nav-item-active'

const StyledLink = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    color: red;
  }
`;
const Navigation = () => {
    return (
      <div>
  <ul>
    <li>
      <StyledLink exact to="/">Registration Form</StyledLink>
    </li>
    <li>
      <StyledLink to="/admin">Registered User Report</StyledLink>
    </li>
  </ul>
  </div>
    );
}
 
export default Navigation;