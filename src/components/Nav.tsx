import styled from 'styled-components';
import { NavLink} from 'react-router-dom';
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
        width:18px;
        height: 18px;
        fill:#18a0fb
        }
        > a{
        padding:4px;
         display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color:#18a0fb;
        &.selected{
        color: #ff8a8e;
        .icon{
        fill:#ff8a8e;
        }
        }
        }
    }
  }
`;
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName='selected'>
            <Icon name='tags'/>
            标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/money"  activeClassName='selected'>
            <Icon name='money'/>
            记一笔
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName='selected'>
            <Icon name='statistics'/>
            统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};
export default Nav;