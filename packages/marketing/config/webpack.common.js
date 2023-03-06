module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"], // JSX Elements // ES2015 -> ES5
            plugins: ["@babel/plugin-transform-runtime"], // ENABLE DIFFERNT FEATURES LIKE ASYNC AWAIT
          },
        },
      },
    ],
  },
};
