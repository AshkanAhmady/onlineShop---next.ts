import { useSelector } from "react-redux"

const Home = () => {
  const { user } = useSelector((state: any) => state.userSignIn)

  return (
    <div className="gap-3 flex-1 flex flex-col items-center justify-center">

      {user && <h1 className='text-3xl block'>hello {user.name}</h1>}
      <h1 className='text-3xl block'>welcome to this online shop</h1>
    </div>
  )
}

export default Home
