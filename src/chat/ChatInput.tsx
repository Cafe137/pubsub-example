import { useState } from 'react'
import { pubSub } from '../GlobalState'

export function ChatInput() {
    const [value, setValue] = useState<string>('')

    function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter' && value.trim()) {
            pubSub.publish('message', value)
            setValue('')
        }
    }

    return (
        <input
            type="text"
            value={value}
            onChange={event => {
                setValue(event.target.value)
            }}
            onKeyDown={onKeyDown}
        />
    )
}
