import { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuth } from '../context/AuthContext'

const useSignup = () => {
  const [loading, setLoading] = useState(false)
  const { setAuthUser } = useAuth()
  const signup = async ({
    fullName,
    username,
    password,
    gender,
    confirmPassword
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      gender,
      confirmPassword
    })

    if (!success) return

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullName,
          username,
          password,
          gender,
          confirmPassword
        })
      })
      const data = await response.json()
      if (data.error) {
        throw new Error(data.error)
      }
      setAuthUser(data)
      localStorage.setItem('chat-user', JSON.stringify(data))
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }
  return { signup, loading }
}

export default useSignup

const handleInputErrors = ({
  fullName,
  username,
  password,
  gender,
  confirmPassword
}) => {
  if (!fullName || !username || !password || !gender || !confirmPassword) {
    toast.error('Please fill all fields')
    return false
  }
  if (password !== confirmPassword) {
    toast.error('Passwords do not match')
    return false
  }
  if (password.length < 6) {
    toast.error('Password must be at least 6 characters')
    return false
  }
  return true
}
