import {useEffect, useState} from "react";

export default function useOnScreen(ref) {
    
    let rootMargin = '';
    if (window.innerWidth <= 767) {
        rootMargin = '-20px'
    } else {
        rootMargin = '-100px'
    }
    
    
    const options = {
        root: null,
        rootMargin: rootMargin,
        threshold: 0.5
    }
    
    const [isIntersecting, setIntersecting] = useState(false)
    
    const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting), options
    )
    
    useEffect(() => {
        observer.observe(ref.current)
        // Remove the observer as soon as the component is unmounted
        return () => { observer.disconnect() }
    })
    
    return isIntersecting
}