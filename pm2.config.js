module.exports = {
  apps: [
    {
      name: 'tangleid-landing-4000',
      script: 'serve',
      env: {
        PM2_SERVE_PATH: 'build',
        PM2_SERVE_PORT: '4000',
      },
    },
  ],
};