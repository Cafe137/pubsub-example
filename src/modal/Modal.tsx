import { ReactNode, useEffect, useState } from 'react'
import { pubSub } from '../GlobalState'
import './Modal.css'

export function Modal() {
    const [data, setData] = useState<ReactNode | null>(null)

    useEffect(() => {
        return pubSub.subscribe('modal', data => {
            setData(data as ReactNode)
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
