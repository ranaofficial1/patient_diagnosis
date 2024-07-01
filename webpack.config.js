module.exports = {
    // ... other configurations ...
    plugins: [
      new webpack.DefinePlugin({
        'process.env': JSON.stringify({
          REACT_APP_USERNAME: process.env.REACT_APP_USERNAME,
          REACT_APP_PASSWORD: process.env.REACT_APP_PASSWORD,
        }),
      }),
    ],
  };