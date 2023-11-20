<img width="150" height="150" align="left" style="float: left; margin: 0 10px 0 0;" alt="Xiao" src="https://fristroop.com/assets/logo-7d84cf41.png">

# [easypanel.js](https://github.com/Fristroop/easypanel-api)

💬 Object-oriented library to interact with [Easypanel](https://easypanel.io)!.

## Installation

```
npm install easypanel.js
```

## Example

Here is a an example

```js
import "dotenv/config";
import { Client } from "easypanel.js";

export const client = new Client({
  endpoint: process.env.domain, // easypanel domain easypanel.example.com
  credentials: {
    email: process.env.email,
    password: process.env.psw,
  },
  token: process.env.token, // when provided package will skip authenticating if token works!
});

client.on("ready", async () => {
  console.log("Client is ready!");
  console.log(await client.projects.list());
});

await client.login();
```

# You may find all examples on [Github](https://github.com/Fristroop/easypanel-api/tree/main/tests)

## Links

- [Website Documentation](https://easypanel-js.fristroop.com)
- [Fristroop Discord server](https://discord.gg/c4hrGHwSgS)
- [GitHub](https://github.com/Fristroop/easypanel.js)
- [NPM](https://www.npmjs.com/package/easypanel.js)
