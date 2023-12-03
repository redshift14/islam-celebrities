'use client'

import { useStateContext } from '@/context/stateContext'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {

  const { isDarkTheme, handleToggleTheme } = useStateContext()

  return (
    <nav className={styles.main}>
      <Link href={'/'}>
        <h2 className={styles.logo}>تراجم</h2>
      </Link>
      <label className={styles.switch}>
        <input type='checkbox' title='theme-switcher' checked={isDarkTheme} onChange={handleToggleTheme} />
        <span className={styles.slider}></span>
      </label>
    </nav>
  )
}

export default Navbar