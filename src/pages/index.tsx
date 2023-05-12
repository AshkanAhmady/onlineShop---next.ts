import Link from 'next/link'

const Home = () => {
  return (
    <div className="gap-3 flex-1 flex flex-col items-center justify-center">
      <h1 className='text-2xl'>this is home page</h1>
      <button className='bg-blue-600 text-white rounded-lg shadow px-3 py-1'>
        <Link href="/blogs">
          Go to blogs page
        </Link>
      </button>
    </div>
  )
}

export default Home
