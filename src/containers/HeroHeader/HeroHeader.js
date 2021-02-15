import React, { Component } from 'react'
import HeroComponent from '../../components/HeroComponent'
import WaveDecorComponent from '../../components/WaveDecorComponent'

class HeroHeader extends Component {

    render() {
        const { title, description, button_label, button_url, image_url, image_alt } = this.props
        return (
            <HeroComponent
                title={title}
                description={description}
                button_label={button_label}
                button_url={button_url}
                image_url={image_url}
                image_alt={image_alt}
            >
                <WaveDecorComponent />
            </HeroComponent>
        )
    }

}

export default HeroHeader
