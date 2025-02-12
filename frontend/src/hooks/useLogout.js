import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

export const useLogout = () => {
  const [loading, setLoading] = useState(false)
  const { setAuthUser } = useAuth()
  const logout = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await res.json()
      if (data.error) {
        throw new Error(data.error)
      }
      setAuthUser(null)
      localStorage.removeItem('chat-user')
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }
  return { logout, loading }
}
