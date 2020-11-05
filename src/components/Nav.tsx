import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './Icom';

const NavWrapper = styled.div`
box-shadow: 0 0 3px rgba(0,0,0,0.25);
  > ul {
      display: flex;
    > li{
        width:33.3333%;
        text-align: center;
       
        .icon{
        width:24px;
        height: 24px;
        }
        > a{
        padding:4px;
         display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        }
    }
  }
`;
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>

          <Link to="/tags">
            <Icon name='tags'/>
            标签
          </Link>
        </li>
        <li>
          <Link to="/money"> <Icon name='money'/>记账</Link>
        </li>
        <li>

          <Link to="/statistics"><Icon name='statistics'/>统计</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};
export default Nav;