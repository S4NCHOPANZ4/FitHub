import Icon_md from "../assets/Icon_md.svg"

const Navbar = () => {
  return (
    <div className='mt-5'>

      <div className="icon_nav flex justify-center items-center cursor-pointer pb-3 mb-4">
          <img 
          className="w-[70px] mr-2"
          src={Icon_md} alt="Icon" />
        <h1 className="text-gray-500 font-semibold text-2xl">GetToLive</h1>
      </div>
      <div className="navbar-card cursor-pointer px-2 py-1 rounded-sm text-gray-500 font-semibold hover:bg-gray-200 mb-3">
        <h1>Home</h1>
      </div>
      <div className="navbar-card cursor-pointer px-2 py-1 rounded-sm text-gray-500 font-semibold hover:bg-gray-200 mb-3">
        <h1>Exercise Wiki</h1>
      </div>
      <div className="navbar-card cursor-pointer px-2 py-1 rounded-sm text-gray-500 font-semibold hover:bg-gray-200 mb-3">
        <h1>Daily calory</h1>
      </div>
      <div className="navbar-card cursor-pointer px-2 py-1 rounded-sm text-gray-500 font-semibold hover:bg-gray-200 mb-3">
        <h1>Mass Index</h1>
      </div>
      <div className="navbar-card cursor-pointer px-2 py-1 rounded-sm text-gray-500 font-semibold hover:bg-gray-200 mb-3">
        <h1>Fat Percentage</h1>
      </div>
    </div>
  )
}

export default Navbar