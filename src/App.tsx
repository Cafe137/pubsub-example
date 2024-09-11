import { ChatBox } from './chat/ChatBox'
import { ChatInput } from './chat/ChatInput'
import { Modal } from './modal/Modal'

function App() {
    return (
        <>
            <Modal />
            <ChatInput />
            <ChatBox />
        </>
    )
}

export default App
