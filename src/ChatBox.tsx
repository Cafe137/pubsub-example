import { Types } from 'cafe-utility'
import { useEffect, useState } from 'react'
import { pubSub } from './GlobalState'

export function ChatBox() {
    const [messages, setMessages] = useState<string[]>([])

    async function getMessages() {
        // This is a placeholder for a real API call
        return ['Hello']
    }

    useEffect(() => {
        getMessages().then(messages => {
            setMessages(messages)
        })

        return pubSub.subscribe('message', data => {
            setMessages((messages: string[]) => {
                return [...messages, Types.asString(data)]
            })
        })
    }, [setMessages])

    return (
        <>
            {messages.map((message, index) => {
                return <p key={index}>{message}</p>
            })}
        </>
    )
}
