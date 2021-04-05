// let path = require('path');

// module.exports = {
//   entry: './client/src/index.jsx',
//   output: {
//     filename: 'bundle.js',
//     path: path.join(__dirname, '/dist')
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['react', 'es2015']
//         }
//       },
//       {
//         test: /\.css$/i,
//         loader: ['style-loader', 'css-loader'],
//       },
//       {
//         test: /\.(jpe?g|png|gif|svg)$/i,
//         loader: 'file-loader',
//         options: {
//           name: '/public/icons/[name].[ext]'
//         }
//       }
//     ]
//   }
// };

const path = require('path');
const src_dir = path.join(__dirname, '/client/src');
const dist_dir = path.join(__dirname, '/client/dist');

module.exports = {
  entry: [`${src_dir}/index.jsx`],
  output: {
    filename: 'bundle.js',
    path: dist_dir
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: src_dir,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};