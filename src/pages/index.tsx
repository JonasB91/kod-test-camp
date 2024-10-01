import Link from "next/link";

const MainPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Welcome to TODO-APP</h1>
      <img 
      src="/images/landingPage.jpg" 
      alt="LandingPage"
      className="w-1/2 h-auto mb-4 rounded-lg" 
      />
      <Link href="/todo">
      
      <button className="bg-blue-600 text-white rounded-md p-2 hover:bg-blue-700 transition duration-200">
        Go to Todo-list
      </button>
      </Link>
    </div>
  )

}

export default MainPage;