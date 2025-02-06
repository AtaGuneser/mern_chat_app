import useGetConversations from '../../hooks/useGetConversations'
import Conversation from './Conversation'

const Conversations = () => {
  const { loading, conversations } = useGetConversations()
  console.log(conversations)
  return (
    <div className='py-2 flex flex-col gap-2 overflow-auto'>
      {loading ? (
        <p className='text-center text-gray-500'>Loading...</p>
      ) : conversations.length === 0 ? (
        <p className='text-center text-gray-500'>No conversations found</p>
      ) : (
        conversations.map(conversation => (
          <Conversation key={conversation.id} conversation={conversation} />
        ))
      )}
    </div>
  )
}

export default Conversations
