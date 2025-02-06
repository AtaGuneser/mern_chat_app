import useConversation from '../../zustand/useConversation'

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation()
  const isSelected = selectedConversation?.id === conversation.id
  return (
    <>
      <div
        className={`flex items-center gap-2 hover:bg-sky-500 py-1 cursor-pointer p-2 rounded ${
          isSelected ? 'bg-sky-500' : ''
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className='avatar online'>
          <div className='w-12 rounded-full'>
            <img alt='avatar' src={conversation.profilePic} />
          </div>
        </div>

        <div className='flex flex-col flex-1'>
          <div className='flex justify-between items-center gap-3'>
            <p className='text-gray-200 font-bold'>{conversation.fullName}</p>
            <span className='text-xs text-gray-500'>
              {lastIdx
                ? 'Last message'
                : conversation.messages[conversation.messages.length - 1]
                    .message}
            </span>
          </div>
        </div>
      </div>

      <div className='divider py-0 h-1 my-0'></div>
    </>
  )
}

export default Conversation
