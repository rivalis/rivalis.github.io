import clsx from 'clsx'
import React, { Component } from 'react'
import CodeSnippetComponent from '../../components/CodeSnippetComponent'
import ContentWrapComponent from '../../components/ContentWrapComponent'

import {
    description_col,
    code_snippet,
    p_special,
    h_special,
    feature_block
} from './features.module.css'

class Features extends Component {
    render() {
        const { title = '[TITLE HERE]', description = '[DESCRIPTION HERE]', code='[CODE HERE]', features = [] } = this.props
        return (
            <>
                <ContentWrapComponent theme="light">
                    <div className={clsx('container')}>
                        <div className={clsx('row')}>
                            <div className={clsx('col col--6', description_col)}>
                                <h3>{title}</h3>
                                <p className={clsx(p_special)}>{description}</p>
                            </div>
                            <div className={clsx('col col--6', code_snippet)}>
                                <CodeSnippetComponent 
                                    code={code}
                                />
                            </div>
                        </div>
                    </div>
                </ContentWrapComponent>
                <ContentWrapComponent theme="dark">
                    <div className={clsx('container')}>
                        <div className={clsx('row')}>
                            <div className={clsx('col col--12')}>
                                <h3 className={clsx(h_special)}>Features</h3>
                            </div>
                            {features.map(feature => this.renderFeature(feature))}
                        </div>
                    </div>
                </ContentWrapComponent>
            </>
        )
    }

    renderFeature({ key = Math.random(), title, description, image_url, image_alt  }) {
        return (
        <div key={key} className={clsx('col col--4')}>
            <div className={clsx(feature_block)}>
                <img src={image_url} alt={image_alt} />
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
    }
}

export default Features