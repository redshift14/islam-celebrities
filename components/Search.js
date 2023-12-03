'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDebounce } from 'use-debounce' 
import styles from '../styles/Home.module.css'

const Search = () => {

  const router = useRouter()
  const [text, setText] = useState('')
  const [query] = useDebounce(text, 500)

  useEffect(() => {
    if (!query) {
      router.push('/')
    }
    else {
      router.push(`?search=${query}`)
    }
  }, [query, router])

  return (
    <div className={styles.input_wrapper}>
      <input 
        className={styles.input} 
        type='search' 
        placeholder='قم بالبحث هنا ...' 
        value={text}
        onChange={e => setText(e.target.value)}
      />
    </div>
  )
}

export default Search