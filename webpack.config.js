//引入一个包 node.js中的一个模块 拼接路径
const path = require('path');
//引入html插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { Template } = require('webpack');

//webpack中的所有的配置信息都应下载module.exports中
module.exports = {
  //指定入口文件
  entry: './src/index.ts',
  //指定打包文件所在目录
  output: {
    //清除原来的
    clean: true,
    //指定打包文件的目录
    path: path.resolve(__dirname, 'dist'),
    //打包后文件的名字
    filename: 'boundle.js',
  },
  //指定webpack打包时要使用的模块
  module: {
    //指定要加载的规则 ts的处理
    rules: [
      {
        //test指定规则生效的文件
        test: /\.ts$/,
        //要使用的loader
        use: 'ts-loader',
        //要排除的文件
        exclude: /node_modules/,
      },
      {
        //test指定规则生效的文件 less的处理
        test: /\.less$/,
        //要使用的loader 从下至上执行
        use: ['style-loader', 'css-loader', 'less-loader'],
        //要排除的文件
      },
    ],
  },
  mode: 'development',

  // 配置webpack插件
  plugins: [
    new HtmlWebpackPlugin({
      // title: '这是一个自定义的title',
      template: './src/index.html',
    }),
  ],

  //设置导入的文件类型
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
