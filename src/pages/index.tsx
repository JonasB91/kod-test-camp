import Link from "next/link";

const MainPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Welcome to TODO-APP</h1>
      <img 
      src="/images/landingPage.jpg" 
      alt="LandingPage"
      className="w-1/2 h-auto mb-4" 
      />
      <Link href="/todo" className="text-blue-500 hover:text-blue-700">
      Go to Todo-list
      </Link>
    </div>
  )

}

export default MainPage;