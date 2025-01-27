import { Link } from 'react-router-dom'
import GenderCheckbox from './GenderCheckbox'
import { useState } from 'react'
import useSignup from '../../hooks/useSignup'
const SignUp = () => {
  const [input, setInput] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const { signup, loading } = useSignup()

  const handleCheckboxChange = gender => {
    setInput({ ...input, gender })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    await signup(input)
  }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 '>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Sign Up
          <span className='text-blue-500'> ChatApp</span>
        </h1>

        <form action='' onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input
              type='text'
              name='fullName'
              placeholder='Enter your full name'
              className='input input-bordered w-full h-10'
              value={input.fullName}
              onChange={e => setInput({ ...input, fullName: e.target.value })}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input
              type='text'
              name='username'
              placeholder='Enter your username'
              className='input input-bordered w-full h-10'
              value={input.username}
              onChange={e => setInput({ ...input, username: e.target.value })}
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
              value={input.password}
              onChange={e => setInput({ ...input, password: e.target.value })}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input
              type='password'
              name='confirmPassword'
              placeholder='Confirm your password'
              className='input input-bordered w-full h-10'
              value={input.confirmPassword}
              onChange={e =>
                setInput({ ...input, confirmPassword: e.target.value })
              }
            />
          </div>

          <GenderCheckbox
            handleCheckboxChange={handleCheckboxChange}
            selectedGender={input.gender}
          />

          <Link
            to='/login'
            className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
          >
            Already have an account? Login
          </Link>

          <div>
            <button
              className='btn btn-block border-slate-700 btn-sm mt-2'
              disabled={loading}
            >
              {loading ? (
                <span className='loading loading-spinner loading-sm'></span>
              ) : (
                'Sign Up'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
