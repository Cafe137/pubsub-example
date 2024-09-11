import { Types } from 'cafe-utility'
import { useEffect, useState } from 'react'
import { pubSub } from '../GlobalState'

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

    function onPress(message: string) {
        pubSub.publish(
            'modal',
            <div>
                <h2>Message modal</h2>
                <p>{message}</p>
            </div>
        )
    }

    return (
        <>
            {messages.map((message, index) => {
                return (
                    <div key={index}>
                        <p>{message}</p>
                        <button onClick={() => onPress(message)}>Show in modal</button>
                    </div>
                )
            })}
        </>
    )
}
