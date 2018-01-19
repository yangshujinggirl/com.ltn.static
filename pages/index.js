import styled from 'styled-components';
import Page from '../components/page';
const a = '20px';
const StyledDiv = styled.div`
  font-size: ${a};
  color: red;
   a {
     text-decoration: none;
   }
   li {
     margin-bottom: 20px;
   }
`;

export default ()=>(
  <Page>
    <StyledDiv>
      {assetPrefix}
      <ul>
        <li>
          <a href="protocol/loan">借款协议</a>
        </li>
        <li>
          <a href="protocol/credit">债权转让协议</a>
        </li>
        <li>
          <a href="protocol/tyb">体验标投资协议</a>
        </li>
        <li>
          <a href="protocol/viporder">预约投资服务协议</a>
        </li>
        <li>
          <a href="protocol/ztproduct">智投产品协议</a>
        </li>
        <li>
          <a href="protocol/lcjhproduct">理财计划产品协议</a>
        </li>
      </ul>
    </StyledDiv>
  </Page>
)
