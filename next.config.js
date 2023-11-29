module.exports = {
  images: {
    domains: ["i.ibb.co"],
  },
  
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next',
          outputPath: 'static/videos/',
          name: '[name].[ext]',
        },
      },
    });

    return config;
  },

  env: {
    BASE_URL: process.env.FAIME_SERVER_URL,
  },
};
