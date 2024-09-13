import { ChatBox } from './chat/ChatBox'
import { ChatInput } from './chat/ChatInput'
import { Counter } from './counter/Counter'
import { Modal } from './modal/Modal'

function App() {
    return (
        <>
            <Modal />
            <Counter />
            <ChatInput />
            <ChatBox />
        </>
    )
}

export default App
