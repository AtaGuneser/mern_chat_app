const SearchInput = () => {
  return (
    <form action='' className='flex items-center gap-2'>
      <input
        type='text'
        placeholder='Search'
        className='input input-bordered rounded-full'
      />
      <button className='btn btn-circle bg-sky-500 text-white'>
        <i className='fa-solid fa-magnifying-glass'></i>
      </button>
    </form>
  )
}

export default SearchInput
