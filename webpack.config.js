const pathTo = require('path');
const fs = require('fs-extra');
const webpack = require('webpack');

const entry = {};
const weexEntry = {};
const vueWebTemp = 'temp';
const hasPluginInstalled = fs.existsSync('./web/plugin.js');
var isWin = /^win/.test(process.platform);


function getEntryFileContent(entryPath, vueFilePath) {
  let relativePath = pathTo.relative(pathTo.join(entryPath, '../'), vueFilePath);
  let content = '';
  if (hasPluginInstalled) {
    const plugindir = pathTo.resolve('./web/plugin.js');
    contents = 'import \'' + plugindir + '\' \n';
  }
  if (isWin) {
    relativePath = relativePath.replace(/\\/g,'\\\\');
  }
  content += 'import Vue from \'vue\'\n';
  content += 'import weex from \'weex-vue-render\'\n';
  content += 'import App from \''+relativePath +'\'\n';
  content += 'weex.init(Vue)\n'; 
  content += 'new Vue(Vue.util.extend({el: \'#root\'},App))\n';
  return content;
}

var fileType = '';

function walk(dir) {
  dir = dir || '.';
  const directory = pathTo.join(__dirname, 'src', dir);
  fs.readdirSync(directory)
    .forEach((file) => {
      const fullpath = pathTo.join(directory, file);
      const stat = fs.statSync(fullpath);
      const extname = pathTo.extname(fullpath);
      if (stat.isFile() && extname === '.vue' || extname === '.we') {
        if (!fileType) {
          fileType = extname;
        }
        if (fileType && extname !== fileType) {
          console.log('Error: This is not a good practice when you use ".we" and ".vue" togither!');
        }
        const name = pathTo.join(dir, pathTo.basename(file, extname));
        if (extname === '.vue') {
          const entryFile = pathTo.join(vueWebTemp, dir, pathTo.basename(file, extname) + '.js');
          fs.outputFileSync(pathTo.join(entryFile), getEntryFileContent(entryFile, fullpath));
          
          entry[name] = pathTo.join(__dirname, entryFile) + '?entry=true';
        } 
        weexEntry[name] = fullpath + '?entry=true';
      } else if (stat.isDirectory() && file !== 'build' && file !== 'include') {
        const subdir = pathTo.join(dir, file);
        walk(subdir);
      }
    });
}

walk();
// web need vue-loader
const plugins = [
  new webpack.optimize.UglifyJsPlugin({minimize: true}),
  new webpack.BannerPlugin({
    banner: '// { "framework": ' + (fileType === '.vue' ? '"Vue"' : '"Weex"') + '} \n',
    raw: true,
    exclude: 'Vue'
  })
];
const webConfig = {
  context: pathTo.join(__dirname, ''),
  entry: entry,
  output: {
    path: pathTo.join(__dirname, 'dist'),
    filename: '[name].web.js',
  },
  module: {
    // webpack 2.0 
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader'
        }],
        exclude: /node_modules/
      },
      {
        test: /\.vue(\?[^?]+)?$/,
        use: [{
          loader: 'vue-loader'
        }]
      },{
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },{
        test: /\.scss$/,
        use: [{
          loader: 'style!css!sass'
        }]
      },{
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },
  // resolve: {
  //   alias: {
  //   'vue$': 'vue/dist/vue.common.js'
  //   }
  // },
  plugins: plugins,
};
const weexConfig = {
  entry: weexEntry,
  output: {
    path: pathTo.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
        }],
        exclude: /node_modules/
      },
      {
        test: /\.vue(\?[^?]+)?$/,
        use: [{
          loader: 'weex-loader'
        }]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style!css!sass'
        }]
      },{
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },{
        test: /\.we(\?[^?]+)?$/,
        use: [{
          loader: 'weex-loader'
        }]
      }
    ]
  },
  // resolve: {
  //   alias: {
  //   'vue$': 'vue/dist/vue.common.js'
  //   }
  // },
  plugins: plugins,
};

var exports = [webConfig, weexConfig];

if (fileType === '.we') {
  exports = weexConfig;
}
module.exports = exports;
