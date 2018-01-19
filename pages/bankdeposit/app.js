import styled from 'styled-components';
import Page from '../../components/page';
import React from 'react';

let fontSize;
const WrapDiv = styled.div`
  text-align: center;
  img {
    width: 100%;
  }
  @media screen and (max-width:320px) {
    font-size:17.06px;
  }
  @media screen and (min-width:321px) and (max-width:360px) {
    font-size:19.2px;
  }
  @media screen and (min-width:361px) and (max-width:375px) {
    font-size:20px;
  }
  @media screen and (min-width:376px) and (max-width:414px) {
    font-size:22.08px;
  }
  @media screen and (min-width:415px) and (max-width:479px) {
    font-size:25.6px;
  }
  @media screen and (min-width:480px) {
    font-size:25.6px;
  }
  @media screen and (min-width:768px) {
    font-size:40.96px;
  }
  .banner {
    width: 100%;
    position: relative;
    .ornament0 {
      width: 43%;
      position: absolute;
      bottom: -20%;
      left:0;
    }
  }
  .part-same {
    color: #333;
    padding: 1.5em 0 2.25em;
    p {
      margin: 0;
      font-size: 0.7em;
    }
    .txt {
      margin:1em 0;
    }
  }
  .part-one {
    .txt-wrap {
      padding: 0 0.5em;
    }
  }
  .part-two {
    background-color: #fff;
    position: relative;
    .title {
      margin-bottom: 3em;
    }
    .ornament1 {
      width: 19%;
      position: absolute;
      right: 0;
      top:-5%;
    }
  }
  .part-thr {
    .title {
      margin-bottom: 2em;
    }
  }
  .part-four {
    background-color: #fff;
    .title {
      margin-bottom: 1em;
    }
    .item {
      overflow: hidden;
      zoom:1;
      padding: 0 1em;
      margin-bottom: 1em;
    }
    .l-icon {
      width: 10%;
      float: left;
    }
    .r-con {
      width: 73%;
      text-align: left;
      float: left;
      margin-left: 1em;
      .tt0 {
        font-size: 0.8em;
        margin-bottom: 0.8em;
      }
      .tt1 {
        font-size: 0.6em;
      }
    }
  }
  .part-five {
    .title {
      margin-bottom: 1.5em;
    }
  }
`;

class App extends React.Component{
  componentDidMount() {
  }

  render() {
    return(
      <Page title="银行存管">
        <WrapDiv>
          <div className="banner">
            <img src={`${assetPrefix}/static/images/bankApp/banner.jpg`}></img>
            <img src={`${assetPrefix}/static/images/bankApp/or0.png`} className="ornament0"></img>
          </div>
          <div className="part-one part-same">
            <img src={`${assetPrefix}/static/images/bankApp/t0.jpg`} className="title"></img>
            <div className="txt-wrap">
              <p className="txt">
                资金由上海华瑞银行存管
              </p>
              <p>
                为了更好的保障投资用户的资金安全，领投鸟理财先后接洽了多家银行，在经过资金实力、技术支持、用户体验等多方考量后，最终选择上海华瑞银行作为资金存管合作银行。
              </p>
            </div>
          </div>
          <div className="part-two part-same">
            <img src={`${assetPrefix}/static/images/bankApp/t1.jpg`} className="title"></img>
            <img src={`${assetPrefix}/static/images/bankApp/img1.jpg`}></img>
          <img src={`${assetPrefix}/static/images/bankApp/or1.png`} className="ornament1"></img>
          </div>
          <div className="part-thr part-same">
            <img src={`${assetPrefix}/static/images/bankApp/t2.jpg`} className="title"></img>
            <img src={`${assetPrefix}/static/images/bankApp/img2.jpg`}></img>
          </div>
          <div className="part-four part-same">
            <img src={`${assetPrefix}/static/images/bankApp/t3.jpg`} className="title"></img>
            <div className="item">
                <img src={`${assetPrefix}/static/images/bankApp/icon0.jpg`} className="l-icon"></img>
                <div className="r-con">
                  <p className="tt0">
                    资金隔离，投资更放心
                  </p>
                  <p className="tt1">
                    平台资金和用户资金有效隔离，平台无法触碰用户资金，投资更放心。
                  </p>
                </div>
            </div>
            <div className="item">
                <img src={`${assetPrefix}/static/images/bankApp/icon1.jpg`} className="l-icon"></img>
                <div className="r-con">
                  <p className="tt0">
                    流水清晰，资金更安全
                  </p>
                  <p className="tt1">
                    资金交易均由用户授权银行操作，资金流向笔笔可查，透明清晰。
                  </p>
                </div>
            </div>
            <div className="item">
                <img src={`${assetPrefix}/static/images/bankApp/icon2.jpg`} className="l-icon"></img>
                <div className="r-con">
                  <p className="tt0">
                    拥抱监管，运营更合规
                  </p>
                  <p className="tt1">
                    银行较高的存管要求，有效避免平台出现自融或资金池，保障用户资金安全。
                  </p>
                </div>
            </div>
          </div>
          <div className="part-five part-same">
            <img src={`${assetPrefix}/static/images/bankApp/t4.jpg`} className="title"></img>
            <img src={`${assetPrefix}/static/images/bankApp/img4.jpg`}></img>
          </div>
          <img src={`${assetPrefix}/static/images/bankApp/footer.jpg`}></img>
        </WrapDiv>
      </Page>
    )
  }
}


export default App;
