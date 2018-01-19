import styled from 'styled-components';
import Page from '../../components/page';

const WrapDiv = styled.div`
  background: #f3f5f8;
  text-align: center;
  font-size: 16px;
  color: #333;
  p {
    line-height: 150%;
    margin: 0;
  }
  .banner {
    height: 900px;
    background: url('${assetPrefix}/static/images/bank/banner.jpg') center;
    position: relative;
    .ornament0 {
      position: absolute;
      bottom: -146px;
      left:146px;
    }
  }
  .part-same {
    padding: 95px 0 100px;
    .inner-con {
      padding-top: 60px;
    }
  }
  .part-one {
    .txt-one {
      padding:42px 0;
      font-size: 24px;
    }
  }
  .part-two {
    background: #fff;
    position: relative;
    .ornament1 {
      position: absolute;
      right: 0;
      top:-64px;
    }
  }
  .part-four {
    background: #fff;
    text-align: center;
    .con-list {
      width: 1200px;
      margin: 0 auto;
      font-size: 0;
      padding-top: 24px;
    }
    .item {
      width: 33%;
      display: inline-block;
      font-size: 16px;
      text-align: center;
      .item-wrap {
        display: inline-block;
        text-align: center;
      }
      .lable {
        font-size: 24px;
        margin-bottom: 10px;
      }
      &:first-child {
        text-align: left;
      }
      &:last-child {
        text-align: right;
      }
    }
  }
  .footer {
    background-color: #323232;
    text-align: center;
    font-size: 12px;
    color: #999;
    padding: 24px 0;
    img {
      margin-bottom: 15px;
    }
  }
`;

const Pc = ()=>(
  <Page title="银行存管">
    <WrapDiv>
      <div className="banner">
        <img src={`${assetPrefix}/static/images/bank/ornament0.png`} alt={'banner'} className="ornament0"></img>
      </div>
      <div className="part-same part-one">
        <img src={`${assetPrefix}/static/images/bank/tt0.jpg`} ></img>
        <div>
          <p className="txt-one">资金由上海华瑞银行存管</p>
          <p className="txt-two">
            为了更好的保障投资用户的资金安全，领投鸟理财先后接洽了多家银行，在经过资金实力、技术支持、用户体验等多方考量后，<br/>
            最终选择上海华瑞银行作为资金存管合作银行。
          </p>
        </div>
      </div>
      <div className="part-same part-two">
        <img src={`${assetPrefix}/static/images/bank/tt1.jpg`} ></img>
        <div className="inner-con">
          <img src={`${assetPrefix}/static/images/bank/bg1.jpg`} ></img>
        </div>
        <img src={`${assetPrefix}/static/images/bank/ornament1.png`} className="ornament1"></img>
      </div>
      <div className="part-same">
        <img src={`${assetPrefix}/static/images/bank/tt2.jpg`}></img>
        <div className="inner-con">
          <img src={`${assetPrefix}/static/images/bank/bg2.jpg`}></img>
        </div>
      </div>
      <div className="part-same part-four">
        <img src={`${assetPrefix}/static/images/bank/tt3.jpg`}></img>
        <div className="con-list">
          <div className="item">
            <div className="item-wrap">
              <img src={`${assetPrefix}/static/images/bank/icon0.png`}></img>
              <p className="lable">
                资金隔离，投资更放心
              </p>
              <p className="tt">
                平台资金和用户资金有效隔离，平台无法触碰<br/>
                用户资金，投资更放心。
              </p>
            </div>
          </div>
          <div className="item">
            <div className="item-wrap">
              <img src={`${assetPrefix}/static/images/bank/icon1.png`}></img>
              <p className="lable">
                流水清晰，资金更安全
              </p>
              <p className="tt">
                资金交易均由用户授权银行操作，资金流向<br/>
                笔笔可查，透明清晰。
              </p>
            </div>
          </div>
          <div className="item">
            <div className="item-wrap">
              <img src={`${assetPrefix}/static/images/bank/icon2.png`}></img>
              <p className="lable">
                拥抱监管，运营更合规
              </p>
              <p className="tt">
                银行较高的存管要求，有效避免平台出现自融或<br/>
                资金池，保障用户资金安全。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="part-same part-five">
        <img src={`${assetPrefix}/static/images/bank/tt4.jpg`}></img>
        <div className="inner-con">
          <img src={`${assetPrefix}/static/images/bank/bg4.jpg`}></img>
        </div>
      </div>
      <div className="footer">
        <img src={`${assetPrefix}/static/images/bank/footer.png`}></img>
        <p>市场有风险 投资需谨慎</p>
      </div>
    </WrapDiv>
  </Page>
)

export default Pc;
