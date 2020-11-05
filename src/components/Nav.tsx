import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';

const NavWrapper = styled.div`
box-shadow: 0 0 3px rgba(0,0,0,0.25);
  > ul {
      display: flex;
      
    > li{
        flex-grow: 1;
        padding:16px;
        height: 56px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
  }
`
const Nav=()=>{
  return(
    <NavWrapper>
      <ul>
        <li>
          <Link to="/tags">标签</Link>
        </li>
        <li>
          <Link to="/money">记账</Link>
        </li>
        <li>
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}
export  default Nav;