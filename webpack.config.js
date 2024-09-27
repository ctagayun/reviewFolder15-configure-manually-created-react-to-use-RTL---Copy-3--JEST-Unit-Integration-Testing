//Next, let's inform Webpack in our webpack.config.js file about files 
//with the JSX extension to make sure that they run through the transpiling step as well:
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    static: path.resolve(__dirname, './dist'),
  },
};


//const path = require('path');

// module.exports = {
//   //1
//   entry: path.resolve(__dirname, './src/index.js'),
//   //2
//   output: {
//     path: path.resolve(__dirname, './dist'),
//     filename: 'bundle.js',
//   },
//   //3
//   devServer: {
//     static: path.resolve(__dirname, './dist'),
//   },
// };


/* 
(1) Use the src/index.js file as entry point to bundle it. If the src/index.js 
    file imports other JavaScript files, bundle them as well.
(2) The bundled source code files shall result in a bundle.js file in the /dist folder.
(3) The /dist folder will be used to serve our application to the browser.

*/