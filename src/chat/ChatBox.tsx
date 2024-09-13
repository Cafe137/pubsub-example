import { useEffect, useState } from 'react'
import { messageChannel, modalChannel } from '../GlobalState'

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

        return messageChannel.subscribe(data => {
            setMessages((messages: string[]) => {
                return [...messages, data]
            })
        })
    }, [setMessages])

    function onPress(message: string) {
        modalChannel.publish(
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
