/* eslint react/forbid-prop-types:0 */
import Head from 'next/head';
import PropTypes from 'prop-types';

const Page = ({ title, description, keywords, children }) => (
  <div className="page-wrap">
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Head>
    {children}
  </div>
);

Page.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  children: PropTypes.any.isRequired
};

Page.defaultProps = {
  title: '这是默认标题',
  description: '这是默认描述',
  keywords: '这是默认关键词'
};

export default Page;
