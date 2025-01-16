const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 '>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Login
          <span className='text-blue-500'> ChatApp</span>
        </h1>

        <form action=''>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input
              type='text'
              name='username'
              placeholder='Enter your username'
              className='input input-bordered w-full h-10'
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
            />
          </div>

          <a
            href='#'
            className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
          >
            Don&apos;t have an account? Register
          </a>

          <div>
            <button className='btn btn-primary btn-sm mt-2'>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
