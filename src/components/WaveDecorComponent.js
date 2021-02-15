import clsx from 'clsx'
import React from 'react'

import {
    wave_wrap,
    wave_animation,
    wave_top,
    wave_middle,
    wave_bottom,
    wave_bg,
    wave_bg_top,
    wave_bg_middle,
    wave_bg_bottom } from './wave_decor.module.css'

export default () => (
    <div className={clsx(wave_wrap)}>                     
        <div className={clsx(wave_animation)}>
            <div className={clsx(wave_top)}>
                <div className={clsx(wave_bg, wave_bg_top)}></div>
            </div>
            <div className={clsx(wave_middle)}>
                <div className={clsx(wave_bg, wave_bg_middle)}></div>
            </div>
            <div className={clsx(wave_bottom)}>
                <div className={clsx(wave_bg, wave_bg_bottom)}></div>
            </div>
        </div>
    </div>
)