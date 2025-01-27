import { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login, loading } = useLogin()
  const handleSubmit = async e => {
    e.preventDefault()
    await login(username, password)
  }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 '>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Login
          <span className='text-blue-500'> ChatApp</span>
        </h1>

        <form action='' onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input
              type='text'
              name='username'
              placeholder='Enter your username'
              className='input input-bordered w-full h-10'
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input
              type='password'
              name='password'
              placeholder='Enter your password'
              className='input input-bordered w-full h-10'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <Link
            to='/signup'
            className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
          >
            Don&apos;t have an account? Register
          </Link>

          <div>
            <button
              className='btn btn-block border-slate-700 btn-sm mt-2'
              disabled={loading}
            >
              {loading ? (
                <span className='loading loading-spinner loading-sm'></span>
              ) : (
                'Login'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
