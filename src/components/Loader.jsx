import { useEffect, useState } from 'react'

export default function Loader() {
  const [visible, setVisible] = useState(true)
  useEffect(() => { const timer = setTimeout(() => setVisible(false), 1250); return () => clearTimeout(timer) }, [])
  return visible && <div className="loader"><div><b>SK</b><span>WHEELS</span><i /></div></div>
}
