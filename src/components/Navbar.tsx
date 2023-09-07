import { Link } from "react-router-dom";
import Icon_md from "../assets/Icon_md.svg"



interface SearchComponentProps {
  id: string | null | undefined;
}



const Navbar = ({ id }: SearchComponentProps) => {
  return (
    <div className='mt-5'>
      <Link to="/">
        <div className="icon_nav flex justify-center items-center cursor-pointer pb-3 mb-4">
          <img
            className="w-[70px] mr-2"
            src={Icon_md} alt="Icon" />
          <h1 className="text-gray-300 font-semibold text-2xl">GetToLive</h1>
        </div>
      </Link>
      <Link to="/">
        <div className={`${(id === undefined) ? "text-blue-500" : "text-gray-300"} navbar-card cursor-pointer px-2 py-1 rounded-sm font-semibold bg-[#1c1c1c] hover:bg-zinc-800 mb-3`}>
          <h1>Home</h1>
        </div>
      </Link>
      <Link to="/muscleWiki">
        <div className={`${(id === 'muscleWiki') ? "text-blue-500" : "text-gray-300"} navbar-card cursor-pointer px-2 py-1 rounded-sm font-semibold bg-[#1c1c1c] hover:bg-zinc-800 mb-3`}>
          <h1>Exercise Wiki</h1>
        </div>
      </Link>

      <Link to="/dailyCal">
        <div className={`${(id === 'dailyCal') ? "text-blue-500" : "text-gray-300"} navbar-card cursor-pointer px-2 py-1 rounded-sm font-semibold bg-[#1c1c1c] hover:bg-zinc-800 mb-3`}>
          <h1>Daily calory</h1>
        </div>
      </Link>
      <div className="navbar-card cursor-pointer px-2 py-1 rounded-sm text-gray-300 font-semibold bg-[#1c1c1c] hover:bg-zinc-800 mb-3">
        <h1>Mass Index</h1>
      </div>
      <div className="navbar-card cursor-pointer px-2 py-1 rounded-sm text-gray-300 font-semibold bg-[#1c1c1c] hover:bg-zinc-800 mb-3">
        <h1>Fat Percentage</h1>
      </div>
    </div>
  )
}

export default Navbar