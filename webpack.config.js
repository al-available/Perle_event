import path from 'node:path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';

export default {
  mode: 'development',
  entry: {
    main: './src/index.js',
    about: './src/about.js',
    services: './src/services.js',
    training: "./src/training.js",
    contact:'./src/contact.js',
    weeklyupdate:'./src/weeklyupdate.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(import.meta.dirname, 'dist'),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/**/*.html"],
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: 'about.html',
      chunks: ['about'],
    }),
    new HtmlWebpackPlugin({
      template: './src/services.html',
      filename: 'services.html',
      chunks: ['services'],
    }),
    new HtmlWebpackPlugin({
      template: './src/training.html',
      filename: 'training.html',
      chunks: ['training'],
    }),
    new HtmlWebpackPlugin({
      template: './src/contact.html',
      filename: 'contact.html',
      chunks: ['contact'],
    }),
    new HtmlWebpackPlugin({
      template: './src/weeklyupdate.html',
      filename: 'weeklyupdate.html',
      chunks: ['weeklyupdate'],
    }),


















    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),

    new CopyPlugin({
      patterns: [
        { 
          from: path.resolve(import.meta.dirname, "src/asset"), 
          to: "asset" 
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|pdf)$/i, // Added pdf here
        type: 'asset/resource',
      },
    ],
  },
};



// import path from 'node:path';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// export default {
//     mode: 'development',
//     entry: {
//         main: './src/index.js',
//         about:'./src/about.js',
//         services:'./src/services.js',
//         training:"./src/training.js",
//     },
//     output: {
//         filename: '[name].js',
//         path: path.resolve(import.meta.dirname, 'dist'),
//         clean: true,
//     },
//     devtool: "eval-source-map",
//     devServer: {
//         watchFiles: ["./src/**/*.html"],
//         hot: true,
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: './src/index.html',
//             filename: 'index.html',
//             chunks: ['main'],
//         }),
//         new HtmlWebpackPlugin({
//             template: './src/about.html',
//             filename: 'about.html',
//             chunks: ['about'],
//         }),
//         new HtmlWebpackPlugin({
//             template: './src/services.html',
//             filename: 'services.html',
//             chunks: ['services'],
//         }),
//         new HtmlWebpackPlugin({
//             template: './src/training.html',
//             filename: 'training.html',
//             chunks: ['training'],
//         }),









//         new MiniCssExtractPlugin({
//             filename: '[name].[contenthash].css',
//         }),
//     ],
//     module: {
//         rules: [
//             {
//                 test: /\.css$/i,
//                 use: [MiniCssExtractPlugin.loader, 'css-loader'],
//             },
//             {
//                 test: /\.html$/i,
//                 use: ['html-loader'],
//             },
//             {
//                 test: /\.(png|svg|jpg|jpeg|gif)$/i,
//                 type: 'asset/resource',
//             },
//         ],
//     },
// };




// import path from 'node:path';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// export default {
//   mode: 'development',
//   entry: {
//     main: './src/index.js',
//     about: './src/about.js',
//     services: './src/services.js',
//     training: './src/training.js', // Fixed potential missing extension
//   },
//   output: {
//     filename: '[name].js',
//     path: path.resolve(import.meta.dirname, 'dist'),
//     clean: true,
//   },
//   // Switched to a faster sourcemap for better dev performance
//   devtool: "eval-cheap-module-source-map", 
//   devServer: {
//     watchFiles: ["./src/**/*.html"],
//     hot: true,
//     open: true,
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src/index.html',
//       filename: 'index.html',
//       chunks: ['main'],
//     }),
//     new HtmlWebpackPlugin({
//       template: './src/about.html',
//       filename: 'about.html',
//       chunks: ['about'],
//     }),
//     new HtmlWebpackPlugin({
//       template: './src/services.html',
//       filename: 'services.html',
//       chunks: ['services'],
//     }),
//     new HtmlWebpackPlugin({
//       template: './src/training.html',
//       filename: 'training.html',
//       chunks: ['training'],
//     }),
//     // Kept plugin for build compatibility, but removed hashes for speed
//     new MiniCssExtractPlugin({
//       filename: '[name].css',
//     }),
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.css$/i,
//         // style-loader is faster in dev because it injects CSS into the DOM 
//         // instead of creating a separate file that requires a page reload
//         use: ['style-loader', 'css-loader'],
//       },
//       {
//         test: /\.html$/i,
//         use: ['html-loader'],
//       },
//       {
//         test: /\.(png|svg|jpg|jpeg|gif)$/i,
//         type: 'asset/resource',
//       },
//     ],
//   },
// };
