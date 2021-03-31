---
title: Getting Started
hide_title: false
slug: /
---

:::warning
The documentation is not completed, If you are trying to setup a project using Rivalis and you have any problems, please visit GitHub repository, [open an issue](https://github.com/rivalis/rivalis-core/issues) or [start a discussion](https://github.com/rivalis/rivalis-core/discussions).

:::

Rivalis will give you an environment to develop multiplayer game server for your needs.

## Prerequisites
- JavaScript & NodeJS knowledge
- NodeJS installed on your local machine
- Code Editor


## Your first project

:::note
This guide will show you how to setup standard (monolith) client/server multiplayer game server. For more advanced game server infrastructures you can read [Concepts](/docs/concepts) section.
:::

Create a new directory on your system for your rivalis server project, then initialize npm project.

`npm init`

install rivalis core library using command:

`npm i --save @rivalis/core`

install dependencies for protocols that you want to use. Here we will install rivalis-protocol-websocket (WebSocket Protocol).

`npm i --save @rivalis/protocol-websocket`

:::note
If you want to read more about different protocols continue reading [Protocols](/docs/protocols) section.
:::


create server.js file
```javascript
const http = require('http')
const { Rivalis } = require('@rivalis/core')
const { WebSocketProtocol } = require('@rivalis/protocol-websocket')

// 1. httpServer is used to serve websocket endpoint for the clients
const httpServer = http.createServer()

// 2. using already created http server for our websocket protocol
const wsProtocol = new WebSocketProtocol({ server: httpServer })

// 3. creating rivalis instance and configuring rivalis to work with websocket protocol
const rivalis = new Rivalis({
    protocols: [ wsProtocol ]
})

// 4. starting web socket server to listen on port 3000
httpServer.listen(3000, () => {
    console.log('websocket server listen on 3000 port')
})

// 5. initializing rivalis
rivalis.initialize()

```
You already have up and running rivalis server.

:::note
To connect your game to rivalis, follow [Clients](/docs/clients) section.
:::


