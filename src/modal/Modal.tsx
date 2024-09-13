import { ReactNode, useEffect, useState } from 'react'
import { modalChannel } from '../GlobalState'
import './Modal.css'

export function Modal() {
    const [data, setData] = useState<ReactNode | null>(null)

    useEffect(() => {
        return modalChannel.subscribe(data => {
            setData(data)
        })
    }, [])

    if (!data) {
        return null
    }

    function onOuterClick() {
        setData(null)
    }

    function onInnerClick(event: React.MouseEvent) {
        event.stopPropagation()
    }

    function onClose() {
        setData(null)
    }

    return (
        <div className="modal-wrapper" onClick={onOuterClick}>
            <div className="modal" onClick={onInnerClick}>
                <>
                    <button className="modal-closer" onClick={onClose}>
                        X
                    </button>
                    {data}
                </>
            </div>
        </div>
    )
}
