import { useState } from 'react'
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi"
import { IoMdClose } from "react-icons/io"
import Icon_md from "../assets/Icon_md.svg"


interface SearchComponentProps {
  id: string | null | undefined;
}



const Navbar = ({ id }: SearchComponentProps) => {
  return (
    <>
      <div className='md:hidden block'>
        <ResponsiveNav id={id} />
      </div>
      <div className='mt-5 md:block hidden '>

        <Link to="/">
          <div className="icon_nav flex justify-center items-center cursor-pointer pb-3 mb-4">
            <img
              className="w-[70px] mr-2"
              src={Icon_md} alt="Icon" />
            <h1 className="text-gray-300 font-semibold text-2xl">FitHub</h1>
          </div>
        </Link>

        <Link to="/">
          <div className={`${(id === '') ? "text-blue-400" : "text-gray-300"} navbar-card cursor-pointer px-2 py-1 rounded-sm font-semibold bg-zinc-800 hover:bg-zinc-700 mb-3`}>
            <h1>Exercise Wiki</h1>
          </div>
        </Link>

        <Link to="/dailyCal">
          <div className={`${(id === 'dailyCal') ? "text-blue-400" : "text-gray-300"} navbar-card cursor-pointer px-2 py-1 rounded-sm font-semibold bg-zinc-800 hover:bg-zinc-700 mb-3`}>
            <h1>Daily calory</h1>
          </div>
        </Link>
        <Link to="/bmi">
          <div className={`${(id === 'bmi') ? "text-blue-400" : "text-gray-300"} navbar-card cursor-pointer px-2 py-1 rounded-sm font-semibold bg-zinc-800 hover:bg-zinc-700 mb-3`}>
            <h1>Mass Index</h1>
          </div>
        </Link>
        <Link to="/fatPer">
          <div className={`${(id === 'fatPer') ? "text-blue-400" : "text-gray-300"} navbar-card cursor-pointer px-2 py-1 rounded-sm  font-semibold bg-zinc-800 hover:bg-zinc-700 mb-3`}>
            <h1>Fat Percentage</h1>
          </div>
        </Link>
      </div>
    </>
  )
}

const ResponsiveNav = ({ id }: SearchComponentProps) => {

  const [open, setOpen] = useState(false)

  return (
    <div className='mb-10'>
      <div className='text-blue-400 fixed z-30 top-2 left-3 h-[40px] w-full bg-transparent flex justify-left items-center'>
        {
          open ?
            <div
              onClick={() => setOpen(false)}
              className=' bg-zinc-800 hover:bg-zinc-700 p-2 rounded-full'>
              <IoMdClose size={25} />
            </div>
            :
            <div
              onClick={() => setOpen(true)}
              className=' bg-zinc-800 hover:bg-zinc-700 p-2 rounded-full'>
              <GiHamburgerMenu size={25} />
            </div>
        }


      </div>
      <div className={`fixed top-0 h-screen w-2/3 
      bg-gradient-to-tl from-[#000000] to-[#1515157a]
      backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${open ?
          'left-0' : '-left-full'}`}>
        <Link to="/">
          <div className="icon_nav flex justify-center items-center cursor-pointer pb-3 mb-4">
            <img
              className="w-[70px] mr-2"
              src={Icon_md} alt="Icon" />
          </div>
        </Link>
        <Link to="/">
          <div className={`${(id === '') ? "text-blue-400" : "text-gray-300"} navbar-card cursor-pointer px-2 py-1 rounded-sm font-semibold bg-zinc-800 hover:bg-zinc-700 mb-3`}>
            <h1>Exercise Wiki</h1>
          </div>
        </Link>

        <Link to="/dailyCal">
          <div className={`${(id === 'dailyCal') ? "text-blue-400" : "text-gray-300"} navbar-card cursor-pointer px-2 py-1 rounded-sm font-semibold bg-zinc-800 hover:bg-zinc-700 mb-3`}>
            <h1>Daily calory</h1>
          </div>
        </Link>
        <Link to="/bmi">
          <div className={`${(id === 'bmi') ? "text-blue-400" : "text-gray-300"} navbar-card cursor-pointer px-2 py-1 rounded-sm font-semibold bg-zinc-800 hover:bg-zinc-700 mb-3`}>
            <h1>Mass Index</h1>
          </div>
        </Link>

        <Link to="/fatPer">
          <div className={`${(id === 'fatPer') ? "text-blue-400" : "text-gray-300"} navbar-card cursor-pointer px-2 py-1 rounded-sm  font-semibold bg-zinc-800 hover:bg-zinc-700 mb-3`}>
            <h1>Fat Percentage</h1>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar