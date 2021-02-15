import clsx from 'clsx'
import React from 'react'

import {
    theme_light, theme_dark
} from './content_wrap.module.css'

export default ({ theme = 'light', children }) => (
    <div className={clsx(theme === 'light' ? theme_light : theme_dark)}>
        {children}
    </div>
)