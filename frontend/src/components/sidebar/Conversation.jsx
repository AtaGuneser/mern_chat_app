const Conversation = () => {
  return (
    <>
      <div className='flex items-center gap-2 hover:bg-sky-500 py-1 cursor-pointer p-2 rounded'>
        <div className='avatar online'>
          <div className='w-12 rounded-full'>
            <img
              alt='avatar'
              src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
            />
          </div>
        </div>

        <div className='flex flex-col flex-1'>
          <div className='flex justify-between items-center gap-3'>
            <p className='text-gray-200 font-bold'>John Doe</p>
            <span className='text-xs text-gray-500'>Last message</span>
          </div>
        </div>
      </div>

      <div className='divider py-0 h-1 my-0'></div>
    </>
  )
}

export default Conversation
