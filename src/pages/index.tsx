import { useAuth } from '@/context/AuthContext'

const Home = () => {
  const { userContext } = useAuth()

  return (
    <div className="gap-3 flex-1 flex flex-col items-center justify-center">

      {userContext.user && <h1 className='text-3xl block'>hello {userContext.user.name}</h1>}
      <h1 className='text-3xl block'>welcome to this online shop</h1>
    </div>
  )
}

export default Home
