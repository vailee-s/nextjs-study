'use client'

import { useState } from 'react'
import Link from 'next/link'


// 层级 layout 包裹 template 组件 再包裹 page 组件 

export default function Layout({ children }) {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <Link href="/dashboard/about">About</Link>
        <br/>
        <Link href="/dashboard/settings">Settings</Link>
      </div>
      <h1>Layout {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      {children}
    </>
  )
}
