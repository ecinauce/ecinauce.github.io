// vue.config.js file to be place in the root of your repository

module.exports = {
  publicPath: '/',
  chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Ennchan's Repo Hub";
                return args;
            })
    },
    devServer: {
    	proxy: 'http://localhost:5000/'
    }
}
