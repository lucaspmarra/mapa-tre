//vue.config.js
module.exports = {
  publicPath: '',
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Macrorregiões do Estado de Goiás";
                return args;
            })
    },
}
