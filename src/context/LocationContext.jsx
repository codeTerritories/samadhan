import React from 'react'
import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const LocationContext = createContext(null)

// Normalize Nominatim state names → our keys
const NORMALIZE = {
  'Jammu and Kashmir': 'Jammu & Kashmir',
  'Jammu & Kashmir':   'Jammu & Kashmir',
  'Orissa':            'Odisha',
  'Uttaranchal':       'Uttarakhand',
  'National Capital Territory of Delhi': 'Delhi',
  'Delhi':             'Delhi',
}

export function LocationProvider({ children }) {
  const [state, setState]     = useState(() => localStorage.getItem('samadhan_state') || '')
  const [city,  setCity]      = useState(() => localStorage.getItem('samadhan_city')  || '')
  const [status, setStatus]   = useState('idle') // idle | asking | loading | done | denied | error

  // Persist to localStorage whenever state/city changes
  useEffect(() => {
    if (state) localStorage.setItem('samadhan_state', state)
    if (city)  localStorage.setItem('samadhan_city',  city)
  }, [state, city])

  // Restore done status if we already have a state
  useEffect(() => {
    if (state) setStatus('done')
  }, [])

  const detectLocation = useCallback(() => {
    if (!navigator.geolocation) { setStatus('error'); return }
    setStatus('loading')

    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        try {
          const res  = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${coords.latitude}&lon=${coords.longitude}&format=json`,
            { headers: { 'Accept-Language': 'en' } }
          )
          const data = await res.json()
          const raw  = data.address?.state || data.address?.county || ''
          const norm = NORMALIZE[raw] || raw
          const c    = data.address?.city || data.address?.town || data.address?.village || ''
          setState(norm)
          setCity(c)
          setStatus('done')
        } catch {
          setStatus('error')
        }
      },
      () => setStatus('denied'),
      { timeout: 10000 }
    )
  }, [])

  const setManualState = useCallback((s) => {
    setState(s)
    setCity('')
    setStatus('done')
  }, [])

  const clear = useCallback(() => {
    setState('')
    setCity('')
    setStatus('idle')
    localStorage.removeItem('samadhan_state')
    localStorage.removeItem('samadhan_city')
  }, [])

  return (
    <LocationContext.Provider value={{ state, city, status, detectLocation, setManualState, clear }}>
      {children}
    </LocationContext.Provider>
  )
}

export const useLocation = () => useContext(LocationContext)
