import clsx from 'clsx'
import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'

import { code_snippet } from './code_snippet.module.css'

export default ({ language = 'javascript', code = '' }) => (
    <div className={clsx(code_snippet)}>
        <CopyBlock
            language={language}
            text={code}
            showLineNumbers={false}
            theme={dracula}
            wrapLines={true}
            codeBlock={true}
        />
    </div>
)