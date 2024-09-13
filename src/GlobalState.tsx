import { PubSubChannel } from 'cafe-utility'
import { ReactNode } from 'react'

export const modalChannel = new PubSubChannel<ReactNode>()
export const messageChannel = new PubSubChannel<string>()
