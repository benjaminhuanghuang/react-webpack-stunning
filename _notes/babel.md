## Dependencies
  npm install -D babel-cli babel-loader babel-preset-es2015 babel-preset-react

## babel configuration 
  In webpack.config.js, tell webpack run the babel loader
  ```
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
  ```

  In package.json, tell babel transpile es6 and react code
  ```
  ```

## babel with webpack

