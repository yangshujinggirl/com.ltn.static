import styled from 'styled-components';
import Page from '../../components/page';

const WrapDiv =styled.div`
  font-size:12px;
  max-width:1024px;
  padding:20px 12px;
  box-sizing:border-box;
  margin:0 auto;
  color:#666;
  div,p {
    line-height:150%;
  }
  p {
    margin:4px 0;
  }
  .TitleH {
    font-size:24px;
    font-weight:bold;
    color:#333;
    text-align:center;
  }
  .OneLeve {
    font-size:20px;
  }
  .TwoLeve {
    font-size:16px;
    color:#333;
    font-weight:bold;
    padding:8px 0;
  }
  .ThrLeve {
    font-size:14px;
    color:#333;
    font-weight:bold;
    padding:4px 0;
  }
  .IndentP {
    text-indent:24px;
  }
`;


const TybProtocol = ()=> (
  <Page title="体验标投资协议">
    <WrapDiv>
      <div className="TitleH">体验标投资协议</div>
      <div>
        <p>本投资协议（下称“本协议”）由以下各方于上海市普陀区签署：</p>
        <p>吾悠注册ID：__________________________</p>
        <p>居间人：上海吾悠互联网科技服务有限公司</p>
        <p>住所地：上海市普陀区金沙江路2145号A座7楼</p>
        <p>鉴于：</p>
        <p className="IndentP">
          居间人系在上海市合法成立并有效存续的有限责任公司，拥有“领投鸟”(下称本平台，均指领投鸟平台及上海吾悠互联网科技服务有限公司)的经营权；
          现投资人自愿加入本平台的虚拟理财体验计划，并通过本平台完成虚拟投资行为，达成协议如下：
        </p>
      </div>
      <div>
        <div className="TwoLeve">第一条：定义(除非上下文另有解释，下列用语具有以下含义)</div>
        <p>1、体验金券：指在本平台上，用于投资购买虚拟理财产品时支付使用的，不计入投资人实际资产的虚拟本金。</p>
        <p>2、鸟币：指在本平台上，使用体验金券投资购买虚拟理财产品后所得的，不计入投资人实际资产的，但可在符合本平台公布的相关交易规则的情形下，用于折抵现金的虚拟收益。 </p>
        <p>3、鸟币账户：指在本平台上生成的用于存管鸟币的虚拟账户。</p>
      </div>
      <div>
        <div className="TwoLeve">第二条： 虚拟交易规则</div>
        <p>1、体验金券获取方式：新用户注册平台奖励；</p>
        <p>2、交易单位：系统设置为10000体验金券，最小交易数量为1份体验金券；</p>
        <p>3、成交规则：用户投资体验标的。</p>
      </div>
      <div>
        <div className="TwoLeve">第三条：虚拟理财体验计划内容</div>
        <p>（1）虚拟本金数额：________________</p>
        <p>（2）历史年化收益率_____%，日收益率_____%；</p>
        <p>（3）期限：___年___月___日至___年___月___日，计___天</p>
        <p>（4）到期日及应收收益：____鸟币。</p>
      </div>
      <div>
        <div className="TwoLeve">第四条：权利义务</div>
        <p>投资人知晓并确认：</p>
        <p>1、投资人通过本平台成功购买本平台发布的虚拟理财产品后，不得再撤回认购的体验金券。</p>
        <p>2、投资人知晓所得的虚拟理财本金即体验金券不可提现，在认购到期后由本平台自动收回，所产生的收益即鸟币归投资人所有。</p>
        <p>3、居间人应于本协议约定的到期日向投资人支付鸟币。</p>
        <p>4、投资人同意并授权居间人采取包括但不限于通过站内信、电子邮件、平台公示等方式进行通知、公告。</p>
      </div>
      <div>
        <div className="TwoLeve">第五条：争议解决</div>
        <p>1、本协议的订立、效力、解释、履行、修改和终止以及争议的解决适用中国的法律。</p>
        <p>2、本协议在履行过程中，如发生任何争执或纠纷，双方应友好协商解决；若协商不成，任何一方均有权向本协议签订地的人民法院提起诉讼。</p>
      </div>
      <div>
        <div className="TwoLeve">第六条：其他</div>
        <p>1、本协议采用电子文本形式制成，投资人在本平台注册且完成操作即视为同意本协议全部内容。各方均认可本协议效力及本协议内容。</p>
        <p>2、如果本协议中的任何一条或多条违反适用的法律法规，则该条将被视为无效，但该无效条款并不影响本协议其他条款的效力。</p>
        <p>3、本协议项下无约定的事项以本平台公布的相关规则为准。</p>
        <p>声明：对于本协议条款，本平台已应投资人要求进行充分解释及说明，投资人对本协议内容及相应风险已完全知悉并理解。</p>
      </div>
    </WrapDiv>
  </Page>
)

export default TybProtocol;
