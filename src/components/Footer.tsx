import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

const Footer = () => {
  return (
    <div className=' w-full bg-zinc-800 flex flex-col item-center  py-5 mt-10'>
        <div className="flex justify-center mb-5">
            <h1 className="text-zinc-400 font-semibold">Crafted with love by Juan Buitrago {'<3'}</h1>
        </div>
        <div className="flex justify-evenly w-full">
        <h1 className="text-center text-zinc-400 ">
            <AiFillLinkedin size={35}/>
        </h1>
        <h1 className="text-center text-zinc-400 ">
            <AiFillGithub size={35}/>
        </h1>
        <h1 className="text-center text-zinc-400 ">
            <AiFillLinkedin size={35}/>
        </h1>
        <h1 className="text-center text-zinc-400 ">
            <AiFillGithub size={35}/>
        </h1>

        </div>

    </div>
  )
}

export default Footer