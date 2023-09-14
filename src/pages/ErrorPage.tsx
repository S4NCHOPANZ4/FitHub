import Navbar from "../components/Navbar"

const ErrorPage = () => {
  return (
    <>
    <div className="mr-3">
        <Navbar id={'error'}/>
    </div>
    <div className="w-full md:w-[80%] mt-5 min-h-[90vh] flex items-center justify-center flex-col">
        <h1 className="text-blue-400 font-semibold text-3xl">404</h1>
        <h1 className="text-zinc-400">Page not found</h1>
    </div>
</>
  )
}

export default ErrorPage