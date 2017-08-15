 # Using webpack to process css and scss

 ## Install bootstrap4 
  copy bootstrap.css to /public/css
  
  or
  
  npm install -S bootstrap@4.0.0-alpha.6
  @import "../node_modules/bootstrap/scss/bootstrap";
  
## Sass Dependencies
  npm install -D css-loader extract-text-webpack-plugin 
  npm install -D sass-loader node-sass

  extract-text-webpack-plugin extract styles from .js file and generate a separate .css file
  sass-loader depends on node-sass

## webpack.config.js
  ```
  {
    test: /\.(sass|scss)$/,
    loader: ExtractTextPlugin.extract('css-loader!sass-loader')
  }
  ```
  Convert sass to css , then execute css loader, then extract css 
  
## Sass mixin
  "macro" in scss



  

