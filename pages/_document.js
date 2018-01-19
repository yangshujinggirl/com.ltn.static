import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import '../components/globalcss';
export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();
    return (
      <html lang="zh">
        <Head>
            <link rel="apple-touch-icon" sizes="180x180" href= {`${assetPrefix}/static/favicon/apple-touch-icon.png`} />
            <link rel="icon" type="image/png" sizes="32x32" href= {`${assetPrefix}/static/favicon/favicon-32x32.png`} />
            <link rel="icon" type="image/png" sizes="16x16" href= {`${assetPrefix}/static/favicon/favicon-16x16.png`} />
            {
              assetPrefix.length===0?(
                <link rel="manifest" href={`${assetPrefix}/static/favicon/manifest.json`}/>
              ):(
                <link rel="manifest" href={`${assetPrefix}/static/favicon/manifest-prod.json`}/>
              )
            }
            <link rel="mask-icon" href={`${assetPrefix}/static/favicon/safari-pinned-tab.svg`} color="#5bbad5" />
            <meta name="theme-color" content="#ffffff"/>
            <meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1" />
            <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
            <meta name="”renderer”" content="”webkit”" />
            <script type="text/javascript" src={`${assetPrefix}/static/scripts/others.js`}></script>
          {styleTags}
        </Head>
        <body className="custom_class">
          <div className="root">
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    );
  }
}
