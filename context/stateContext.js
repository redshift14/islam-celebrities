'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const Context = createContext()

export const StateContext = ({ children }) => {

  /* ------------ color theme -------------- */

  const [isDarkTheme, setIsDarkTheme] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedDarkTheme = window.localStorage.getItem('theme')
      if (typeof storedDarkTheme === 'string') {
        setIsDarkTheme(storedDarkTheme === 'true')
      }
      else if (matchMedia('(prefers-color-scheme: dark)').matches) {
        setIsDarkTheme(true)
      }
      else {
        setIsDarkTheme(false)
      }
    }
  }, [])

  useEffect(() => {
    document.body.setAttribute('data-dark-theme', isDarkTheme)
  }, [isDarkTheme])

  const handleToggleTheme = (e) => {
    setIsDarkTheme(e.target.checked)
    localStorage.setItem('theme', !isDarkTheme)
  }

  return (
    <Context.Provider value={{ isDarkTheme, handleToggleTheme }}>
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)