---
title: Hello World
hide_title: false
slug: /core-api/hello-world
---

Here, we will start working on our first, simple multiplayer server where players shall be able to chat.

After creation of our first `server.js` file

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
## Create first stage
we need to define our first stage.

create `FirstStage.js` file:
```javascript
const { Stage, Response } = require('@rivalis/core')

class FirstStage extends Stage {
    
    onInit(actions) {
        /** 
         * Here we are defining action handler for action of type 'message'
         * players (Actors) shall be able to send action of type message and
         * that message will be emitted (broadcasted) between all players that are
         * currently in the context
         */
        actions.on('message', action => {
            return new Response({
                type: Response.Type.EMIT,
                data: action.data
            })
        })

    }
}

module.exports = FirstStage
```

With this stage implementation we shall be able to create our first context that uses `TestStage`.

:::note
To read more about whole lifecycle of the stage visit [Stages](/docs/core-api/stages) section.
:::

## Context creation

Next is to create context that uses the `FirstStage`.

To do that we need to go to our `server.js` and add the following code after initialization:

```javascript
const FirstStage = require('./FirstStage.js')

...
httpServer.listen(3000, () => {
    console.log('websocket server listen on 3000 port')
    gameServer.initialize().then(() => {
        gameServer.stages.define('firstStage', new FirstStage())
        return gameServer.contexts.create('firstStage')
    }).then(contextInfo => {
        console.log(contextInfo)
        // output: { id: 'daf9b4e1-147f-4ab3-a121-0dc7b71bb7a5', type: 'firstStage', settings: {} }
    })
})
...

```

After context creation, our players can connect to the context using the context id.

:::note
To learn how to connect to existing context read [Clients](/docs/clients) section.
:::

To check working demo you can visit official repository with [examples & demos](https://github.com/rivalis/rivalis-examples).