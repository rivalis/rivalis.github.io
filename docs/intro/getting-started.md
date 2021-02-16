---
title: Getting Started
hide_title: false
slug: /getting-started
---

Rivalis will give you an environment to develop multiplayer game server for your needs.

## Prerequisites
- JavaScript & NodeJS knowledge
- NodeJS installed on your local machine
- Code Editor


## Your first project

:::note
This guide will show you how to setup standard (monolith) client/server multiplayer game server. For more advanced game server infrastructures you can read [Concepts](/docs/concepts) section.
:::

Create a directory on your system for your server project, then initialize npm project.

`npm init`

install rivalis core dependency 

`npm install --save @rivalis/core`

install dependencies for protocols that you want to use. Here we will install rivalis-protocol-websocket (WebSocket Protocol).

`npm install --save @rivalis/protocol-websocket`

:::note
If you want to read more about different protocols continue reading [Protocols](/docs/protocols) section.
:::


create server.js file
```javascript
const http = require('http')
const { Rivalis } = require('@rivalis/core')
const { WebSocketProtocol } = require('@rivalis/protocol-websocket')

const httpServer = http.createServer()

const wsProtocol = new WebSocketProtocol({ server: httpServer })

const gameServer = new Rivalis({
    protocols: [ wsProtocol ]
})

httpServer.listen(3000, () => {
    console.log('websocket server listen on 3000 port')
    gameServer.initialize()
})

```
You already have up and running rivalis server.

:::note
To connect your game to rivalis, follow [Clients](/docs/clients) section.
:::


Next guide is to understand Rivalis Core API and how to implement game logic.
