 # Using webpack to process css and scss

 ## Install bootstrap4 and use it in sass in project
  npm install -S bootstrap@4.0.0-alpha.6
  @import "../../node_modules/bootstrap/scss/bootstrap";
 
  In bootstrap.scss, we can find other @imports 
  
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
  
## Use variables defined in bootstrap 
  ```
  @import "../../node_modules/bootstrap/scss/_variables";
  @import '../../node_modules/bootstrap/scss/buttons';
  ```



  

