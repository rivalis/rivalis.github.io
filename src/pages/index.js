import React from 'react'
import Layout from '@theme/Layout'

import HeroHeader from '../containers/HeroHeader/HeroHeader'
import Features from '../containers/Features/Features'

const code = `const { Rivalis } = require('@rivalis/core')
const { WebSocketProtocol } = require('@rivalis/protocol-websocket')
const gameserver = new Rivalis({
    adapter: null, // default: InMemoryAdapter,
    protocols: [ new WebSocketProtocol() ]
})
gameserver.initialize()
`

export default () => (
    <Layout title="Welcome" description="Open source NodeJS framework for building protocol agnostic and scalable multiplayer servers" >
        <HeroHeader
            title="Multiplayer framework"
            description="Open source NodeJS framework for building protocol agnostic and scalable multiplayer servers"
            button_label="Get Started"
            button_url='/docs'
            image_url='/img/gfx-rivalis.png'
            image_alt='rivalis overview'
        />
        <main>
            <Features
                title="Why Rivalis?"
                description="The powerful API structure and extensibility of this framework will fit perfectly in every type of game. Rivalis is designed to support and solve most common problems when it comes to development of multiplayer game servers." 
                code={code}
                features={[
                    {
                        image_url: '',
                        image_alt: '',
                        title: 'Flexible',
                        description: 'Rivalis can work with one or multiple bidirectional web transfer protocols at same time.'
                    }, {
                        image_url: '',
                        image_alt: '',
                        title: 'Consistent',
                        description: 'Rivalis provides OOTB consistent event ordering and a lot more helpful utilities.'
                    }, {
                        image_url: '',
                        image_alt: '',
                        title: 'Open Source',
                        description: 'Rivalis is free to use and extend. Is licensed under the most permissive MIT License.'
                    }
                ]}
            />
        </main>
    </Layout>
)