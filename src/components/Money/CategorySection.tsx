import styled from 'styled-components';

const CategorySection = styled.section`
>ul{
display: flex;
background:#c4c4c4;
font-size: 24px;
  >li{
    width: 50%;
    text-align:center;
    padding:18px 0;
    position: relative;
    &.selected:after{
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 4px;
      width: 100%;
      background: #333;
    }
  }
}
`
export {CategorySection}