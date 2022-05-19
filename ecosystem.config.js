module.exports = {
  apps: [
    {
      name: 'GithubActions',
      script: 'npm',
      args: 'run start',
      log_date_format: 'DD/MM/YY HH:mm:ss UTC',
    },
  ],
};
