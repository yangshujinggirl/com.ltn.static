const isDev = process.env.NODE_ENV === 'development';
module.exports = {
  assetPrefix: isDev?'':'/ltn-static'
}
