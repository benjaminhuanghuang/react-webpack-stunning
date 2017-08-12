## Dependencies
  npm install -D css-loader extract-text-webpack-plugin

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

