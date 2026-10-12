import { useEffect } from 'react'

export default function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(({ isIntersecting, target }) => isIntersecting && target.classList.add('shown')), { threshold: 0.13 })
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element))
    return () => observer.disconnect()
  }, [])
}
