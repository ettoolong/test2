module.exports = {
  apps : [
    {
      name: "test2",
      script: "./src/server/index.js",
      env: {
        "NODE_ENV": "production",
      },
      args: [ "--color" ],
      instances : "1",
      exec_mode : "fork"
    }
  ]
}
