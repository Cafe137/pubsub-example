import { useEffect, useRef, useState } from 'react'
import { counterChannel } from '../GlobalState'
import './Counter.css'

export function Counter() {
    const [counter, setCounter] = useState<number>(0)
    const intervalRef = useRef<HTMLDivElement>(null)
    const progressRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        return counterChannel.subscribe(data => {
            setCounter(data.remaining)
            if (intervalRef.current) {
                intervalRef.current.classList.remove('animate-decrease')
                intervalRef.current.classList.add('animate-increase')
                setTimeout(() => {
                    if (!intervalRef.current) {
                        return
                    }
                    intervalRef.current.classList.add('animate-decrease')
                    intervalRef.current.classList.remove('animate-increase')
                }, 500)
            }
            if (progressRef.current) {
                progressRef.current.style.width = `${data.remaining}%`
            }
        })
    }, [])

    return (
        <div className="counter-wrapper">
            <div ref={intervalRef} className="counter-interval"></div>
            <div ref={progressRef} className="counter-progress"></div>
            <p className="counter-text">{counter} / 100</p>
        </div>
    )
}
