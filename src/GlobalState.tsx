import { PubSubChannel } from 'cafe-utility'
import { ReactNode } from 'react'

type CounterEvent = {
    remaining: number
}

export const modalChannel = new PubSubChannel<ReactNode>()
export const messageChannel = new PubSubChannel<string>()
export const counterChannel = new PubSubChannel<CounterEvent>()

const INTERVAL = 3_000
let ticks = 100

setInterval(() => {
    counterChannel.publish({
        remaining: ticks--
    })
}, INTERVAL)
